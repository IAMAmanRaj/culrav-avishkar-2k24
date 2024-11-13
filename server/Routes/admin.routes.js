import express from "express";
import {
  getallFeePaid,
  getallFeeNotPaid,
  getallTeamEvents,
  downloadAllEventTeamMembers,
  downloadAllEventTeamMembersEventId,
  downloadAcceptedTeamMembers,
  downloadAcceptedTeamMembersEventId,
  makedepartmentcoordinator,
  getalldepartmentcoordinators,
  getdepartmentcoordinatorsByDep,
  deletedepartmentcoordinators,
  verifypayment,
} from "../Controllers/admin.controller.js";
import {
  AuthenticateToken,
  isAdmin,
  isDepartmentCoordinator,
  isFestivalSecretary,
} from "../Middlewares/auth.middleware.js";

const router = express.Router();
router.get("/getallFeePaid", isAdmin, getallFeePaid);
router.get("/getallFeeNotPaid", isAdmin, getallFeeNotPaid);
router.get("/getallTeamEvents/:eventId", isFestivalSecretary, getallTeamEvents);
router.get(
  "/downloadAllEventTeamMembers/:eventId",
  isFestivalSecretary,
  downloadAllEventTeamMembersEventId
);
router.get(
  "/downloadAllEventTeamMembers",
  isFestivalSecretary,
  downloadAllEventTeamMembers
);
router.get(
  "/downloadAcceptedTeamMembers/:eventId",
  isFestivalSecretary,
  downloadAcceptedTeamMembersEventId
);
router.get(
  "/downloadAcceptedTeamMembers",
  isFestivalSecretary,
  downloadAcceptedTeamMembers
);
router.post("/makedc", isFestivalSecretary, makedepartmentcoordinator);
router.get("/getalldcs", isFestivalSecretary, getalldepartmentcoordinators);
router.get("/getdcsBydep", isFestivalSecretary, getdepartmentcoordinatorsByDep);
router.post("/deletedcs", isFestivalSecretary, deletedepartmentcoordinators);
router.post("/verifypayment", isFestivalSecretary, verifypayment);

export default router;