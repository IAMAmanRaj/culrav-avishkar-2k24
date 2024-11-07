import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaderId: null,
  myTeams: [],
  joinedTeams: [],
  invitations: [],
  registeredEvents:[],
  status: "idle",
  error: null,
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    createTeamSuccess(state, action) {
      state.myTeams.push(action.payload);
      state.status = "succeeded";
    },
    createTeamFailure(state, action) {
      state.error = action.payload;
      state.status = "failed";
    },
    setLeaderId(state, action) {
      state.leaderId = action.payload;
    },
    deleteTeamSuccess(state, action) {
      state.myTeams = state.myTeams.filter(
        (team) => team.teamName !== action.payload
      );
      state.status = "succeeded";
    },
    fetchTeamsSuccess(state, action) {
      state.myTeams = action.payload.myTeams;
      state.joinedTeams = action.payload.joinedTeams;
      state.status = "succeeded";
    },
    fetchTeamsFailure(state, action) {
      state.error = action.payload;
      state.status = "failed";
    },
    registerEventSuccess(state, action) {
      console.log("payload is ", action.payload);

      const { teamId, eventId } = action.payload;
      console.log("this is the registered team's id", teamId);
      console.log("this is the registered event's id", eventId);
      const team = state.myTeams.find((team) => team._id === teamId);
      if (team) {
        team.registeredEvents.push(eventId);
      }
    },
    resetTeamState(state) {
      state.leaderId = null;
      state.myTeams = [];
      state.joinedTeams = [];
      state.status = "idle";
      state.error = null;
    },
    fetchInvitationsSuccess(state, action) {
      state.invitations = action.payload;
      state.status = "succeeded";
    },
    fetchInvitationsFailure(state, action) {
      state.error = action.payload;
      state.status = "failed";
    },
    acceptInvitationSuccess(state, action) {
      state.invitations = state.invitations.filter(
        (invite) => invite._id !== action.payload._id
      );
      state.joinedTeams.push(action.payload._id);
    },
    rejectInvitation(state, action) {
      state.invitations = state.invitations.filter(
        (invite) => invite._id !== action.payload
      );
    },
  },
});

export const {
  createTeamSuccess,
  createTeamFailure,
  setLeaderId,
  deleteTeamSuccess,
  fetchTeamsSuccess,
  fetchTeamsFailure,
  registerEventSuccess,
  resetTeamState,
  fetchInvitationsSuccess,
  fetchInvitationsFailure,
  acceptInvitationSuccess,
  rejectInvitation,
} = teamSlice.actions;

export default teamSlice.reducer;
