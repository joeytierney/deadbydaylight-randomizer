<template>
  <div class="survivors">
    <h1>Choose Your Survivor</h1>
    <br />
    <img :src="selectedSurvivor.image" alt="Click the survivor icon below!" />
    <h1 class="survName">{{ selectedSurvivor.name }}</h1>
    <h3 class="survDLC">{{ selectedSurvivor.dlc }}</h3>
    <br />
    <p>
      <img
        src="../assets/icons/survivor-icon.png"
        alt="Click here for a random survivor!"
        @click="rndSurv"
        width="90"
        height="90"
        class="survButton"
      />
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      survivorsArray: [
        {
          name: "Dwight Fairfield",
          image:
            "../assets/character-portraits/survivors/01-dwight-fairfield.png",
          dlc: "",
        },
        {
          name: "Meg Thomas",
          image: "../assets/character-portraits/survivors/02-meg-thomas.png",
          dlc: "",
        },
        {
          name: "Claudette Morel",
          image:
            "../assets/character-portraits/survivors/03-claudette-morel.png",
          dlc: "",
        },
        {
          name: "Jake Park",
          image: "../assets/character-portraits/survivors/04-jake-park.png",
          dlc: "",
        },
        {
          name: "Nea Karlsson",
          image: "../assets/character-portraits/survivors/05-nea-karlsson.png",
          dlc: "CHAPTER I: The Last Breath",
        },
        {
          name: 'William "Bill" Overbeck',
          image: "../assets/character-portraits/survivors/06-bill-overbeck.png",
          dlc: "PARAGRAPH I: Left Behind",
        },
        {
          name: "David King",
          image: "../assets/character-portraits/survivors/07-david-king.png",
          dlc: "CHAPTER V: A Lullaby for the Dark",
        },
        {
          name: "Laurie Strode",
          image: "../assets/character-portraits/survivors/08-laurie-strode.png",
          dlc: "CHAPTER II: HALLOWEEN",
        },
        {
          name: "Ace Visconti",
          image: "../assets/character-portraits/survivors/09-ace-visconti.png",
          dlc: "CHAPTER III: Of Flesh and Mud",
        },
        {
          name: "Feng Min",
          image: "../assets/character-portraits/survivors/10-feng-min.png",
          dlc: "CHAPTER IV: Spark of Madness",
        },
        {
          name: "Quentin Smith",
          image: "../assets/character-portraits/survivors/11-quentin-smith.png",
          dlc: "CHAPTER VI: A Nightmare on Elm Street",
        },
        {
          name: "Detective David Tapp",
          image:
            "../assets/character-portraits/survivors/12-detective-david-tapp.png",
          dlc: "CHAPTER VII: SAW",
        },
        {
          name: "Kate Denson",
          image: "../assets/character-portraits/survivors/13-kate-denson.png",
          dlc: "CHAPTER VIII: Curtain Call",
        },
        {
          name: "Adam Francis",
          image: "../assets/character-portraits/survivors/14-adam-francis.png",
          dlc: "CHAPTER IX: Shattered Bloodline",
        },
        {
          name: "Jeff Johansen",
          image: "../assets/character-portraits/survivors/15-jeff-johansen.png",
          dlc: "CHAPTER X: Darkness Among Us",
        },
        {
          name: "Jane Romero",
          image: "../assets/character-portraits/survivors/16-jane-romero.png",
          dlc: "CHAPTER XI: Demise of the Faithful",
        },
        {
          name: "Ashley J. Williams",
          image: "../assets/character-portraits/survivors/17-ash-williams.png",
          dlc: "PARAGRAPH III: Ash vs Evil Dead",
        },
        {
          name: "Nancy Wheeler",
          image: "../assets/character-portraits/survivors/18-nancy-wheeler.png",
          dlc: "CHAPTER XIII: Stranger Things",
        },
        {
          name: "Steve Harrington",
          image:
            "../assets/character-portraits/survivors/19-steve-harrington.png",
          dlc: "CHAPTER XIII: Stranger Things",
        },
        {
          name: "Jonathan Byers",
          image:
            "../assets/character-portraits/survivors/19a-jonathan-byers.png",
          dlc: "LEGENDARY SKIN FOR: Steve Harrington",
        },
        {
          name: "Yui Kimura",
          image: "../assets/character-portraits/survivors/20-yui-kimura.png",
          dlc: "CHAPTER XIV: Cursed Legacy",
        },
        {
          name: "Zarina Kassir",
          image: "../assets/character-portraits/survivors/21-zarina-kassir.png",
          dlc: "CHAPTER XV: Chains of Hate",
        },
        {
          name: "Cheryl Mason",
          image: "../assets/character-portraits/survivors/22-cheryl-mason.png",
          dlc: "CHAPTER XVI: Silent Hill",
        },
        {
          name: "Lisa Garland",
          image: "../assets/character-portraits/survivors/22a-lisa-garland.png",
          dlc: "LEGENDAY SKIN FOR: Cheryl Mason",
        },
        {
          name: "Cybil Bennett",
          image:
            "../assets/character-portraits/survivors/22b-cybil-bennett.png",
          dlc: "LEGENDAY SKIN FOR: Cheryl Mason",
        },
        {
          name: "James Sunderland",
          image:
            "../assets/character-portraits/survivors/22c-james-sunderland.png",
          dlc: "LEGENDAY SKIN FOR: Cheryl Mason",
        },
        {
          name: "Felix Richter",
          image: "../assets/character-portraits/survivors/23-felix-richter.png",
          dlc: "CHAPTER XVII: Descend Beyond",
        },
        {
          name: "Élodie Rakoto",
          image: "../assets/character-portraits/survivors/24-elodie-rakoto.png",
          dlc: "CHAPTER XVIII: A Binding of Kin",
        },
        {
          name: "Yun-Jin Lee",
          image: "../assets/character-portraits/survivors/25-yun-jin-lee.png",
          dlc: "CHAPTER XIX: All-Kill",
        },
        {
          name: "Jill Valentine",
          image:
            "../assets/character-portraits/survivors/26-jill-valentine.png",
          dlc: "CHAPTER XX: Resident Evil",
        },
        {
          name: "Claire Redfield",
          image:
            "../assets/character-portraits/survivors/26a-claire-redfield.png",
          dlc: "LEGENDARY SKIN FOR: Jill Valentine",
        },
        {
          name: "Leon S. Kennedy",
          image:
            "../assets/character-portraits/survivors/27-leon-s-kennedy.png",
          dlc: "CHAPTER XX: Resident Evil",
        },
        {
          name: "Chris Redfield",
          image:
            "../assets/character-portraits/survivors/27a-chris-redfield.png",
          dlc: "LEGENDARY SKIN FOR: Leon S. Kennedy",
        },
        {
          name: "Mikaela Reid",
          image: "../assets/character-portraits/survivors/28-mikaela-reid.png",
          dlc: "PARAGRAPH IV: Hour of the Witch",
        },
        {
          name: "Jonah Vasquez",
          image: "../assets/character-portraits/survivors/29-jonah-vasquez.png",
          dlc: "CHAPTER XXII: Portrait of a Murder",
        },
        {
          name: "Yoichi Asakawa",
          image:
            "../assets/character-portraits/survivors/30-yoichi-asakawa.png",
          dlc: "CHAPTER XXIII: Sadako Rising",
        },
      ],
      selectedSurvivor: "",
    };
  },
  methods: {
    rndSurv() {
      const idx = Math.floor(Math.random() * this.survivorsArray.length);
      this.selectedSurvivor = this.survivorsArray[idx];
    },
  },
};
</script>

<style scoped>
h1 {
  color: white;
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

.survivors {
  margin-top: 1.2rem;
}

.survButton {
  cursor: pointer;
}

.survButton:active {
  transform: translateY(4px);
}
</style>
