import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaderId: null,
  myTeams: [],
  joinedTeams: [],
  invitations: [],
  registeredEvents: [],
  activeMembers: [], // Add this field for active members
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
      const { teamId, eventId } = action.payload;
      const team = state.myTeams.find((team) => team._id === teamId);
      if (team) {
        team.registeredEvents.push(eventId);
      }
    },
    resetTeamState(state) {
      state.leaderId = null;
      state.myTeams = [];
      state.joinedTeams = [];
      state.activeMembers = []; // Reset active members
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
    kickMemberSuccess(state, action) {
      const { teamId, memberId } = action.payload;
      const team = state.myTeams.find((team) => team._id === teamId);
      if (team) {
        team.acceptedMembers = team.acceptedMembers.filter(
          (member) => member._id !== memberId
        );
      }
      state.activeMembers = state.activeMembers.filter(
        (member) => member._id !== memberId
      );
    },
    setActiveMembers(state, action) {
      const { acceptedMembers} = action.payload;
      state.activeMembers = acceptedMembers;
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
  kickMemberSuccess,
  setActiveMembers,
} = teamSlice.actions;

export default teamSlice.reducer;
