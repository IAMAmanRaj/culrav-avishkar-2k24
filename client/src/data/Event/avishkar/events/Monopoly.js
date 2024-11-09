
import MonopolyPic from "../images/Main/MONOPOLY.webp";
import MonopolySubPic from "../images/Sub/Monopoly.webp";

const Monopoly = {
  eventName: "Monopoly",
  tagline: "",
  BGImageLink: MonopolyPic,
  instagramLink: "",
  events: [
    {
      eventName: "Chanakya Neeti",
      eventId: "82",
      description:
        "A strategic thinking event with quizzes, riddles, and case study presentations.",
      rules: [
        "Team size: 1 to 2 members.",
        "Round 1: Quiz - Brain Buster Blitz.",
        "Round 2: Solve riddles in the shortest time possible.",
        "Round 3: Case Study Presentation with Q&A.",
      ],
      maxTeamSize: 2,
      minTeamSize: 1,
      BGImageLink: MonopolySubPic,
      PsLink: "",
      coordinators: [
        { name: "Kajal Singh", contact: "8319989996" },
        { name: "Yogesh Mishra", contact: "7417478430" },
        { name: "Prajjwal Shukla", contact: "6387947075" },
      ],
    },
    {
      eventName: "Netritva",
      eventId: "83",
      description:
        "Leadership competition testing introduction, debate, and elocution skills.",
      rules: [
        "Individual participation.",
        "Round 1: Self-introduction and leadership questions.",
        "Round 2: Debate on a given topic.",
        "Round 3: Elocution with Q&A from the audience.",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      BGImageLink: MonopolySubPic,
      PsLink: "",
      coordinators: [
        { name: "Anula Vishwakarma", contact: "8303361815" },
        { name: "Anusha Muraka", contact: "9170493509" },
        { name: "Ishan Kashyap", contact: "8542944249" },
      ],
    },
    {
      eventName: "Navachar",
      eventId: "84",
      description:
        "Innovation-focused competition with a quiz, case study, and B-Plan presentation.",
      rules: [
        "Team size: 1 to 2 members.",
        "Round 1: Quiz on entrepreneurship.",
        "Round 2: Case Study analysis on an A4 sheet.",
        "Round 3: B-Plan Presentation with a 6-slide maximum limit.",
      ],
      maxTeamSize: 2,
      minTeamSize: 1,
      BGImageLink: MonopolySubPic,
      PsLink: "",
      coordinators: [
        { name: "Anubhuti Parihar", contact: "8896443544" },
        { name: "Sakshi Kumari", contact: "7303501491" },
        { name: "Shubhangi Mishra", contact: "7238082878" },
      ],
    },
    {
      eventName: "Stallmart",
      eventId: "85",
      description:
        "A team event on managing stalls, with a focus on ideation, revenue generation, and execution.",
      rules: [
        "Team size: 3-4 members.",
        "Round 1: Present stall concept and strategy.",
        "Round 2: Set up and manage a stall; evaluated on revenue and productivity.",
      ],
      maxTeamSize: 4,
      minTeamSize: 3,
      BGImageLink: MonopolySubPic,
      PsLink: "",
      coordinators: [
        { name: "Anshul Tale", contact: "9644202510" },
        { name: "Shubhi Gupta", contact: "8957977946" },
        { name: "Parul Samiksha", contact: "8470991072" },
      ],
    },
    {
      eventName: "Reel Fiesta",
      eventId: "86",
      description:
        "A reel-making competition with trivia, brand battle, and product pitch rounds.",
      rules: [
        "Team size: 2-3 members.",
        "Round 1: Business Trivia Quiz.",
        "Round 2: Brand Battle - Reel Edition with assigned brands.",
        "Round 3: Pitch Perfect - Reel pitch of a mystery product.",
      ],
      maxTeamSize: 3,
      minTeamSize: 2,
      BGImageLink: MonopolySubPic,
      PsLink: "",
      coordinators: [
        { name: "Babita Gupta", contact: "7267093014" },
        { name: "Dharya Akansha Horo", contact: "7257992948" },
        { name: "Anshika Goel", contact: "8853169987" },
      ],
    },
  ],


};

export default Monopoly;

