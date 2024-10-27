import UserModel from "../../Models/user.model.js";
import VerificationToken from "../../Models/verificationToken.model.js";

// Verify a token
const VerifyToken = async (req, res) => {
  console.log(req.body);
  
  const { token } = req.body;
  if (!token) {
    return res.status(400).json({ message: "Token is required" });
  }
  try {
    const tokenExists = await VerificationToken.findOne({ token });
    if (!tokenExists) {
      return res.status(400).json({ message: "Invalid token" });
    }
    await UserModel.updateOne(
      { email: tokenExists.email },
      { $set: { isVerifiedUser: true } }
    );
    res.status(200).json({ message: "Email verified" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
export default VerifyToken;