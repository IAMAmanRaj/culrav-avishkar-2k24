// import bg
import ElectromaniaPic from "../images/Main/ELECTROMANIA.webp";
import ElectromaniaSubPic from "../images/Sub/Electromania.webp";

const Electromania = {
  eventName: "Electromania",
  tagline: "",
  BGImageLink: ElectromaniaPic,
  instagramLink: "",
  events: [
    {
      eventName: "Quintathlon",
      eventId: "48",
      description:
        "This is the flagship event of Electromania, which replicates an actual recruitment process. It helps students assess their aptitude, technical knowledge, and gives a detailed insight into the plethora of opportunities.",
      rules: [
        "Individual participation",
        "Compulsory for all B.Tech 1st, 2nd, and 3rd Year ECE students",
        "Software Domain: Online Round + Technical Interview 1 (elimination) + Technical Interview 2",
        "Hardware Domain: Online Round + Technical Interview + HR Interview",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      BGImageLink: ElectromaniaSubPic,
      PsLink: "",
      coordinators: [
        { name: "Arun Kumar Yadav", contact: "9005416853" },
        { name: "Ishan Dikshit", contact: "7428034116" },
        { name: "Kapil Bansal", contact: "7973945499" },
        { name: "Aman Singh", contact: "8470982174" },
      ],
    },
    {
      eventName: "Codotron",
      eventId: "49",
      description:
        "The flagship competitive coding event of Electromania, designed to benchmark problem-solving skills, teamwork, and competitive coding abilities.",
      rules: [
        "Team event with a maximum of 3 members (at least 1 ECE member)",
        "Two rounds: Preliminary (elimination) + Finals",
        "Open to B.Tech 2nd Year (ECE+EE), B.Tech 3rd Year (ECE+EE), and M.Tech 1st Year students",
      ],
      maxTeamSize: 3,
      minTeamSize: 1,
      BGImageLink: ElectromaniaSubPic,
      PsLink: "",
      coordinators: [
        { name: "Aman Singh", contact: "8470982174" },
        { name: "Akhil Gupta", contact: "8958460520" },
        { name: "Ritu Gupta", contact: "8299283338" },
        { name: "Tarun Rai", contact: "7905288256" },
      ],
    },
    {
      eventName: "Impromptu",
      eventId: "50",
      description:
        "An on-the-spot circuit designing event that tests fundamental concepts in Electronics Engineering, challenging participants with limited resources.",
      rules: [
        "Team event with a maximum of 2 members (at least 1 ECE member)",
        "Two rounds: First - Online (core ECE questions), Second - Circuit Design on Proteus Software",
        "Open to B.Tech 2nd Year (ECE+EE), B.Tech 3rd Year (ECE+EE)",
      ],
      maxTeamSize: 2,
      minTeamSize: 1,
      BGImageLink: ElectromaniaSubPic,
      PsLink: "",
      coordinators: [
        { name: "Aayush Raj Jaiswal", contact: "7238986201" },
        { name: "Arun Kumar Yadav", contact: "9005416853" },
        { name: "Shivansh Agarwal", contact: "9548505794" },
      ],
    },
    {
      eventName: "Innodev",
      eventId: "51",
      description:
        "A software development team event for solving real-world problems with innovative ideas. Mentors are allotted based on project requirements.",
      rules: [
        "Team event with a maximum of 4 members (at least 1 ECE member)",
        "Three rounds: Mid-Term, Finals (elimination), Presentation + Q&A",
        "Open to B.Tech 2nd Year (ECE+EE), B.Tech 3rd Year (ECE+EE), and M.Tech 1st Year",
      ],
      maxTeamSize: 4,
      minTeamSize: 1,
      BGImageLink: ElectromaniaSubPic,
      PsLink: "",
      coordinators: [
        { name: "Ujjwal Kumar", contact: "6299808037" },
        { name: "Sachin Kumar", contact: "6202924663" },
        { name: "Kapil Bansal", contact: "7973945499" },
        { name: "Tarun Rai", contact: "7905288256" },
      ],
    },
    {
      eventName: "Circuit of the Day",
      eventId: "52",
      description:
        "A week-long simulation event focused on Electronics Circuits, blending creativity and knowledge of Electronics.",
      rules: [
        "Team event with a maximum of 2 members (at least 1 ECE member)",
        "Seven design challenges over seven days, solutions submitted daily",
        "Open to B.Tech 1st, 2nd, and 3rd Year (ECE+EE)",
      ],
      maxTeamSize: 2,
      minTeamSize: 1,
      BGImageLink: ElectromaniaSubPic,
      PsLink: "",
      coordinators: [
        { name: "Aayush Verma", contact: "9897706707" },
        { name: "Shivansh Agrawal", contact: "9548505794" },
        { name: "Vansh Arya", contact: "6203279643" },
      ],
    },
    {
      eventName: "FPGA",
      eventId: "53",
      description:
        "An advanced event using Verilog programming and digital design skills for hardware problem-solving.",
      rules: [
        "Team event with a maximum of 3 members (at least 1 ECE member)",
        "Three rounds: Mid-Term Evaluation, Verilog Coding, Final Project Presentation + Q&A",
        "Open to B.Tech 2nd Year (ECE+EE), B.Tech 3rd Year (ECE+EE), and M.Tech 1st Year",
      ],
      maxTeamSize: 3,
      minTeamSize: 1,
      BGImageLink: ElectromaniaSubPic,
      PsLink: "",
      coordinators: [
        { name: "Aayush Raj Jaiswal", contact: "7238986201" },
        { name: "Aayush Verma", contact: "9897706707" },
        { name: "Sachin Kumar", contact: "6202924663" },
      ],
    },
    {
      eventName: "Mindsweeper",
      eventId: "54",
      description:
        "A cognitive event testing aptitude, puzzles, and trivia to evaluate cognitive skills and quick thinking.",
      rules: [
        "Team event with a maximum of 3 members (open to all branches)",
        "Three rounds: Round 1, Round 2 (elimination), Finals",
        "Focus on General Aptitude, Puzzles, and Trivia",
      ],
      maxTeamSize: 3,
      minTeamSize: 2,
      BGImageLink: ElectromaniaSubPic,
      PsLink: "",
      coordinators: [
        { name: "Garvita Shukla", contact: "9305222059" },
        { name: "Sachin Kumar", contact: "6202924663" },
        { name: "Aman Singh", contact: "8470982174" },
      ],
    },
    {
      eventName: "Electroquest",
      eventId: "55",
      description:
        "An event for first-year students with rapid-fire circuit design and debugging questions.",
      rules: [
        "Team event with a maximum of 2 members (ECE only)",
        "Two rounds: Basic Aptitude + Course Questions, Circuit Design & Debugging",
        "Open to B.Tech 1st Year (ECE only)",
      ],
      maxTeamSize: 2,
      minTeamSize: 1,
      BGImageLink: ElectromaniaSubPic,
      PsLink: "",
      coordinators: [
        { name: "Garvita Shukla", contact: "9305222059" },
        { name: "Aayush Verma", contact: "9897706707" },
        { name: "Shivansh Agrawal", contact: "9548505794" },
      ],
    },
    {
      eventName: "Research Gap",
      eventId: "56",
      description:
        "An innovative event for students to delve into research topics and learn to prepare research papers.",
      rules: [
        "Team event with a maximum of 2 members (ECE only)",
        "Two rounds: Round 1 + Final Round",
        "Open to B.Tech 1st Year (ECE+EE), B.Tech 2nd Year (ECE+EE), B.Tech 3rd Year (ECE+EE), and M.Tech 1st Year",
      ],
      maxTeamSize: 2,
      minTeamSize: 1,
      BGImageLink: ElectromaniaSubPic,
      PsLink: "",
      coordinators: [
        { name: "Aayush Raj Jaiswal", contact: "7238986201" },
        { name: "Vansh Arya", contact: "6203279643" },
      ],
    },
  ],
};

export default Electromania;
