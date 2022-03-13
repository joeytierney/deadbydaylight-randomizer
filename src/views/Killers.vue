<template>
  <div class="killers">
    <h1>Choose Your Killer</h1>
    <br />
    <div class="killerImage" v-if="visible">
      <img :src="selectedKiller.image" alt="Click the killer icon below!" />
    </div>
    <img
      src="../assets/icons/Unknown_QuestionMark.png"
      alt="Random Killer Placeholder"
      class="questionMark"
      id="questionPlaceholder"
    />
    <p id="helperText">Click the Killer icon below!</p>
    <h1>{{ selectedKiller.name }}</h1>
    <h2>{{ selectedKiller.realName }}</h2>
    <h3>{{ selectedKiller.dlc }}</h3>
    <br />
    <p>
      <img
        src="../assets/icons/killer-icon.png"
        alt="Click here for a random Killer!"
        @click="rndKiller"
        width="90"
        height="90"
        class="killerButton"
      />
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      killersArray: [
        {
          name: "The Trapper",
          image: "../assets/character-portraits/killers/01-the-trapper.png",
          realName: "Evan MacMillan",
          dlc: "",
        },
        {
          name: "The Krampus",
          image: "../assets/character-portraits/killers/01a-the-krampus.png",
          realName: "",
          dlc: "ULTRA-RARE SKIN FOR: The Trapper",
        },
        {
          name: "The Wraith",
          image: "../assets/character-portraits/killers/02-the-wraith.png",
          realName: "Philip Ojomo",
          dlc: "",
        },
        {
          name: "The Hillbilly",
          image: "../assets/character-portraits/killers/03-the-hillbilly.png",
          realName: "Max Thompson Jr.",
          dlc: "",
        },
        {
          name: "The Nurse",
          image: "../assets/character-portraits/killers/04-the-nurse.png",
          realName: "Sally Smithson",
          dlc: "CHAPTER I: The Last Breath",
        },
        {
          name: "The Shape",
          image: "../assets/character-portraits/killers/05-the-shape.png",
          realName: "Michael Myers",
          dlc: "CHAPTER II: HALLOWEEN®",
        },
        {
          name: "The Hag",
          image: "../assets/character-portraits/killers/06-the-hag.png",
          realName: "Lisa Sherwood",
          dlc: "CHAPTER III: Of Flesh and Mud",
        },
        {
          name: "The Doctor",
          image: "../assets/character-portraits/killers/07-the-doctor.png",
          realName: "Herman Carter",
          dlc: "CHAPTER IV: Spark of Madness",
        },
        {
          name: "The Look-See",
          image: "../assets/character-portraits/killers/07a-the-look-see.png",
          realName: "",
          dlc: "LEGENDARY SKIN FOR: The Doctor",
        },
        {
          name: "The Huntress",
          image: "../assets/character-portraits/killers/08-the-huntress.png",
          realName: "Anna",
          dlc: "CHAPTER V: A Lullaby for the Dark",
        },
        {
          name: "The Mordeo",
          image: "../assets/character-portraits/killers/08a-the-mordeo.png",
          realName: "",
          dlc: "LEGENDARY SKIN FOR: The Huntress",
        },
        {
          name: "The Baba Yaga",
          image: "../assets/character-portraits/killers/08b-the-baba-yaga.png",
          realName: "",
          dlc: "ULTRA-RARE SKIN FOR: The Huntress",
        },
        {
          name: "The Cannibal",
          image: "../assets/character-portraits/killers/09-the-cannibal.png",
          realName: "Bubba Sawyer",
          dlc: "PARAGRAPH II: LEATHERFACE™",
        },
        {
          name: "The Nightmare",
          image: "../assets/character-portraits/killers/10-the-nightmare.png",
          realName: "Freddy Krueger",
          dlc: "CHAPTER VI: A Nightmare on Elm Street™",
        },
        {
          name: "The Pig",
          image: "../assets/character-portraits/killers/11-the-pig.png",
          realName: "Amanda Young",
          dlc: "CHAPTER VII: SAW™",
        },
        {
          name: "The Clown",
          image: "../assets/character-portraits/killers/12-the-clown.png",
          realName: "Jeffrey Hawk",
          dlc: "CHAPTER VIII: Curtain Call",
        },
        {
          name: "The Spirit",
          image: "../assets/character-portraits/killers/13-the-spirit.png",
          realName: "Rin Yamaoka",
          dlc: "CHAPTER IX: Shattered Bloodline",
        },
        {
          name: "The Legion",
          image: "../assets/character-portraits/killers/14-the-legion.png",
          realName: "Frank, Julie, Susie & Joey",
          dlc: "CHAPTER X: Darkness Among Us",
        },
        {
          name: "The Plague",
          image: "../assets/character-portraits/killers/15-the-plague.png",
          realName: "Adiris",
          dlc: "CHAPTER XI: Demise of the Faithful",
        },
        {
          name: "The Ghost Face",
          image: "../assets/character-portraits/killers/16-the-ghost-face.png",
          realName: "Danny Johnson",
          dlc: "CHAPTER XII: Ghost Face®",
        },
        {
          name: "The Demogorgon",
          image: "../assets/character-portraits/killers/17-the-demogorgon.png",
          realName: "",
          dlc: "CHAPTER XIII: Stranger Things",
        },
        {
          name: "The Oni",
          image: "../assets/character-portraits/killers/18-the-oni.png",
          realName: "Kazan Yamaoka",
          dlc: "CHAPTER XIV: Cursed Legacy",
        },
        {
          name: "The Minotaur",
          image: "../assets/character-portraits/killers/18a-the-minotaur.png",
          realName: "",
          dlc: "ULTRA-RARE SKIN FOR: The Oni",
        },
        {
          name: "The Deathslinger",
          image:
            "../assets/character-portraits/killers/19-the-deathslinger.png",
          realName: "Caleb Quinn",
          dlc: "CHAPTER XV: Chains of Hate",
        },
        {
          name: "The Executioner",
          image: "../assets/character-portraits/killers/20-the-executioner.png",
          realName: "Pyramid Head",
          dlc: "CHAPTER XVI: Silent Hill",
        },
        {
          name: "The Blight",
          image: "../assets/character-portraits/killers/21-the-blight.png",
          realName: "Talbot Grimes",
          dlc: "CHAPTER XVII: Descend Beyond",
        },
        {
          name: "The Ferryman",
          image: "../assets/character-portraits/killers/21a-the-ferryman.png",
          realName: "",
          dlc: "UTRA-RARE SKIN FOR: The Blight",
        },
        {
          name: "The Twins",
          image: "../assets/character-portraits/killers/22-the-twins.png",
          realName: "Victor & Charlotte Deshayes",
          dlc: "CHAPTER XVIII: A Binding of Kin",
        },
        {
          name: "The Trickster",
          image: "../assets/character-portraits/killers/23-the-trickster.png",
          realName: "Ji-Woon Hak",
          dlc: "CHAPTER XIX: All-Kill",
        },
        {
          name: "The Nemesis",
          image: "../assets/character-portraits/killers/24-the-nemesis.png",
          realName: "Nemesis T-Type",
          dlc: "CHAPTER XX: Resident Evil",
        },
        {
          name: "The Cenobite",
          image: "../assets/character-portraits/killers/25-the-cenobite.png",
          realName: "Elliot Spencer",
          dlc: "CHAPTER XXI: Hellraiser™",
        },
        {
          name: "The Chatterer",
          image: "../assets/character-portraits/killers/25a-the-chatterer.png",
          realName: "Jim",
          dlc: "LEGENDARY SKIN FOR: The Cenobite",
        },
        {
          name: "The Artist",
          image: "../assets/character-portraits/killers/26-the-artist.png",
          realName: "Carmina Mora",
          dlc: "CHAPTER XXII: Portrait of a Murder",
        },
        {
          name: "The Onryō",
          image: "../assets/character-portraits/killers/27-the-onryo.png",
          realName: "Sadako Yamamura",
          dlc: "CHAPTER XXIII: Sadako Rising",
        },
      ],
      selectedKiller: "",
      visible: false,
    };
  },
  methods: {
    rndKiller() {
      const idx = Math.floor(Math.random() * this.killersArray.length);
      this.selectedKiller = this.killersArray[idx];
      document.getElementById("questionPlaceholder").remove();
      document.getElementById("helperText").remove();
      this.visible = true;
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 50px;
  font-weight: bold;
  font-style: normal;
  line-height: 50px;
  margin: 0 0 15px 0;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  line-height: 24px;
  margin: 0 0 10px 0;
  text-align: center;
  text-transform: uppercase;
  color: #cccccc;
}
h3 {
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  line-height: 14px;
  margin: 0 0 10px 0;
  text-align: center;
  text-transform: uppercase;
  color: #aa0101;
}

img {
  color: white;
}

.questionMark {
  height: 90px;
  width: 90px;
}

.killers {
  margin-top: 1.2rem;
}

.killerButton {
  cursor: pointer;
}

.killerButton:active {
  transform: translateY(4px);
}
</style>
