<template>
  <h1 style="margin-top: 1.2rem; font-size: 50px">Survivor Perks</h1>
  <div class="perks" v-if="visible">
    <div class="perk1">
      <img :src="selectedSurvPerk.image" alt="" width="200" />
      <h1 class="perkName">{{ selectedSurvPerk.name }}</h1>
      <h3 class="perkTeach">{{ selectedSurvPerk.teachable }}</h3>
    </div>
    <div class="perk2">
      <img :src="selectedSurvPerk2.image" alt="" width="200" />
      <h1 class="perkName">{{ selectedSurvPerk2.name }}</h1>
      <h3 class="perkTeach">{{ selectedSurvPerk2.teachable }}</h3>
    </div>
    <div class="perk3">
      <img :src="selectedSurvPerk3.image" alt="" width="200" />
      <h1 class="perkName">{{ selectedSurvPerk3.name }}</h1>
      <h3 class="perkTeach">{{ selectedSurvPerk3.teachable }}</h3>
    </div>
    <div class="perk4">
      <img :src="selectedSurvPerk4.image" alt="" width="200" />
      <h1 class="perkName">{{ selectedSurvPerk4.name }}</h1>
      <h3 class="perkTeach">{{ selectedSurvPerk4.teachable }}</h3>
    </div>
  </div>
  <img
    src="/assets/icons/perk-empty-icon.png"
    alt="Random Survivor Perk Placeholder"
    class="emptyPerk"
    id="emptyPerk"
    width="200"
  />
  <p id="helperText">Click the Perk icon below!</p>
  <br />
  <div class="perkButton">
    <img
      src="/assets/icons/perk-icon.png"
      alt="Click here for a random set of perks!"
      @click="rndPerk"
      width="150"
      height="150"
    />
  </div>
</template>

<script>
import { survivorPerks } from "/utils/SurvivorPerks.js";
export default {
  data() {
    return {
      survivorPerks: survivorPerks,
      selectedSurvPerk: "",
      selectedSurvPerk2: "",
      selectedSurvPerk3: "",
      selectedSurvPerk4: "",
      visible: false,
    };
  },
  methods: {
    randomArray() {
      const idx = Math.floor(Math.random() * this.survivorPerks.length);
      const idx2 = Math.floor(Math.random() * this.survivorPerks.length);
      const idx3 = Math.floor(Math.random() * this.survivorPerks.length);
      const idx4 = Math.floor(Math.random() * this.survivorPerks.length);
      this.selectedSurvPerk = this.survivorPerks[idx];
      this.selectedSurvPerk2 = this.survivorPerks[idx2];
      this.selectedSurvPerk3 = this.survivorPerks[idx3];
      this.selectedSurvPerk4 = this.survivorPerks[idx4];
      this.checkForRepeat();
    },
    checkForRepeat() {
      if (this.selectedSurvPerk === this.selectedSurvPerk2) {
        this.randomArray();
      } else if (this.selectedSurvPerk === this.selectedSurvPerk3) {
        this.randomArray();
      } else if (this.selectedSurvPerk === this.selectedSurvPerk4) {
        this.randomArray();
      } else if (this.selectedSurvPerk2 === this.selectedSurvPerk3) {
        this.randomArray();
      } else if (this.selectedSurvPerk2 === this.selectedSurvPerk4) {
        this.randomArray();
      } else if (this.selectedSurvPerk3 === this.selectedSurvPerk4) {
        this.randomArray();
      }
    },
    rndPerk() {
      this.checkForRepeat();
      this.randomArray();
      document.getElementById("emptyPerk").remove();
      document.getElementById("helperText").remove();
      this.visible = true;
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
  font-weight: bold;
  font-style: normal;
  line-height: 50px;
  margin: 0 0 15px 0;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
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

.perks {
  margin-top: 1.2rem;
}

.perkButton {
  cursor: pointer;
}

.perkButton:active {
  transform: translateY(4px);
}

.perk1 {
  float: left;
  width: 20%;
  height: 280px;
}

.perk2 {
  float: left;
  width: 20%;
  height: 280px;
}

.perk3 {
  float: right;
  width: 20%;
  height: 280px;
}

.perk4 {
  float: right;
  width: 20%;
  height: 280px;
}
</style>
