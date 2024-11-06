import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaderId: null,
  teams: [],
  status: "idle",
  error: null,
};

const teamSlice = createSlice({
  name: "teams",
  initialState,
  reducers: {
    createTeamSuccess(state, action) {
      console.log("action.payload", action.payload);
      state.teams.push(action.payload);
      state.status = "succeeded";
    },
    createTeamFailure(state, action) {
      state.error = action.payload;
      state.status = "failed";
    },
    setLeaderId(state, action) {
      state.leaderId = action.payload;
    },
  },
});

export const { createTeamSuccess, createTeamFailure, setLeaderId } =
  teamSlice.actions;

export default teamSlice.reducer;
