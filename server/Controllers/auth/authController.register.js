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
import SendEmail from "../../Utils/auth/sendEmail.js";

// Register a new users
const Register = async (req, res) => {
  const { name, email, password, isOtherCollege } = req.body;
  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  try {
    // ............................. checks start ...........................
    if (isOtherCollege) {
      const { phone } = req.body;
      if (!checkOtherCollegeEmail(email) || !checkPhone(phone)) {
        return res.status(400).json({ message: "Invalid email or phone" });
      }
    } else {
      if (!checkEmail(email)) {
        return res.status(400).json({ message: "Invalid email" });
      }
    }
    if (!checkPassword(password) || !checkName(name)) {
      return res.status(400).json({ message: "Invalid password or name" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
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
    };
    if (isOtherCollege) {
      const { phone, college } = req.body;
      user = {
        ...user,
        phone,
        college: college || "Other",
      };
    }
    const newUser = new User(user);

    // Save the user to the database
    await newUser.save();

    const verificationToken = generateVerificationToken();
    const token = new VerificationToken({
      email: email,
      token: verificationToken,
    });
    await token.save();
    const subject = "Email verification";
    const text = generateVerificationEmail(
      verificationToken,
      "email verification"
    );
    SendEmail(email, subject, text);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error });
  }
};
export default Register;