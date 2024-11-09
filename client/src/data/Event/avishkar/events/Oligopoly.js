
import OligopolyPic from "../images/Main/OLIGOPOLY.webp";
import OligopolySubPic from "../images/Sub/Oligopoly.webp";

const Oligopoly = {
  eventName: "Oligopoly",
  tagline: "",
  BGImageLink: OligopolyPic,
  instagramLink: "",
  events: [
    {
      eventName: "Ad Hole",
      eventId: "70",
      description:
        "A multi-round advertising competition involving quizzes, video analysis, and ad creation.",
      rules: [
        "Team size: 1 to 2 members.",
        "Round 1: Brain Teaser - 15-minute quiz on advertisement basics (20 questions).",
        "Round 2: Evolution - Write an analysis of a shown video ad on an A4 sheet within 20 minutes.",
        "Round 3: Thinkistaan - Create a 1.5 to 3-minute ad and present in Q&A round.",
      ],
      maxTeamSize: 2,
      minTeamSize: 1,
      BGImageLink: OligopolySubPic,
      PsLink: "",
      coordinators: [
        { name: "Isha Rohitas", contact: "7999637764" },
        { name: "Himanshu Agrawal", contact: "9630293924" },
        { name: "Abhay Bhatt", contact: "7905851053" },
      ],
    },
    {
      eventName: "Trading Strategist",
      eventId: "71",
      description:
        "An individual competition on stock market trading, consisting of fundamental and practical rounds. We are pleased to announce the Trading Strategist competition, designed to enhance participants' knowledge and skills in stock market trading. This competition consists of three stages, each focusing on different aspects of trading. Participation is individual, and all rounds are elementary in nature.",
      rules: [
        "Individual participation.",
        "Round 1: Financial Forum - Answer questions about stock market basics.",
        "Round 2: Trading Turf - Simulated trading with analysis-driven trades for performance evaluation.",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      BGImageLink: OligopolySubPic,
      PsLink: "",
      coordinators: [
        { name: "Shubhangi Mishra", contact: "7238082878" },
        { name: "Utsav Rani", contact: "8709726849" },
        { name: "Anjali Yadav", contact: "8303600726" },
      ],
    },
    {
      eventName: "Pitchers",
      eventId: "72",
      description:
        "Startup idea competition with quiz and presentation rounds.",
      rules: [
        "Team size: 1-3 members.",
        "Round 1: Quiz on Startups and Entrepreneurship (40 MCQs).",
        "Round 2: Present a startup idea in a 10-slide PowerPoint.",
      ],
      maxTeamSize: 3,
      minTeamSize: 1,
      BGImageLink: OligopolySubPic,
      PsLink: "",
      coordinators: [
        { name: "Prakash Kumar", contact: "8287522862" },
        { name: "Om Prakash Kumar", contact: "9693093526" },
        { name: "Harsh Yadav", contact: "9761473867" },
      ],
    },
    {
      eventName: "Solo Lobo",
      eventId: "73",
      description:
        "A solo event testing skills in leadership, communication, and problem-solving.",
      rules: [
        "Individual participation.",
        "Round 1: Group Discussion on assigned topics.",
        "Round 2: Mock HR Interview.",
        "Round 3: Corporate Strategy - Plan and present solutions to a corporate scenario.",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      BGImageLink: OligopolySubPic,
      PsLink: "",
      coordinators: [
        { name: "Harshita Dubey", contact: "8318072660" },
        { name: "Devyani Srivastava", contact: "9336293343" },
        { name: "Anupam Gopal", contact: "9305886537" },
      ],
    },
  ],
};

export default Oligopoly;
