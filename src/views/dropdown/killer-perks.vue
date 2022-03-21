<template>
  <h1 style="margin-top: 1.2rem; font-size: 50px">Killer Perks</h1>
  <div class="perks" v-if="visible">
    <div class="perk1">
      <img
        :src="selectedKillerPerk.image"
        :alt="selectedKillerPerk.name"
        width="200"
      />
      <h1 class="perkName">{{ selectedKillerPerk.name }}</h1>
      <h3 class="perkTeach">{{ selectedKillerPerk.teachable }}</h3>
      <img
        :src="selectedKillerPerk.killer"
        :alt="selectedKillerPerk.teachable"
        width="200"
      />
      <p class="rerollPerk">
        <img
          src="/assets/icons/reroll.png"
          alt="Reroll Icon"
          width="123"
          @click="rerollPerk1()"
        /><br />Reroll Perk
      </p>
    </div>
    <div class="perk2">
      <img
        :src="selectedKillerPerk2.image"
        :alt="selectedKillerPerk2.name"
        width="200"
      />
      <h1 class="perkName">{{ selectedKillerPerk2.name }}</h1>
      <h3 class="perkTeach">{{ selectedKillerPerk2.teachable }}</h3>
      <img
        :src="selectedKillerPerk2.killer"
        :alt="selectedKillerPerk2.teachable"
        width="200"
      />
      <p class="rerollPerk">
        <img
          src="/assets/icons/reroll.png"
          alt="Reroll Icon"
          width="123"
          @click="rerollPerk2()"
        /><br />Reroll Perk
      </p>
    </div>
    <div class="perk3">
      <img
        :src="selectedKillerPerk3.image"
        :alt="selectedKillerPerk3.name"
        width="200"
      />
      <h1 class="perkName">{{ selectedKillerPerk3.name }}</h1>
      <h3 class="perkTeach">{{ selectedKillerPerk3.teachable }}</h3>
      <img
        :src="selectedKillerPerk3.killer"
        :alt="selectedKillerPerk3.teachable"
        width="200"
      />
      <p class="rerollPerk">
        <img
          src="/assets/icons/reroll.png"
          alt="Reroll Icon"
          width="123"
          @click="rerollPerk3()"
        /><br />Reroll Perk
      </p>
    </div>
    <div class="perk4">
      <img
        :src="selectedKillerPerk4.image"
        :alt="selectedKillerPerk4.name"
        width="200"
      />
      <h1 class="perkName">{{ selectedKillerPerk4.name }}</h1>
      <h3 class="perkTeach">{{ selectedKillerPerk4.teachable }}</h3>
      <img
        :src="selectedKillerPerk4.killer"
        :alt="selectedKillerPerk4.teachable"
        width="200"
      />
      <p class="rerollPerk">
        <img
          src="/assets/icons/reroll.png"
          alt="Reroll Icon"
          width="123"
          @click="rerollPerk4()"
        /><br />Reroll Perk
      </p>
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
    rerollPerk1() {
      const idx = Math.floor(Math.random() * this.killerPerks.length);
      this.selectedKillerPerk = this.killerPerks[idx];
      if (this.selectedKillerPerk === this.selectedKillerPerk2) {
        this.rerollPerk1();
      } else if (this.selectedKillerPerk === this.selectedKillerPerk3) {
        this.rerollPerk1();
      } else if (this.selectedKillerPerk === this.selectedKillerPerk4) {
        this.rerollPerk1();
      }
    },
    rerollPerk2() {
      const idx2 = Math.floor(Math.random() * this.killerPerks.length);
      this.selectedKillerPerk2 = this.killerPerks[idx2];
      if (this.selectedKillerPerk2 === this.selectedKillerPerk) {
        this.rerollPerk2();
      } else if (this.selectedKillerPerk2 === this.selectedKillerPerk3) {
        this.rerollPerk2();
      } else if (this.selectedKillerPerk2 === this.selectedKillerPerk4) {
        this.rerollPerk2();
      }
    },
    rerollPerk3() {
      const idx3 = Math.floor(Math.random() * this.killerPerks.length);
      this.selectedKillerPerk3 = this.killerPerks[idx3];
      if (this.selectedKillerPerk3 === this.selectedKillerPerk) {
        this.rerollPerk3();
      } else if (this.selectedKillerPerk3 === this.selectedKillerPerk2) {
        this.rerollPerk3();
      } else if (this.selectedKillerPerk3 === this.selectedKillerPerk4) {
        this.rerollPerk3();
      }
    },
    rerollPerk4() {
      const idx4 = Math.floor(Math.random() * this.killerPerks.length);
      this.selectedKillerPerk4 = this.killerPerks[idx4];
      if (this.selectedKillerPerk4 === this.selectedKillerPerk) {
        this.rerollPerk4();
      } else if (this.selectedKillerPerk4 === this.selectedKillerPerk2) {
        this.rerollPerk4();
      } else if (this.selectedKillerPerk4 === this.selectedKillerPerk3) {
        this.rerollPerk4();
      }
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}

h3 {
  color: #ff8800;
}

img {
  color: white;
}

p {
  line-height: 1px;
}

.questionMark {
  height: 90px;
  width: 90px;
}

.perks {
  margin-top: 1.2rem;
}

.perkButton,
.rerollPerk {
  cursor: pointer;
}

.perkButton:active,
.rerollPerk:active {
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
