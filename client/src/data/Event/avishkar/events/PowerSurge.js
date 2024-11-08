import PowersurgePic from "../images/Main/POWERSURGE.webp";
import PowersurgeSubPic from "../images/Sub/PowerSurge.webp";

const PowerSurge = {
  eventName: "PowerSurge",
  tagline: "Ignite the Spark of Innovation",
  BGImageLink: PowersurgePic, // Add background image link here
  instagramLink: "https://www.instagram.com/powersurge/", // Placeholder for Instagram link
  events: [
    {
      eventName: "Pentathlon",
      eventId: "87",
      description:
        "A multidisciplinary event combining problem-solving, innovation, and teamwork across various electrical engineering challenges.",
      rules: [
        "Teams must consist of members from multiple branches.",
        "Adherence to competition rules and ethical conduct is mandatory.",
      ],
      maxTeamSize: 5,
      minTeamSize: 3,
      BGImageLink: PowersurgeSubPic, // Add background image link here
      PsLink: "",
      coordinators: [
        { name: "Varun Yadav", contact: "7084349373" },
        { name: "Arpit Mittal", contact: "6378137978" },
        { name: "Mohd Hussain Raza", contact: "9336696539" },
        { name: "Pranjal Sharma", contact: "7014144852" },
      ],
    },
    {
      eventName: "Codesparks",
      eventId: "88",
      description:
        "An event focused on coding challenges specific to electrical engineering applications.",
      rules: [
        "Only individual participation is allowed.",
        "Participants must complete coding tasks within the given time limit.",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      BGImageLink: PowersurgeSubPic, // Add background image link here
      PsLink: "",
      coordinators: [
        { name: "Mohd Bilal", contact: "6398590762" },
        { name: "Amit Kumar", contact: "9631142204" },
        { name: "Varun Yadav", contact: "7084349373" },
        { name: "Arpit Mittal", contact: "6378137978" },
      ],
    },
    {
      eventName: "DevOrDie",
      eventId: "89",
      description:
        "A fast-paced development event where participants create and optimize hardware or software solutions.",
      rules: [
        "All work must be original and developed during the event.",
        "Teams should present a functioning prototype by the end of the event.",
      ],
      maxTeamSize: 3,
      minTeamSize: 2,
      BGImageLink: PowersurgeSubPic, // Add background image link here
      PsLink: "",
      coordinators: [
        { name: "Amit Kumar", contact: "9631142204" },
        { name: "Prince Pal", contact: "7084349373" },
        { name: "Dharmesh Baghel", contact: "9285423732" },
      ],
    },
    {
      eventName: "Predefined Hardware",
      eventId: "90",
      description:
        "A team-based event focusing on simulation and hardware projects related to electrical engineering.",
      rules: [
        "Only B.Tech students in specified branches and years are eligible.",
        "Projects must adhere to the predefined specifications.",
      ],
      maxTeamSize: 5,
      minTeamSize: 3,
      BGImageLink: PowersurgeSubPic, // Add background image link here
      PsLink: "",
      coordinators: [
        { name: "Ashutosh Tewari", contact: "8795294739" },
        { name: "Aaditya", contact: "9027090899" },
        { name: "Utkarsh Jaiswal", contact: "7905757865" },
        { name: "Neelansh Agrawal", contact: "8057339335" },
      ],
    },
    {
      eventName: "CircuitBizz",
      eventId: "91",
      description:
        "A solo event where participants face hands-on circuit challenges to test basic electrical knowledge.",
      rules: [
        "Individual participation only.",
        "Each participant must complete the circuits within the time limit.",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      BGImageLink: PowersurgeSubPic, // Add background image link here
      PsLink: "",
      coordinators: [
        { name: "Ayan Basak", contact: "9804545597" },
        { name: "Ashutosh Tewari", contact: "8795294739" },
      ],
    },
    {
      eventName: "War of Currents",
      eventId: "92",
      description:
        "A stress-relieving event mixing learning with adventure, designed to offer an engaging experience outside academics.",
      rules: [
        "Open to participants from all courses.",
        "Teams must complete the challenges within the time frame.",
      ],
      maxTeamSize: 3,
      minTeamSize: 3,
      BGImageLink: PowersurgeSubPic, // Add background image link here
      PsLink: "",
      coordinators: [
        { name: "Ayan Basak", contact: "9804545597" },
        { name: "Mohd Bilal", contact: "6398590762" },
        { name: "Sheetal", contact: "8239391313" },
        { name: "Shashwat Kapoor", contact: "9696065829" },
        { name: "Dharmesh Baghel", contact: "9285423732" },
      ],
    },
  ],
};

export default PowerSurge;
