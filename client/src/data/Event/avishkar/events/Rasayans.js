import RasayanPic from "../images/Main/Rasayans.webp";

const Rasayans = {
  eventName: "Rasayans",
  tagline: "Chemistry Unleashed",
  BGImageLink: RasayanPic,
  instagramLink: "", // Add Instagram link if available
  events: [
    {
      eventName: "Chemathlon",
      eventId: "93",
      description:
        "Chemathlon is a mock placement event with rounds simulating real recruitment processes, including resume submission, online tests, group discussions, and interviews.",
      rules: [
        "Round 1: Resume Submission",
        "Round 2: Online Test (Core / Software / Consultancy)",
        "Round 3: Group Discussion",
        "Round 4: Interviews",
        "Individual participation",
        "Branches Allowed: Chemical Engineering",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      BGImageLink: RasayanPic,
      PsLink: "",
      coordinators: [
        { name: "Neelansh Agrawal", contact: "8057339335" },
        { name: "Sheetal", contact: "8239391313" },
        { name: "Aaditya", contact: "9027090899" },
        { name: "Aniket Mohanty", contact: "6203830907" },
        { name: "Utkarsh Jaiswal", contact: "7905757865" },
        { name: "Abhinav Tiwari", contact: "7054425113" },
      ],
    },
    {
      eventName: "Chemexpo",
      eventId: "94",
      description:
        "Chem Expo is a flagship event where teams showcase models addressing real-life chemical engineering problems.",
      rules: [
        "Round 1: Abstract Submission",
        "Round 2: Model Showcasing",
        "Round 3: Viva",
        "Team size: Max 3 (2nd/3rd years), Max 4 (1st year)",
        "Branches Allowed: All (at least one from Chemical Engineering)",
        "Budget constraint applies",
      ],
      maxTeamSize: 4,
      minTeamSize: 1,
      BGImageLink: RasayanPic,
      PsLink: "",
      coordinators: [
        { name: "Varun Yadav", contact: "7084349373" },
        { name: "Arpit Mittal", contact: "6378137978" },
        { name: "Mohd Hussain Raza", contact: "9336696539" },
        { name: "Pranjal Sharma", contact: "7014144852" },
      ],
    },
    {
      eventName: "Simulenz",
      eventId: "95",
      description:
        "Simulenz challenges participants to solve industrial problems using Aspen simulation software.",
      rules: [
        "Round 1: Mid Evaluation",
        "Round 2: Presentation Round",
        "Team size: Max 3",
        "Branches Allowed: Chemical Engineering",
      ],
      maxTeamSize: 3,
      minTeamSize: 1,
      BGImageLink: RasayanPic,
      PsLink: "",
      coordinators: [
        { name: "Mohd Bilal", contact: "6398590762" },
        { name: "Varun Yadav", contact: "7084349373" },
        { name: "Amit Kumar", contact: "9631142204" },
      ],
    },
    {
      eventName: "Quizophilia",
      eventId: "96",
      description:
        "A quiz-based event to test participants' cognitive and analytical abilities across multiple rounds.",
      rules: [
        "Round 1: Pen and Paper",
        "Rounds 2 & 3: Surprise Rounds",
        "Team size: Max 3",
        "Cross-year and cross-branch teams allowed",
        "At least one member from Chemical Engineering",
      ],
      maxTeamSize: 3,
      minTeamSize: 1,
      BGImageLink: RasayanPic,
      PsLink: "",
      coordinators: [
        { name: "Amit Kumar", contact: "9631142204" },
        { name: "Prince Pal", contact: "7084349373" },
        { name: "Dharmesh Baghel", contact: "9285423732" },
        { name: "Arpit Mittal", contact: "6378137978" },
      ],
    },
    {
      eventName: "WebCode",
      eventId: "97",
      description:
        "A web development competition where participants tackle open tech stack problem statements.",
      rules: [
        "Round 1: Abstract Submission",
        "Round 2: Mid Evaluation",
        "Round 3: Final Evaluation",
        "Team size: Max 4",
        "Cross-branch teams allowed",
        "Team Leader must be from Chemical Engineering",
      ],
      maxTeamSize: 4,
      minTeamSize: 1,
      BGImageLink: RasayanPic,
      PsLink: "",
      coordinators: [
        { name: "Ashutosh Tewari", contact: "8795294739" },
        { name: "Aaditya", contact: "9027090899" },
        { name: "Utkarsh Jaiswal", contact: "7905757865" },
        { name: "Neelansh Agrawal", contact: "8057339335" },
      ],
    },
    {
      eventName: "Data Vision",
      eventId: "98",
      description:
        "A data science event with tasks involving machine learning, deep learning, and NLP.",
      rules: [
        "Round 1: Abstract Submission",
        "Round 2: Mid Evaluation",
        "Round 3: Final Evaluation",
        "Team size: Max 4",
        "Cross-branch teams allowed",
        "Team Leader must be from Chemical Engineering",
      ],
      maxTeamSize: 4,
      minTeamSize: 1,
      BGImageLink: RasayanPic,
      PsLink: "",
      coordinators: [
        { name: "Ayan Basak", contact: "9804545597" },
        { name: "Ashutosh Tewari", contact: "8795294739" },
      ],
    },
    {
      eventName: "Scavenger Hunt",
      eventId: "99",
      description:
        "A fun, cross-disciplinary event with surprise rounds and broad participation.",
      rules: [
        "Round 1: Test",
        "Rounds 2 & 3: Surprise Rounds",
        "Team size: Max 4",
        "Cross-year and cross-branch teams allowed",
      ],
      maxTeamSize: 4,
      minTeamSize: 1,
      BGImageLink: RasayanPic,
      PsLink: "",
      coordinators: [
        { name: "Ayan Basak", contact: "9804545597" },
        { name: "Mohd Bilal", contact: "6398590762" },
        { name: "Sheetal", contact: "8239391313" },
        { name: "Shashwat Kapoor", contact: "9696065829" },
        { name: "Dharmesh Baghel", contact: "9285423732" },
        { name: "Manoj Kumar", contact: "7563843645" },
      ],
    },
  ],
};

export default Rasayans;
