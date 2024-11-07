import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaderId: null,
  myTeams: [],
  joinedTeams: [],
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
        team.participatingEvents.push(eventId);
      }
    },
    resetTeamState(state) {
        state.leaderId = null;
        state.myTeams = [];
        state.joinedTeams = [];
        state.status = "idle";
        state.error = null;
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
} = teamSlice.actions;

export default teamSlice.reducer;