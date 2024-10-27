import {
    generateVerificationEmail,
    generateVerificationToken,
} from "../../Utils/auth/auth.utils.js";

import UserModel from "../../Models/user.model.js";
import verificationToken from "../../Models/verificationToken.model.js";
import SendEmail from "../../Utils/auth/sendEmail.js";

// verify is user exists and send verification email
const SendPasswordTokenEmail = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      res.status(400).json({
        message: "invalid email",
      });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      res.status(400).json({
        message: "User doesn't exists",
      });
    }
    const token = generateVerificationToken();
    const tokenDetails = new verificationToken({
      email: email,
      token: token,
    });
    await tokenDetails.save();
    const subject = "Forgot Password Token";
    const text = generateVerificationEmail(token, "forgot password");
    SendEmail(email, subject, text);
    res.status(200).json({ message: "token send to email" });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
};
export default SendPasswordTokenEmail;