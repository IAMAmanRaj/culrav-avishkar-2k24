import User from "../Models/user.model.js";
import Team from "../Models/team.model.js";
import Event from "../Models/event.model.js";


const getAllTeamsOfAnEvent = async (req, res, next) => {
  const { eventId } = req.params;

  if (!eventId) {
    return res.status(400).json({
      success: false,
      message: "eventId is missing",
    });
  }

  try {
    const event = await Event.findOne({ eventId }).populate([
      {
        path: "participatingTeams",
        model: Team,
        populate: {
          path: "acceptedMembers",
          model: User,
        },
      },
    ]);

    if (!event) {
      return res.status(400).json({
        success: false,
        message: "No Event with this eventId",
      });
    }

    const participatingTeams = event.participatingTeams;
    res.status(200).json({
      success: true,
      message: "Retrieved all teams successfully.",
      participatingTeams,
    });
  } catch (err) {
    next(err);
  }
};

const registerForEvent = async (req, res, next) => {
  const {
    eventId,
    teamId,
    userId,
    eventName,
    department,
    maxTeamSize,
    minTeamSize,
  } = req.body;

  if (!eventId) {
    return res.status(400).json({
      success: false,
      message: "eventId is missing",
    });
  }

  if (!teamId) {
    return res.status(400).json({
      success: false,
      message: "teamId is missing",
    });
  }

  if (!userId) {
    return res.status(400).json({
      success: false,
      message: "userId missing",
    });
  }

  if (!eventName) {
    return res.status(400).json({
      success: false,
      message: "eventName missing",
    });
  }

  if (!department) {
    return res.status(400).json({
      success: false,
      message: "department name is missing",
    });
  }

  try {
    // check if this event is in the db or not.
    var event = await Event.findOne({ eventId }).populate({
      path: "participatingTeams",
      model: Team,
    });

    if (!event) {
      //firts create the event. then register the team in the event.
      event = await Event.create({
        eventId,
        eventName,
        department,
        maxTeamSize,
        minTeamSize,
      });
    }
    //check is teamId is valid

    const tm = await Team.findById({ _id: teamId }).populate([
      {
        path: "acceptedMembers",
        model: User,
      },
      {
        path: "pendingMembers",
        model: User,
      },
    ]);
    if (!tm) {
      return res.status(400).json({
        success: false,
        message: "invalid teamId",
      });
    }
    // check if userId is valid
    const user = await User.findById({ _id: userId });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "invalid userId",
      });
    }

    // check if provided user is leader or not
    const providedUserId = JSON.stringify(userId);
    const leaderId = JSON.stringify(tm.leader);

    if (providedUserId != leaderId) {
      return res.status(400).json({
        success: false,
        message: "you can not resgiter, only leader is allowed",
      });
    }

    // if(!answer){
    //   return res.status(400).json({
    //     success:false,
    //     message:"You do not have permission to register."
    //   })
    // }

    // get all the members[pending  + accepted] of current Team,
    //check if there are any pending members of the currentTeam, is so then this team can not register.

    const acMembers = tm.acceptedMembers;
    const pdMembers = tm.pendingMembers;

    if (pdMembers.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Can't register, as there are some unaccepted members in team",
      });
    }
    // check is team size is approriate for this event
    const totalLen = acMembers.length;
    if (totalLen > event.maxTeamSize) {
      return res.status(400).json({
        success: false,
        message: `team size is big. only ${event.maxTeamSize} members team is allowed`,
      });
    }

    if (totalLen < event.minTeamSize) {
      return res.status(400).json({
        success: false,
        message: `team size is small. team size shuold be atleast ${event.minTeamSize}`,
      });
    }

    //check if this team is already registered.
    var participatingTeamIds = [];
    for (let i = 0; i < event.participatingTeams.length; i++) {
      const currId = JSON.stringify(event.participatingTeams[i]._id);
      participatingTeamIds = [...participatingTeamIds, currId];
    }
    if (participatingTeamIds.includes(JSON.stringify(teamId))) {
      return res.status(400).json({
        success: false,
        message: "Already registered",
      });
    }

    // get all the registered teams and their members of this event.
    // and check if any of the currentTeam's members are already registered with some other team
    const allTeams = event.participatingTeams;
    var allMembers = [];

    for (let i = 0; i < allTeams.length; i++) {
      var currTeam = allTeams[i];
      var currTeamMembers = currTeam.acceptedMembers;
      for (let j = 0; j < currTeamMembers.length; j++) {
        allMembers = [...allMembers, JSON.stringify(currTeamMembers[j])];
      }
    }

    var currTeamMembers = tm.acceptedMembers;

    for (let i = 0; i < currTeamMembers.length; i++) {
      if (allMembers.includes(JSON.stringify(currTeamMembers[i]._id))) {
        return res.status(400).json({
          success: false,
          message: `You have already been registered for this event with some other team`,
        });
      }
    }
    //check if registration is open or not.

    if (!event.isOpen) {
      return res.status(400).json({
        success: false,
        message: "Registration is closed.",
      });
    }

    // add this team to this event.

    const currRegisteredTeams = event.participatingTeams;
    const newCurrRegisteredTeams = [...currRegisteredTeams, teamId];
    event.participatingTeams = newCurrRegisteredTeams;

    // add this (event with team) to users participating events.

    const accMembers = tm.acceptedMembers;

    for (let i = 0; i < accMembers.length; i++) {
      accMembers[i].participatingEvents = [
        ...accMembers[i].participatingEvents,
        { event: event._id, team: teamId },
      ];
      await accMembers[i].save();
    }

    // add this event to the team.

    tm.registeredEvents = [...tm.registeredEvents, event._id];

    await event.save();
    await tm.save();

    res.status(200).json({
      success: true,
      message: "Registered successfully!",
      eventId: event._id,
    });
  } catch (err) {
    next(err);
  }
};

