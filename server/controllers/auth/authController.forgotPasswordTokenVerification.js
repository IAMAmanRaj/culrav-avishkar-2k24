import User from "../../Models/user.model.js";
import verificationToken from "../../Models/verificationToken.model.js";
import { sendPasswordEmail } from "../../Utils/auth/auth.utils.js";
import SendEmail from "../../Utils/auth/sendEmail.js";

const SendPasswordToEmail = async (req, res) => {
  try {
    const { token } = req.body;
    if (!token) {
      res.status(400).json({
        message: "Please give token",
      });
      return;
    }
    const foundToken = await verificationToken.findOne({ token });
    if (!foundToken) {
      res.status(400).json({
        message: "Invalid token",
      });
      return;
    }
    const email = foundToken.email;
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({
        message: "user doesn't exists",
      });
      return;
    }
    const hashedPassword = user.password.encryptedData;
    const iv = user.password.iv;
    // code to decode the password
    const password = await decryptPassword(hashedPassword, iv);
    const subject = "Password Recovery";
    const text = sendPasswordEmail(password);
    // const text = sendPasswordEmail(user.password);
    SendEmail(email, subject, text);

    await verificationToken.findOneAndDelete({ token });
    res.status(200).json({
      message: "Password sent to email",
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      error: error,
    });
  }
};

export default SendPasswordToEmail;