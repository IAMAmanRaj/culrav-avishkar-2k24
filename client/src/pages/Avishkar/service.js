import Axios from "../../Components/profile_DashBoard/axiosService.js";

const registerForEvent = async ({
  eventId,
  teamId,
  userId,
  eventName,
  department,
  maxTeamSize,
  minTeamSize,
  token,
}) => {
  try {
    const response = await Axios.post(
      `/event/v1/registerForEvent`,
      {
        eventId,
        teamId,
        userId,
        eventName,
        department,
        maxTeamSize,
        minTeamSize,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response?.data;
  } catch (err) {
    console.log(err);
    return err?.response?.data;
  }
};

export { registerForEvent };
