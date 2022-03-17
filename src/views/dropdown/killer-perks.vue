<template>
  <h1 style="margin-top: 1.2rem; font-size: 50px">Killer Perks</h1>
  <div class="perks" v-if="visible">
    <div class="perk1">
      <img :src="selectedKillerPerk.image" alt="" width="200" />
      <h1 class="perkName">{{ selectedKillerPerk.name }}</h1>
      <h3 class="perkTeach">{{ selectedKillerPerk.teachable }}</h3>
      <img :src="selectedKillerPerk.killer" alt="" width="200" />
    </div>
    <div class="perk2">
      <img :src="selectedKillerPerk2.image" alt="" width="200" />
      <h1 class="perkName">{{ selectedKillerPerk2.name }}</h1>
      <h3 class="perkTeach">{{ selectedKillerPerk2.teachable }}</h3>
      <img :src="selectedKillerPerk2.killer" alt="" width="200" />
    </div>
    <div class="perk3">
      <img :src="selectedKillerPerk3.image" alt="" width="200" />
      <h1 class="perkName">{{ selectedKillerPerk3.name }}</h1>
      <h3 class="perkTeach">{{ selectedKillerPerk3.teachable }}</h3>
      <img :src="selectedKillerPerk3.killer" alt="" width="200" />
    </div>
    <div class="perk4">
      <img :src="selectedKillerPerk4.image" alt="" width="200" />
      <h1 class="perkName">{{ selectedKillerPerk4.name }}</h1>
      <h3 class="perkTeach">{{ selectedKillerPerk4.teachable }}</h3>
      <img :src="selectedKillerPerk4.killer" alt="" width="200" />
    </div>
  </div>
  <img
    src="/assets/icons/perk-empty-icon.png"
    alt="Random Killer Perk Placeholder"
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
import { killerPerks } from "/utils/KillerPerks.js";
export default {
  data() {
    return {
      killerPerks: killerPerks,
      selectedKillerPerk: "",
      selectedKillerPerk2: "",
      selectedKillerPerk3: "",
      selectedKillerPerk4: "",
      visible: false,
    };
  },
  methods: {
    randomArray() {
      const idx = Math.floor(Math.random() * this.killerPerks.length);
      const idx2 = Math.floor(Math.random() * this.killerPerks.length);
      const idx3 = Math.floor(Math.random() * this.killerPerks.length);
      const idx4 = Math.floor(Math.random() * this.killerPerks.length);
      this.selectedKillerPerk = this.killerPerks[idx];
      this.selectedKillerPerk2 = this.killerPerks[idx2];
      this.selectedKillerPerk3 = this.killerPerks[idx3];
      this.selectedKillerPerk4 = this.killerPerks[idx4];
      this.checkForRepeat();
    },
    checkForRepeat() {
      if (this.selectedKillerPerk === this.selectedKillerPerk2) {
        this.randomArray();
      } else if (this.selectedKillerPerk === this.selectedKillerPerk3) {
        this.randomArray();
      } else if (this.selectedKillerPerk === this.selectedKillerPerk4) {
        this.randomArray();
      } else if (this.selectedKillerPerk2 === this.selectedKillerPerk3) {
        this.randomArray();
      } else if (this.selectedKillerPerk2 === this.selectedKillerPerk4) {
        this.randomArray();
      } else if (this.selectedKillerPerk3 === this.selectedKillerPerk4) {
        this.randomArray();
      }
    },
    rndPerk() {
      this.randomArray();
      this.checkForRepeat();
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
  color: #ff8800;
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
