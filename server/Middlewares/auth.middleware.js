import jwt from "jsonwebtoken";
import User from "../Models/user.model.js";

// Middleware to authenticate and verify JWT token
function AuthenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];
  console.log("token: ", token);
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token." });
    }
    next();
  });
}

async function isFestivalSecretary(req, res, next) {
  const id = req.params.id;
  if (!id) {
    return next(new Error("Id is undefined"));
  }
  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      return next(new Error("User not found"));
    }
    const role = user.role;
    if (!role) {
      return next(new Error("User has no role"));
    }
    if (role == "fs") {
      return res
        .status(200)
        .json({ message: "User is festival secretary", success: "true" });
    }
    return next(new Error("User is not festival secretary"));
  } catch (e) {
    next(e);
  }
}

async function isDepartmentCoordinator(req, res, next) {
  const id = req.params.id;
  if (!id) {
    return next(new Error("Id is undefined"));
  }
  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      return next(new Error("User not found"));
    }
    const role = user.role;
    if (!role) {
      return next(new Error("User has no role"));
    }
    if (role == "dc") {
      return res
        .status(200)
        .json({ message: "User is Department Coordinator", success: "true" });
    }
    return next(new Error("User is not Department Coordinator"));
  } catch (e) {
    next(e);
  }
}

async function isAdmin(req, res, next) {
  const id = req.params.id;
  if (!id) {
    return next(new Error("Id is undefined"));
  }
  try {
    const user = await User.findOne({ _id: id });
    if (!user) {
      return next(new Error("User not found"));
    }
    const role = user.role;
    if (!role) {
      return next(new Error("User has no role"));
    }
    if (role == "dc" || role == "fs") {
      return res
        .status(200)
        .json({ message: "User is admin", success: "true" });
    }
    return next(new Error("You are not allowed to access this service"));
  } catch (e) {
    next(e);
  }
}

export {
  AuthenticateToken,
  isAdmin,
  isDepartmentCoordinator,
  isFestivalSecretary,
};
