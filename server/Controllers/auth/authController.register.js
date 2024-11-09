import User from "../../Models/user.model.js";
import VerificationToken from "../../Models/verificationToken.model.js";
import {
  checkEmail,
  checkName,
  checkOtherCollegeEmail,
  checkPassword,
  checkPhone,
  generateVerificationEmail,
  generateVerificationToken,
} from "../../Utils/auth/auth.utils.js";
import { encryptPassword } from "../../Utils/auth/encriptionAndDecription.js";
import AsyncErrorHandler from "../../ErrorHandlers/async_error_handler.js";
import SendEmail from "../../Utils/auth/sendEmail.js";

// Register a new user
const Register = AsyncErrorHandler(async (req, res, next) => {
  const { name, email, password, phone, isOtherCollege } = req.body;

  // Check if email, password, and phone are provided
  if (!email || !password || !phone) {
    return res.status(400).json({
      success: false,
      message: "Email, password, and phone are required",
    });
  }

  try {
    // ............................. checks start ...........................
    if (isOtherCollege) {
      // check college for other college.
      if (!req.body.college) {
        return res.status(400).json({
          success: false,
          message: "College Name is Missing",
        });
      }
      if (!checkOtherCollegeEmail(email) || !checkPhone(phone)) {
        return res.status(400).json({
          success: false,
          message: "Invalid email or phone",
        });
      }
    } else {
      if (!checkEmail(email)) {
        return res.status(400).json({
          success: false,
          message: "Invalid email",
        });
      }
    }

    if (!checkName(name)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Name",
      });
    }
    if (checkPassword(password).state === "invalid") {
      return res.status(400).json({
        success: false,
        message: checkPassword(password).message,
      });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    // Check if the phone number already exists
    const existingPhoneUser = await User.findOne({ phone: `+91${phone}` });

    if (existingUser && !existingUser.isVerifiedUser) {
      // Delete the unverified user
      await User.deleteOne({ email });
      await VerificationToken.deleteOne({ email });
    } else if (existingUser && existingUser.isVerifiedUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
        emailVerified: true,
      });
    }

    if (existingPhoneUser && !existingPhoneUser.isVerifiedUser) {
      // Delete the unverified user by phone number
      await User.deleteOne({ phone: `+91${phone}` });
      await VerificationToken.deleteOne({ email: existingPhoneUser.email });
    } else if (existingPhoneUser && existingPhoneUser.isVerifiedUser) {
      return res.status(400).json({
        success: false,
        message: "Phone Number already registered",
      });
    }

    // ........................... checks end...............................
    // Hash the password
    const hashedPassword = await encryptPassword(password);
    // Create a new user
    let user = {
      name,
      email,
      password: hashedPassword,
      userName: email.split("@")[0],
      college: isOtherCollege ? req.body.college : "MNNIT",
      phone: `+91${phone}`, // Append +91 to the phone number
      paymentLink: null,
    };

    const newUser = new User(user);

    // Save the user to the database
    await newUser.save();

    const verificationToken = generateVerificationToken();
    // create a new entry in the verification token model
    const token = new VerificationToken({
      email: email,
      token: verificationToken,
    });
    await token.save();
    const subject = "Email verification";
    const text = generateVerificationEmail(verificationToken, subject);
    SendEmail(email, subject, text);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      emailVerified: false,
    });
  } catch (error) {
    next(error);
  }
});

export default Register;
