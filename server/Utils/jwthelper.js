import jwt from 'jsonwebtoken'; // Make sure you are using the correct package

// Generate verification token
const generateVerificationToken = async function (user) {
  try {
    const token = await jwt.sign(user, process.env.VERIFICATION_TOKEN_SECRET);
    const tokenParam = Buffer.from(token).toString("base64");
    return tokenParam;
  } catch (error) {
    console.error("Error generating verification token:", error);
  }
};

// Verify the token
const verifyToken = async function (token) {
  try {
    const jwttoken = Buffer.from(token, "base64").toString("utf-8");
    const payload = await jwt.verify(jwttoken, process.env.VERIFICATION_TOKEN_SECRET);
    console.log(payload);
    return {
      message: payload,
      flag: true,
    };
  } catch (error) {
    console.log("verifyToken() " + error.message);
    return {
      message: error.message,
      flag: false,
    };
  }
};

// Export both functions together
export { generateVerificationToken, verifyToken };

