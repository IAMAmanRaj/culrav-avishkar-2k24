import {
  generateVerificationEmail,
  generateVerificationToken,
} from "../../Utils/auth/auth.utils.js";

import UserModel from "../../Models/user.model.js";
import VerificationToken from "../../Models/verificationToken.model.js";
import SendEmail from "../../Utils/auth/sendEmail.js";

// verify if user exists and send verification email
const SendPasswordTokenEmail = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Invalid email" });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Email not registered" });
    }

    // Check if a token already exists for the email
    let tokenDetails = await VerificationToken.findOne({ email });
    const token = generateVerificationToken();

    if (tokenDetails) {
      // Update the existing token
      tokenDetails.token = token;
      await tokenDetails.save();
    } else {
      // Create a new token
      tokenDetails = new VerificationToken({
        email: email,
        token: token,
      });
      await tokenDetails.save();
    }

    const subject = "Forgot Password Token";
    const text = generateVerificationEmail(token, "forgot password");
    SendEmail(email, subject, text);
    res.status(200).json({ message: "Token sent to email" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export default SendPasswordTokenEmail;