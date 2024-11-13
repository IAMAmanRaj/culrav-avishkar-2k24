
import BgImg from "../images/spandan.webp";
import BgImg2 from "../images/Spandan.jpg"

const Spandan = {
  eventName: "FOOTPRINTS",
  tagline: "Style that distinguish you and Walk that gives you confidence",
  BGImageLink: BgImg,
  instagramLink: "https://www.facebook.com/genesis.avishkar.mnnit",
  events: [
    {
      eventName: "Desfile de moda (Rampwalk)",
      eventId: "30",
      description: "Style that distinguishes you and Walk that gives you confidence. When we talk about Spandan, it all comes down to Fashion. So, let's celebrate the evolution of fashion through decades by taking part in this exhilarating event called Rampwalk.",
      rules: [
        { r: "This is a team event with a team size of 10-15 members. The duration of the ramp walk will be strictly 6-10 minutes." },
        { r: "There will be two rounds. The first is the elimination round (Elims) with the same duration, where the theme for the ramp walk is chosen by the team." },
        { r: "The second round is the final round, taking place on the main day of Spandan, with the theme to be revealed after Elims." },
        { r: "The team is responsible for the background music, makeup, and dresses for both rounds." },
        { r: "Teams can use props in the final round but not in Elims." },
        { r: "The ramp walk should resemble a professional show, without any dance steps or indecent poses." }
      ],
      minTeamSize: 10,
      maxTeamSize: 15,
      BGImageLink: BgImg2,
      PsLink: "",
      coordinators: [
        { name: "Aadya Shukla", phone: "9518243648" },
        { name: "Aatman Upreti", phone: "8791030527" }
      ]
    }
    ,
    {
      eventName: "Mr. and Miss Spandan",
      eventId: 31,
      description: "A dream is a picture of a possibility. We should have a strong heart and a prepared mind to turn that into reality. Ever wonder about earning the title of fashion icon for the day? Here we invite you to take part in this title event and seize the opportunity to become Mr. or Miss Spandan.",
      rules: [
        { r: "This is an individual event with three rounds." },
        { r: "The first round is a photoshoot round where participants must prepare 3-4 poses and come to the venue in decent attire for the photoshoot. More details can be found on the Spandan page @spandan_mnnit." },
        { r: "The second round takes place on the main day. Participants should prepare an introduction and wear attire that reflects their personality in a decent manner." },
        { r: "The final round is a questionnaire session where the judges will announce the results immediately afterward." },
        { r: "The second and final rounds are conducted together." },
        { r: "Each round is an elimination round, held on the main event day at MP Hall." }
      ],
      TeamSize: "1",
      BGImageLink: BgImg2,
      PsLink: "",
      coordinators: [
        { name: "Aadya Shukla", phone: "9518243648" },
        { name: "Aatman Upreti", phone: "8791030527" }
      ]
    },
  ],
}

export default Spandan