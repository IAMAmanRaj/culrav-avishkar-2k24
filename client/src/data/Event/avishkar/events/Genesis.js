// import bg

import GenesisPic from "../images/Main/Genesis.webp";
import GenesisSubPic from "../images/Sub/Genesis.webp";

const Genesis = {
  eventName: "Genesis",
  tagline: "",
  BGImageLink: GenesisPic,
  instagramLink: "",
  events: [
    {
      eventName: "Palladin",
      eventId: "57",
      description:
        "Placement-oriented event focused on preparing biotech students for upcoming placements and internship sessions through core, consultancy, and software skill assessments.",
      rules: [
        "Solo participation",
        "2 Rounds: Round 1 - CBT (Aptitude + Domain Specific), Round 2 - Group Discussion + Interview",
        "Compulsory for biotech students",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      BGImageLink: GenesisSubPic,
      PsLink: "",
      coordinators: [
        { name: "Dipesh Ladha", contact: "8560822989" },
        { name: "Ritesh Kumar Maurya", contact: "7897461387" },
        { name: "Harshita Agrawal", contact: "8303575832" },
        { name: "Siddhant Jain", contact: "9265720118" },
        { name: "Aniket", contact: "7070843109" }
      ],
    },
    {
      eventName: "Central Dogma",
      eventId: "58",
      description:
        "A core biotechnology event combining knowledge with fun, featuring rounds on biotech concepts, puzzles, anagrams, and theme-based questions.",
      rules: [
        "Team size: 3 (at least one member from biotech department)",
        "3 Rounds: Round 1 - Written test (PCM + Core BT), Round 2 - Live round with pictures, puzzles, anagrams, etc., Round 3 - Buzzer final round",
      ],
      maxTeamSize: 3,
      minTeamSize: 3,
      BGImageLink: GenesisSubPic,
      PsLink: "",
      coordinators: [
        { name: "Dipesh Ladha", contact: "8560822989" },
        { name: "Harshita Agrawal", contact: "8303575832" },
        { name: "Aniket Kumar", contact: "8083660818" },
        { name: "Vemirso", contact: "9127533498" },
      ],
    },
    {
      eventName: "Clue Quest",
      eventId: "59",
      description:
        "A fun, theme-based event that involves puzzles, TV series, anime, and more, culminating in a treasure hunt.",
      rules: [
        "Team size: 3-5",
        "Open to all branches and years",
        "3-4 Rounds, with the last round being a treasure hunt",
      ],
      maxTeamSize: 5,
      minTeamSize: 3,
      BGImageLink: GenesisSubPic,
      PsLink: "",
      coordinators: [
        { name: "Siddhant Jain", contact: "9265720118" },
        { name: "Manjeet Singh", contact: "8410156377" },
        { name: "Pratima Krishna", contact: "9660771107" },
      ],
    },
    {
      eventName: "IQ Odyssey",
      eventId: "60",
      description:
        "An event centered on current affairs combined with entertaining game activities, blending education with fun.",
      rules: [
        "Solo or Duo participation",
        "Open to all branches and years",
        "2 Rounds: Round 1 - Quiz, Round 2 - Buzzer round",
      ],
      maxTeamSize: 2,
      minTeamSize: 1,
      BGImageLink: GenesisSubPic,
      PsLink: "",
      coordinators: [
        { name: "Aniket Kumar", contact: "8083660818" },
        { name: "Vemirso Timungpi", contact: "9127533498" },
        { name: "Ritesh Kumar Maurya", contact: "7897461387" },
      ],
    },
    {
      eventName: "Case & Climb",
      eventId: "61",
      description:
        "A case study analysis event that challenges participants to apply analytical, problem-solving, and decision-making skills to real-world scenarios.",
      rules: [
        "Solo participation",
        "3 Rounds: Round 1 - Aptitude Test, Round 2 - Case Study, Round 3 - Interview",
      ],
      maxTeamSize: 1,
      minTeamSize: 1,
      BGImageLink: GenesisSubPic,
      PsLink: "",
      coordinators: [
        { name: "Dipesh Ladha", contact: "8560822989" },
        { name: "Sandip Kumar Kushwaha", contact: "9838354272" },
        { name: "Saras", contact: "9457600155" },
      ],
    },
  ],
};

export default Genesis;
