const scheduleData = {
  day1: {
    day: 1,
    date: "November 11, 2024",
    events: [
      {
        title: "Quintathalon Interviews",
        time: "10:00 AM - 6:00 PM",
        category: "ELECTROMANIA",
        round: "Finals",
        venue: "FE 16,17,18",
      },
      {
        title: "Codotron",
        time: "10:00 AM - 1:00 PM",
        category: "ELECTROMANIA",
        round: "Finals",
        venue: "NLHC-1",
      },
      {
        title: "FPGA Onspot Test",
        time: "11:00 AM - 1:00 PM",
        round:"Round 1",
        category: "ELECTROMANIA",
        venue: "GS-7",
      },
      {
        title: "Mind Sweeper",
        time: "2:00 PM - 4:00 PM",
        category: "ELECTROMANIA",
        round:"Round 2",
        venue: "GS-7",
      },
      {
        title: "ElectroQuest",
        time: "4:30 PM - 5:30 PM",
        category: "ELECTROMANIA",
        round:"Round 1",
        venue: "GS-5,7",
      },
      {
        title: "Impromptu",
        time: "4:30 PM - 5:30 PM",
        category: "ELECTROMANIA",
        round:"Round 1",
        venue: "FE-16,17",
      },
      {
        category: "GENESIS",
        title: "Central Dogma",
        round: "Round 2+3",
        venue: "GS-3",
        time: "2:00 PM - 5:00 PM"
    },
    {
        category: "MONOPOLY",
        title: "Chanakya Neeti",
        round: "Round 1",
        venue: "SMS LH2",
        time: "9:00 AM - 10:30 AM"
    },
    {
        category: "MONOPOLY",
        title: "Stall Mart",
        round: "Round 2",
        venue: "Arena",
        time: "5:00 PM - 9:00 PM"
    },
    {
        category: "MONOPOLY",
        title: "Netritva",
        round: "Round 1",
        venue: "SMS LH1 + BD Lab",
        time: "11:00 AM - 1:00 PM"
    },
    {
        category: "OLIGOPOLY",
        title: "Trading Strategist",
        round: "Round 1",
        venue: "SMS LH3",
        time: "10:00 AM - 11:00 AM"
    },
    {
        category: "OLIGOPOLY",
        title: "SoloLobo",
        round: "Round 1",
        venue: "SIMU LAB & BD",
        time: "2:00 PM - 4:00 PM"
    },
    {
        category: "OLIGOPOLY",
        title: "Pitchers",
        round: "Round 1",
        venue: "SMS LH1",
        time: "2:00 PM - 3:30 PM"
    },
    {
        category: "POWERSURGE",
        title: "War of Currents",
        round: "Round 2",
        venue: "GS 4",
        time: "10:00 AM - 2:00 PM"
    },
    {
        category: "POWERSURGE",
        title: "Predefined Hardware",
        round: "Round 2",
        venue: "GS 4",
        time: "2:00 PM - 4:00 PM"
    },
    {
        category: "POWERSURGE",
        title: "Circuit Bizz",
        round: "Round 2",
        venue: "GS 4",
        time: "4:30 PM - 6:30 PM"
    },
    {
        category: "RASAYAN",
        title: "Quizophilia",
        round: "Round 1",
        venue: "GS-5",
        time: "5:30 PM - 7:30 PM"
    },
    {
        category: "RASAYAN",
        title: "Chemathlon",
        round: "Round 2 + 3 (Interviews)",
        venue: "FN-3,4 AND GW 3",
        time: "11:00 AM - 5:00 PM"
    },
    {
        category: "MECHROCOSM",
        title: "Automax",
        round: "Round 2",
        venue: "GS-6",
        time: "2:00 PM - 6:00 PM"
    },
    {
        category: "MECHROCOSM",
        title: "Mechathon",
        round: "Round 3",
        venue: "FN-1",
        time: "2:00 PM - 5:00 PM"
    },
    {
        category: "CYBERQUEST",
        title: "Checkmate and Chill",
        round: "Final Round",
        venue: "MP HALL Stairs",
        time: "9:30 AM - 12:00 NOON"
    },
    {
        category: "CYBERQUEST",
        title: "CodeSangam",
        round: "Final Evaluation",
        venue: "NLHC-1",
        time: "2:00 PM - 6:30 PM"
    },
    {
        category: "CYBERQUEST",
        title: "CSS Battle",
        round: "Finals",
        venue: "GS-8",
        time: "2:00 PM - 6:30 PM"
    },
    {
        category: "NIRMAAN",
        title: "Constrengtho",
        round: "Round 3",
        venue: "Structural Lab Civil",
        time: "2:00 PM - 5:00 PM"
    },
    {
        category: "NIRMAAN",
        title: "Just In Case",
        round: "Round 2",
        venue: "SEW 9,10",
        time: "10:00 AM - 1:00 PM"
    },
    {
        category: "ROBOMANIA",
        title: "Cellphone controlled bot",
        round: "Round 1",
        venue: "MP Hall",
        time: "9:00 AM - 2:00 PM"
    },
    {
        category: "AERODYNAMIX",
        title: "HoverTroble",
        round: "Round 1",
        venue: "SEW 7,8 || SKATING GROUND",
        time: "9:00 AM - 2:00 PM"
    },
    {
        category: "AERODYNAMIX",
        title: "Falcon",
        round: "Round 1",
        venue: "Athletics Ground",
        time: "9:00 AM - 5:00 PM"
    },
    {
        category: "AERODYNAMIX",
        title: "Game of Drones",
        round: "Round 2",
        venue: "Athletics Ground",
        time: "9:00 AM - 2:00 PM"
    },
    {
        category: "COSMOCON",
        title: "Capture the Stars",
        round: "Round",
        venue: "SEW-7",
        time: "12:00 PM - 2:00 PM"
    },
    {
        category: "COSMOCON",
        title: "Quiz of Everything",
        round: "Round 1",
        venue: "NLHC-2",
        time: "4:30 PM - 6:30 PM"
    },
    {
        category: "GNOSOMANIA",
        title: "General Quiz",
        round: "Final",
        venue: "NLHC-2",
        time: "9:00 AM - 12:00 PM"
    },
    {
        category: "GNOSOMANIA",
        title: "Sports Quiz",
        round: "Final",
        venue: "NLHC-2",
        time: "1:00 PM - 4:00 PM"
    },
    ],
  },
  day2: {
    day: 2,
    date: "November 12, 2024",
    events: [
        {
        category: "ELECTROMANIA",
        title: "Innoved Presentation",
        round: "Final",
        venue: "GS-7",
        time: "10:00 AM - 1:00 PM"
    },
    {
        category: "ELECTROMANIA",
        title: "Quintathlon",
        round: "Interviews",
        venue: "FE-16,17,18",
        time: "10:00 AM - 6:00 PM"
    },
    {
        category: "GENESIS",
        title: "IQ Odyssey",
        round: "Round 2",
        venue: "GS-3",
        time: "10:30 AM - 1:00 PM"
    },
    {
        category: "MONOPOLY",
        title: "Chanakya Neeti",
        round: "Round 2",
        venue: "SMS LH2",
        time: "9:00 AM - 10:30 AM"
    },
    {
        category: "MONOPOLY",
        title: "Stall Mart",
        round: "Round 2",
        venue: "Culrav Arena",
        time: "5:00 PM - 9:00 PM"
    },
    {
        category: "MONOPOLY",
        title: "Netritva",
        round: "Round 2",
        venue: "SMS LH1 + BD Lab",
        time: "11:00 AM - 1:00 PM"
    },
    {
        category: "MONOPOLY",
        title: "Reel Fiesta",
        round: "Round 2",
        venue: "SMS LH2",
        time: "11:30 AM - 1:00 PM"
    },
    {
        category: "MONOPOLY",
        title: "Navachar",
        round: "Round 1 , Round 2",
        venue: "SMS LH3 , SMS LH3",
        time: "9:30 AM - 11:00 AM , 11:30 AM - 1:00 PM"
      },
    
    {
        category: "OLIGOPOLY",
        title: "Ad Hole",
        round: "Round 1 , Round 2",
        venue: "SMS LH1 , SMS LH1 ",
        time: "9:00 AM - 10:00 AM , 10:00 AM - 10:30 AM"
    },
    
    {
        category: "OLIGOPOLY",
        title: "Solo Lobo",
        round: "Round 2",
        venue: "SMS LH2",
        time: "2:00 PM - 3:30 PM"
    },
    {
        category: "OLIGOPOLY",
        title: "Trading Strategists",
        round: "Round 2",
        venue: "Online",
        time: "9:15 AM - 3:30 PM"
    },
    {
        category: "POWERSURGE",
        title: "Pentathlon",
        round: "Round 2",
        venue: "GW-7,8,9",
        time: "10:30 AM - 4:30 PM"
    },
    {
        category: "POWERSURGE",
        title: "Codesparks",
        round: "Round 2",
        venue: "GW-5,6",
        time: "3:00 PM - 7:00 PM"
    },
    {
        category: "POWERSURGE",
        title: "Circuit Bizz",
        round: "Round 3",
        venue: "GW-8",
        time: "9:00 AM - 10:00 PM"
    },
    {
        category: "RASAYANS",
        title: "Chem Expo",
        round: "Round 2 , Viva Round",
        venue: "NLHC Gallery , CRE Lab",
        time: "9:00 AM - 10:00 AM , 11:00 AM - 1:00 PM"
    },
    {
        category: "RASAYANS",
        title: "Scavenger Hunt",
        round: "Round 1",
        venue: "NLHC-1",
        time: "9:00 AM - 11:00 AM"
    },
    {
        category: "RASAYANS",
        title: "Quizophilia",
        round: "Round 2 , Round 3",
        venue: "GS-6 , GS-6",
        time: "2:00 PM - 3:00 PM , 3:00 PM - 4:00 PM"
    },
    {
        category: "RASAYANS",
        title: "Simulenz",
        round: "Round 2",
        venue: "GW-11,12",
        time: "3:00 PM - 4:00 PM"
    },
    {
        category: "MECHROCOSM",
        title: "Survivor Series",
        round: "Round 3",
        venue: "GS-5",
        time: "7:00 AM - 10:00 AM"
    },
    {
        category: "MECHROCOSM",
        title: "Triathlon",
        round: "Round 3",
        venue: "FN-1,3,4",
        time: "9:00 AM - 5:30 PM"
    },
    {
        category: "MECHROCOSM",
        title: "Industrial Monopoly",
        round: "Round 3",
        venue: "GS-3",
        time: "2:00 PM - 6:00 PM"
    },
    {
        category: "MECHROCOSM",
        title: "Blueprint",
        round: "Round 3",
        venue: "GW-3,4",
        time: "2:00 PM - 5:30 PM"
    },
    {
        category: "CYBERQUEST",
        title: "Softathlon",
        round: "Interview",
        venue: "GS-4,5",
        time: "8:00 AM - 11:00 AM"
    },
    {
        category: "CYBERQUEST",
        title: "Tech Maiden",
        round: "Interview",
        venue: "GS-4,5",
        time: "8:00 AM - 11:00 AM"
    },
    {
        category: "CYBERQUEST",
        title: "Operamania",
        round: "Round 2",
        venue: "GS-4,5",
        time: "11:00 AM - 12:30 PM"
    },
    {
        category: "CYBERQUEST",
        title: "CodeSangam",
        round: "PPT Round",
        venue: "Seminar Hall",
        time: "2:00 PM - 6:00 PM"
    },
    {
        category: "CYBERQUEST",
        title: "Code Clash",
        round: "Final Round",
        venue: "GS-8",
        time: "2:00 PM - 6:00 PM"
    },
    {
        category: "CYBERQUEST",
        title: "Revengg",
        round: "Final Round",
        venue: "Online",
        time: "9:00 PM - 10:00 PM"
    },
    {
        category: "NIRMAAN",
        title: "Ziggagure",
        round: "Round 2",
        venue: "GS-8",
        time: "10:00 AM - 1:00 PM"
    },
    {
        category: "NIRMAAN",
        title: "Civismic",
        round: "Round 3",
        venue: "NLHC-1",
        time: "2:00 PM - 6:00 PM"
    },
    {
        category: "NIRMAAN",
        title: "Linkidge",
        round: "Round 3",
        venue: "NLHC-1",
        time: "2:00 PM - 6:00 PM"
    },
    {
        category: "ROBOMANIA",
        title: "Draw the Path",
        round: "Round 1",
        venue: "MP Hall",
        time: "9:00 AM - 4:00 PM"
    },
    {
        category: "ROBOMANIA",
        title: "Path Blaze",
        round: "Round 1 (Final)",
        venue: "MP Hall",
        time: "9:00 AM - 4:00 PM"
    },
    {
        category: "AERODYNAMIX",
        title: "Falcon",
        round: "Round 1",
        venue: "Athletics Ground",
        time: "9:00 AM - 5:00 PM"
    },
    {
        category: "AERODYNAMIX",
        title: "HoverTroble",
        round: "Round 1",
        venue: "SEW 7,8 || SKATING GROUND",
        time: "9:00 AM - 2:00 PM"
    },
    {
        category: "COSMOCON",
        title: "Water Rocket",
        round: "Round 1",
        venue: "Athletics Ground",
        time: "9:00 AM - 2:00 PM"
    },
    {
        category: "COSMOCON",
        title: "Star Gazing Workshop",
        venue: "Athletics Ground",
        time: "8:00 PM - 11:30 PM"
    },
    {
        category: "GNOSOMANIA",
        title: "MELA Quiz",
        round: "Final",
        venue: "NLHC-2",
        time: "9:00 AM - 12:00 PM"
    },
    {
        category: "GNOSOMANIA",
        title: "BizTech Quiz",
        round: "Final",
        venue: "NLHC-2",
        time: "1:00 PM - 4:00 PM"
    }
    ],
  },
  day3: {
    day: 3,
    date: "November 13, 2024",
    events: [
      {
        category: "ELECTROMANIA",
        title: "Research Gap",
        round: "Final presentation",
        venue: "GS-8",
        time: "9:30 AM - 12:00 NOON"
    },
    {
        category: "ELECTROMANIA",
        title: "Quintathlon",
        round: "Interviews",
        venue: "FE-16,17,18",
        time: "10:00 AM - 6:00 PM"
    },
    {
        category: "ELECTROMANIA",
        title: "FPGA",
        round: "Presentation",
        venue: "GS-7",
        time: "10:00 AM - 1:00 AM"
    },
    {
        category: "ELECTROMANIA",
        title: "Mind Sweeper",
        round: "Round 3",
        venue: "GS-6",
        time: "5:00 PM - 7:00 PM"
    },
    {
        category: "ELECTROMANIA",
        title: "Impromptu",
        round: "Round 2",
        venue: "Advance Electronics Lab",
        time: "2:00 PM - 4:00 PM"
    },
    {
        category: "GENESIS",
        title: "Case & Climb",
        round: "Round 3",
        venue: "GW-3",
        time: "10:00 AM - 12:00 NOON"
    },
    {
        category: "GENESIS",
        title: "Cluequest",
        round: "Finals",
        venue: "FN-4",
        time: "1:00 PM - 5:00 PM"
    },
    {
        category: "MONOPOLY",
        title: "Chanakya Neeti",
        round: "Round 3",
        venue: "SMS LH2",
        time: "9:00 AM - 10:30 AM"
    },
    {
        category: "MONOPOLY",
        title: "Stall Mart",
        round: "Round 2",
        venue: "Arena",
        time: "5:00 PM - 9:00 PM"
    },
    {
        category: "MONOPOLY",
        title: "Netritva",
        round: "Round 3",
        venue: "SMS LH1",
        time: "11:00 AM - 1:00 PM"
    },
    {
        category: "MONOPOLY",
        title: "Reel Fiesta",
        round: "Round 3",
        venue: "BD Lab",
        time: "4:00 PM - 5:30 PM"
    },
    {
        category: "MONOPOLY",
        title: "Navachar",
        round: "Round 3",
        venue: "SMS LH3",
        time: "2:00 PM - 4:00 PM"
    },
    {
        category: "OLIGOPOLY",
        title: "AdHole",
        round: "Round 3",
        venue: "BD LAB",
        time: "9:00 AM - 10:30 AM"
    },
    {
        category: "OLIGOPOLY",
        title: "Solo Lobo",
        round: "Round 3",
        venue: "SMS LH2",
        time: "2:00 PM - 4:00 PM"
    },
    {
        category: "OLIGOPOLY",
        title: "Pitchers",
        round: "Round 2",
        venue: "SMS LH1",
        time: "2:00 PM - 3:00 PM"
    },
    {
        category: "POWERSURGE",
        title: "War of Currents",
        round: "Round 3",
        venue: "GS-8",
        time: "2:00 PM - 3:00 PM"
    },
    {
        category: "POWERSURGE",
        title: "Dev or Die",
        round: "Round 3",
        venue: "GS-6",
        time: "10:30 AM - 1:30 PM"
    },
    {
        category: "RASAYANS",
        title: "Webcode",
        round: "Round 3",
        venue: "GS-5",
        time: "9:00 AM - 11:00 AM"
    },
    {
        category: "RASAYANS",
        title: "DataVision",
        round: "Round 3",
        venue: "GS-4",
        time: "9:00 AM - 11:00 AM"
    },
    {
        category: "RASAYANS",
        title: "Scavenger Hunt",
        round: "Round 2 , Round 3",
        venue: "GS-4 , GS-4",
        time: "9:00 AM - 11:00 AM , 2:00 PM - 4:00 PM"
    },
    {
        category: "MECHROCOSM",
        title: "Crack the Case",
        round: "Round 3",
        venue: "FN-1",
        time: "9:00 AM - 12:00 PM"
    },
    {
        category: "MECHROCOSM",
        title: "BluePrint",
        round: "Round 3",
        venue: "GW-9,10",
        time: "9:00 AM - 12:00 PM"
    },
    {
        category: "MECHROCOSM",
        title: "Turbo Speed Showdown",
        round: "Round 3",
        venue: "Athletics Ground",
        time: "1:00 PM - 4:00 PM"
    },
    {
        category: "MECHROCOSM",
        title: "Automax",
        round: "Round 3",
        venue: "HEL Lab",
        time: "9:30 AM - 12:30 PM"
    },
    {
        category: "CYBERQUEST",
        title: "Insomnia",
        round: "Final Round",
        venue: "UG Lab",
        time: "8:00 AM - 10:30 AM"
    },
    {
        category: "CYBERQUEST",
        title: "Mathrush",
        round: "Round 2",
        venue: "GS-6",
        time: "8:00 AM - 10:00 AM"
    },
    {
        category: "CYBERQUEST",
        title: "Operamania",
        round: "Treasure Hunt",
        venue: "GS-4",
        time: "11:00 AM - 12:30 PM"
    },
    {
        category: "CYBERQUEST",
        title: "TuxWar",
        round: "Round 2",
        venue: "UG Lab",
        time: "11:00 AM - 12:30 PM"
    },
    {
        category: "CYBERQUEST",
        title: "CodeSangam",
        round: "PPT Round",
        venue: "Seminar Hall",
        time: "2:00 PM - 5:00 PM"
    },
    {
        category: "NIRMAAN",
        title: "Cognizance",
        round: "Round 3",
        venue: "SEW-7,8",
        time: "9:00 AM - 12:00 PM"
    },
    {
        category: "NIRMAAN",
        title: "Terraquiz",
        round: "Round 3",
        venue: "NLHC-2",
        time: "2:00 PM - 4:00 PM"
    },
    {
        category: "NIRMAAN",
        title: "Mr. Nirmaan Interview",
        round: "Interview",
        venue: "GW-3",
        time: "2:00 PM - 5:00 PM"
    },
    {
        category: "ROBOMANIA",
        title: "RoboSoccer",
        round: "Round 2",
        venue: "MP Hall",
        time: "9:00 AM - 3:00 PM"
    },
    {
        category: "ROBOMANIA",
        title: "Euphoria Drift",
        round: "Round 2",
        venue: "Skating Ground",
        time: "3:00 PM - 8:00 PM"
    },
    {
        category: "AERODYNAMIX",
        title: "HoverTroble",
        round: "Round 2",
        venue: "Skating Ground",
        time: "9:00 AM - 2:00 PM"
    },
    {
        category: "AERODYNAMIX",
        title: "Falcon",
        round: "Round 2",
        venue: "Athletics Ground",
        time: "9:00 AM - 5:00 PM"
    },
    {
        category: "COSMOCON",
        title: "Quiz of Everything",
        round: "Round 2",
        venue: "NLHC-1",
        time: "2:00 PM - 4:00 PM"
    },
    {
        category: "GNOSOMANIA",
        title: "India Quiz",
        round: "Final",
        venue: "NLHC-1",
        time: "9:00 AM - 12:00 PM"
    }
    ],
  },
  day4: {
    day: 4,
    date: "November 14, 2024",
    events: [
      {
          category: "Rangsaazi",
          title: "Paint the Way",
          venue: "Road in front of Girls Gym Gate",
          time: "9:00 AM - 12:00 PM"
        },
        {
          category: "Rangmanch",
          title: "Natyamanch",
          venue: "MP HALL",
          time: "8:00 AM - 12:00 PM"
        },
        {
          category: "Razzmataz",
          title: "Nrityanjali",
          venue: "MP HALL",
          time: "12:00 PM - 4:00 PM"
        },
        {
          category: "Razzmataz",
          title: "Desi Sync",
          venue: "MP HALL",
          time: "12:00 PM - 4:00 PM"
        },
        {
          category: "Anunaad",
          title: "Voice of Culrav",
          venue: "Seminar Hall",
          time: "9:00 AM - 1:00 PM"
        },
        {
          category: "Anunaad",
          title: "Euphony",
          venue: "Arena",
          time: "2:00 PM - 6:00 PM"
        },
        {
          category: "Litmuse",
          title: "Pariksha Pe Charcha",
          venue: "GS-8",
          time: "3:00 PM - 6:00 PM"
        },
        {
          category: "Litmuse",
          title: "Poetry Slam",
          venue: "GS-8",
          time: "11:00 AM - 1:00 PM"
        },
    ],
  },
  day5: {
    day: 5,
    date: "November 15, 2024",
    events: [
      {
          category: "Rangsaazi",
          title: "Blind Art",
          venue: "NLHC-2",
          time: "10:00 AM - 12:00 PM"
        },
        {
          category: "Rangsaazi",
          title: "Momento Vinci",
          venue: "GS 3,4",
          time: "3:00 PM - 5:00 PM"
        },
        {
          category: "Rangmanch",
          title: "Hasyamanch",
          venue: "Culrav Arena",
          time: "8:30 AM - 11:30 PM"
        },
        {
          category: "Rangmanch",
          title: "Pratibimb",
          venue: "NLHC/SMS Seminar Hall",
          time: "2:00 PM - 5:00 PM"
        },
        {
          category: "Darkroom",
          title: "Short Film",
          venue: "NLHC-1",
          time: "8:00 AM - 10:00 AM"
        },
        {
          category: "Darkroom",
          title: "B-roll",
          venue: "NLHC-1",
          time: "10:00 AM - 12:00 PM"
        },
        {
          category: "Razzmataz",
          title: "Revel",
          venue: "MP Hall",
          time: "9:00 AM - 12:00 PM"
        },
        {
          category: "Razzmataz",
          title: "Vault of Dance",
          venue: "MP Hall",
          time: "12:00 PM - 2:30 PM"
        },
        {
          category: "Anunaad",
          title: "Rocktave",
          venue: "MP Hall",
          time: "4:30 PM - 6:30 PM"
        },
        {
          category: "Litmuse",
          title: "Spell Bee",
          venue: "GS-8",
          time: "2:00 PM - 4:00 PM"
        },
        {
          category: "Litmuse",
          title: "Lacuzzi",
          venue: "NLHC-1",
          time: "4:30 PM - 6:30 PM"
        },
    ],
  },
  day6: {
    day: 6,
    date: "November 16, 2024",
    events: [
      {
          category: "Rangmanch",
          title: "Let's Face It",
          venue: "Culrav Arena",
          time: "9:00 AM - 12:00 PM"
        },
        {
          category: "Rangsaazi",
          title: "Swaddle",
          venue: "Culrav Arena",
          time: "2:00 PM - 5:00 PM"
        },
        {
          category: "Rangmanch",
          title: "Nukkad",
          venue: "Saraswati Gate",
          time: "10:00 AM - 12:00 PM"
        },
        {
          category: "Darkroom",
          title: "Picture Tale",
          venue: "NLHC-1",
          time: "10:00 AM - 12:00 PM"
        },
        {
          category: "Darkroom",
          title: "Sales Pitch",
          venue: "NLHC-1",
          time: "12:00 PM - 2:00 PM"
        },
        {
          category: "Razzmataz",
          title: "Leap of Faith",
          venue: "Skating Rink",
          time: "4:30 PM - 6:00 PM"
        },
        {
          category: "Anunaad",
          title: "Vadya",
          venue: "MP Hall",
          time: "10:00 AM - 1:00 PM"
        },
        {
          category: "Anunaad",
          title: "Harmony",
          venue: "MP Hall",
          time: "10:00 AM - 1:00 PM"
        },
        {
          category: "Anunaad",
          title: "Ijaad",
          venue: "Arena",
          time: "4:30 PM - 6:00 PM"
        },
        {
          category: "Spandan",
          title: "Desfile De Moda",
          venue: "MP Hall",
          time: "3:00 PM - 6:00 PM"
        },
    ],
  },
};

export default scheduleData;
