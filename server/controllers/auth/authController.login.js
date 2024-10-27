import jwt from 'jsonwebtoken';
import User from "../../Models/user.model.js";
// Login a user
const Login = async (req, res) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // .............. checks start ...............
    // if (email.includes("@mnnit.ac.in")) {
    //   if (!checkEmail(email)) {
    //     return res.status(400).json({ message: "Invalid mnnit email" });
    //   }
    // } else {
    //   if (!checkOtherCollegeEmail(email)) {
    //     return res.status(400).json({ message: "Invalid email" });
    //   }
    // }
    // if (!checkPassword(password)) {
    //   return res.status(400).json({ message: "Invalid password" });
    // }
    // .............. checks end ...............

    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    // Compare the password
    const match = await isMatch(
      password,
      user.password.encryptedData,
      user.password.iv
    );
    if (!match) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    // Check if the user is verified
    if (user.isVerifiedUser === false) {
      return res.status(400).json({ message: "Please verify your email" });
    }
    // check if the user has paid the registration fee
    if (!email.includes("@mnnit.ac.in")) {
      if (user.isFeePaid === false) {
        return res
          .status(400)
          .json({ message: "Please pay the registration fee" });
      }
    }
    // Create a token
    console.log(process.env.JWT_SECRET);
    
    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    res.status(200).json({ message: "Login successful",token, user });
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ message: "Server error" });
  }
};

export default Login;