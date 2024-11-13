import jwt from "jsonwebtoken";
import User from "../Models/user.model.js";

// Middleware to authenticate and verify JWT token
function AuthenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];
  // console.log("token: ", token);
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  // Verify the token
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("payload: ", payload);
    if (!payload) {
      return res.status(400).json({
        success: false,
        message: "User does not exist.",
      });
    }

    const user = User.findOne({ _id: payload.id });
    if (!user) {
      res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
    req.user = payload;
    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
}

async function isFestivalSecretary(req, res, next) {
  const id = req.user.id;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Id is undefined",
    });
  }

  try {
    const user = await User.findById({ _id: id });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "You are not allowed to access this route",
      });
    }

    const role = user.role;
    if (role === "FS" || role === "admin") {
      return next();
    } else {
      return res.status(400).json({
        success: false,
        message: "Only FS is allowed to access this route",
      });
    }
  } catch (err) {
    next(err);
  }
}

async function isDepartmentCoordinator(req, res, next) {
  const id = req.user.id;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Id is undefined",
    });
  }

  try {
    const user = await User.findById({ _id: id });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "You are not allowed to access this route",
      });
    }

    const role = user.role;
    if (role === "DC" || role === "admin") {
      return next();
    } else {
      return res.status(400).json({
        success: false,
        message: "Only DC is allowed to access this route",
      });
    }
  } catch (err) {
    next(err);
  }
}

async function isAdmin(req, res, next) {
  const id = req.user.id;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Id is undefined",
    });
  }

  try {
    const user = await User.findById({ _id: id });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "You are not allowed to access this route",
      });
    }

    const role = user.role;
    if (role === "admin" || role === "FS") {
      return next();
    } else {
      return res.status(400).json({
        success: false,
        message: "You are not allowed to access this route",
      });
    }
  } catch (err) {
    next(err);
  }
}

export {
  AuthenticateToken,
  isAdmin,
  isDepartmentCoordinator,
  isFestivalSecretary,
};
