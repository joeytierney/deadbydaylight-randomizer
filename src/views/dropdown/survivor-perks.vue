<template>
  <h1 style="margin-top: 1.2rem; font-size: 50px">Survivor Perks</h1>
  <div class="perks" v-if="visible">
    <div class="perk1">
      <img
        :src="selectedSurvPerk.image"
        :alt="selectedSurvPerk.name"
        width="200"
      />
      <h1 class="perkName">{{ selectedSurvPerk.name }}</h1>
      <h3 class="perkTeach">{{ selectedSurvPerk.teachable }}</h3>
      <img
        :src="selectedSurvPerk.survivor"
        :alt="selectedSurvPerk.teachable"
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
        :src="selectedSurvPerk2.image"
        :alt="selectedSurvPerk2.name"
        width="200"
      />
      <h1 class="perkName">{{ selectedSurvPerk2.name }}</h1>
      <h3 class="perkTeach">{{ selectedSurvPerk2.teachable }}</h3>
      <img
        :src="selectedSurvPerk2.survivor"
        :alt="selectedSurvPerk2.teachable"
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
        :src="selectedSurvPerk3.image"
        :alt="selectedSurvPerk3.name"
        width="200"
      />
      <h1 class="perkName">{{ selectedSurvPerk3.name }}</h1>
      <h3 class="perkTeach">{{ selectedSurvPerk3.teachable }}</h3>
      <img
        :src="selectedSurvPerk3.survivor"
        :alt="selectedSurvPerk3.teachable"
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
        :src="selectedSurvPerk4.image"
        :alt="selectedSurvPerk4.name"
        width="200"
      />
      <h1 class="perkName">{{ selectedSurvPerk4.name }}</h1>
      <h3 class="perkTeach">{{ selectedSurvPerk4.teachable }}</h3>
      <img
        :src="selectedSurvPerk4.survivor"
        :alt="selectedSurvPerk4.teachable"
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
    alt="Random Survivor Perk Placeholder Icon"
    class="emptyPerk"
    id="emptyPerk"
    width="200"
  />
  <br />
  <br />
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
      this.randomArray();
      this.checkForRepeat();
      document.getElementById("emptyPerk").remove();
      document.getElementById("helperText").remove();
      this.visible = true;
    },
    rerollPerk1() {
      const idx = Math.floor(Math.random() * this.survivorPerks.length);
      this.selectedSurvPerk = this.survivorPerks[idx];
      if (this.selectedSurvPerk === this.selectedSurvPerk2) {
        this.rerollPerk1();
      } else if (this.selectedSurvPerk === this.selectedSurvPerk3) {
        this.rerollPerk1();
      } else if (this.selectedSurvPerk === this.selectedSurvPerk4) {
        this.rerollPerk1();
      }
    },
    rerollPerk2() {
      const idx2 = Math.floor(Math.random() * this.survivorPerks.length);
      this.selectedSurvPerk2 = this.survivorPerks[idx2];
      if (this.selectedSurvPerk2 === this.selectedSurvPerk) {
        this.rerollPerk2();
      } else if (this.selectedSurvPerk2 === this.selectedSurvPerk3) {
        this.rerollPerk2();
      } else if (this.selectedSurvPerk2 === this.selectedSurvPerk4) {
        this.rerollPerk2();
      }
    },
    rerollPerk3() {
      const idx3 = Math.floor(Math.random() * this.survivorPerks.length);
      this.selectedSurvPerk3 = this.survivorPerks[idx3];
      if (this.selectedSurvPerk3 === this.selectedSurvPerk) {
        this.rerollPerk3();
      } else if (this.selectedSurvPerk3 === this.selectedSurvPerk2) {
        this.rerollPerk3();
      } else if (this.selectedSurvPerk3 === this.selectedSurvPerk4) {
        this.rerollPerk3();
      }
    },
    rerollPerk4() {
      const idx4 = Math.floor(Math.random() * this.survivorPerks.length);
      this.selectedSurvPerk4 = this.survivorPerks[idx4];
      if (this.selectedSurvPerk4 === this.selectedSurvPerk) {
        this.rerollPerk4();
      } else if (this.selectedSurvPerk4 === this.selectedSurvPerk2) {
        this.rerollPerk4();
      } else if (this.selectedSurvPerk4 === this.selectedSurvPerk3) {
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
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.perkButton,
.rerollPerk {
  cursor: pointer;
}

.perkButton:active,
.rerollPerk:active {
  transform: translateY(4px);
}

.perkName {
  font-size: 1rem;
}

.perk1 {
  width: 20%;
  height: 350px;
}

.perk2 {
  width: 20%;
  height: 350px;
}

.perk3 {
  width: 20%;
  height: 350px;
}

.perk4 {
  width: 20%;
  height: 350px;
}
</style>