const createEvent = async (req, res, next) => {
  const { eventId, eventName, department, maxTeamSize, minTeamSize } = req.body;

  if (!eventId || !eventName || !department || !maxTeamSize || !minTeamSize) {
    return res.status(400).json({
      success: false,
      message: "All fields are not present",
    });
  }

  try {
    const event = await Event.findOne({ eventId });
    if (event) {
      return res.status(400).json({
        success: false,
        message: "An event is already present with this id",
      });
    }

    const newEvent = await Event.create({
      eventId,
      eventName,
      department,
      maxTeamSize,
      minTeamSize,
    });

    res.status(200).json({
      success: true,
      message: "Created Successfully!",
      newEvent,
    });
  } catch (err) {
    next(err);
  }
};

// doesn't make any sense, leaving it.
const leaveEvent = async (req, res, next) => {
  const { teamId, eventId, userId } = req.body;
  if (!teamId) {
    return res.status(400).json({
      success: false,
      message: "teamId is missing",
    });
  }

  if (!eventId) {
    return res.status(400).json({
      success: false,
      message: "eventId  is missing",
    });
  }

  if (!userId) {
    return res.status(400).json({
      success: false,
      message: "userId is missing",
    });
  }

  try {
    const user = await User.findById({ _id: userId });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "userId is invalid",
      });
    }

    const tm = await Team.findById({ _id: teamId });
    if (!tm) {
      return res.status(400).json({
        success: false,
        message: "teamId is invalid",
      });
    }

    const event = await Event.findOne({ eventId });
    if (!event) {
      return res.status(400).json({
        success: false,
        message: "eventId is invalid",
      });
    }

    //check if user is authorized to leave the event.

    const leaderId = JSON.stringify(tm.leader);
    const currentUserId = JSON.stringify(userId);
    if (leaderId != currentUserId) {
      return res.status(400).json({
        success: false,
        message: "Only leader can leave the event",
      });
    }

    // check is event is open or not

    if (!event.isOpen) {
      return res.status(400).json({
        success: false,
        message: "Event has been closed, can't leave the team",
      });
    }
  } catch (err) {
    next(err);
  }
};

const updateStatusOfAnEvent = async (req, res, next) => {
  const { status, userId, eventId } = req.body;

  if (!status) {
    return res.status(400).json({
      success: false,
      message: "status is missing",
    });
  }

  if (!userId) {
    return res.status(400).json({
      success: false,
      message: "userId is missing",
    });
  }

  if (!eventId) {
    return res.status(400).json({
      success: false,
      message: "eventId is missing",
    });
  }

  try {
    const event = await Event.findOne({ eventId });

    if (!event) {
      return res.status(400).json({
        success: false,
        message: "invalid eventId",
      });
    }

    event.isOpen = status;
    event.save();
    res.status(200).json({
      success: true,
      message: "status updated.",
    });
  } catch (err) {
    next(err);
  }
};

const getAllParticipatingEventsOfAUser = async (req, res, next) => {
  const { userId } = req.params;

  if (!userId) {
    return res.status(400).json({
      success: false,
      message: "userId is missing",
    });
  }

  try {
    const user = await User.findById({ _id: userId })
      .populate({
        path: "participatingEvents.event", // Populating the event field
        model: Event,
      })
      .populate({
        path: "participatingEvents.team", // Populating the team field
        model: Team,
      });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const participatingEvents = user.participatingEvents;

    res.status(200).json({
      success: true,
      message: "successfully retrieved!",
      participatingEvents,
    });
  } catch (err) {
    next(err);
  }
};

const getAllParticipantsOfAnEvent = async (req, res, next) => {
  const { eventId } = req.params;

  if (!eventId) {
    return res.status(400).json({
      success: false,
      message: "eventId missing",
    });
  }

  try {
    const event = await Event.findOne({ eventId }).populate({
      path: "participatingTeams",
      model: Team,
      populate: {
        path: "acceptedMembers",
        model: User,
      },
    });

    if (!event) {
      return res.status(400).json({
        success: false,
        message: "Invalid eventId",
      });
    }

    const totalTeams = event.participatingTeams;

    const members = [];

    for (let i = 0; i < totalTeams.length; i++) {
      members = [...members, totalTeams[i].acceptedMembers];
    }

    res.status(200).json({
      success: true,
      message: "fetched successfully!",
      members,
    });
  } catch (err) {
    next(err);
  }
};

export {
  getAllTeamsOfAnEvent,
  registerForEvent,
  createEvent,
  updateStatusOfAnEvent,
  getAllParticipatingEventsOfAUser,
  getAllParticipantsOfAnEvent,
};
