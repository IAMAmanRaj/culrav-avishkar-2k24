import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    userName: {
      type: String,
      
      unique: true,
    },
    phone: {
      type: String,
      default: null,
    },
    college: {
      type: String,
      
    },
    gender: {
      type: String,
      required: true,
      default: "none",
    },
    resumeLink: {
      type: String,
    },
    password: {
      encryptedData: {
        type: String,
        required: true,
      },
      iv: {
        type: String,
        required: true,
      },
    },
    role: {
      type: String,
      default: "User",
    },
    isFeePaid: {
      type: Boolean,
      default: false,
    },
    isVerifiedUser: {
      type: Boolean,
      default: false,
    },
    participatingTeam: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Team",
    },
    pendingTeam: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Team",
    },
    paymentLink: {
      type: String,
    },
    participatingEvents: [
      {
        event: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Event",
        },
        team: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Team",
        },
      },
    ],
    department: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
