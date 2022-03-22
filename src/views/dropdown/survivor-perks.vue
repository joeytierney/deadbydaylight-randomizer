<template>
  <h1 class="header">Survivor Perks</h1>
  <div class="perks" v-if="visible">
    <div class="perk1">
      <img
        :src="selectedSurvPerk.image"
        :alt="selectedSurvPerk.name"
        class="survivorPerks"
      />
      <h1 class="perkName">{{ selectedSurvPerk.name }}</h1>
      <h3 class="perkTeach">{{ selectedSurvPerk.teachable }}</h3>
      <img
        :src="selectedSurvPerk.survivor"
        :alt="selectedSurvPerk.teachable"
        class="survivorPerkOwner"
      />
      <p class="rerollPerk">
        <img
          src="/assets/icons/reroll.png"
          alt="Reroll Icon"
          class="rerollIcon"
          @click="rerollPerk1()"
        /><br />Reroll Perk
      </p>
    </div>
    <div class="perk2">
      <img
        :src="selectedSurvPerk2.image"
        :alt="selectedSurvPerk2.name"
        class="survivorPerks"
      />
      <h1 class="perkName">{{ selectedSurvPerk2.name }}</h1>
      <h3 class="perkTeach">{{ selectedSurvPerk2.teachable }}</h3>
      <img
        :src="selectedSurvPerk2.survivor"
        :alt="selectedSurvPerk2.teachable"
        class="survivorPerkOwner"
      />
      <p class="rerollPerk">
        <img
          src="/assets/icons/reroll.png"
          alt="Reroll Icon"
          class="rerollIcon"
          @click="rerollPerk2()"
        /><br />Reroll Perk
      </p>
    </div>
    <div class="perk3">
      <img
        :src="selectedSurvPerk3.image"
        :alt="selectedSurvPerk3.name"
        class="survivorPerks"
      />
      <h1 class="perkName">{{ selectedSurvPerk3.name }}</h1>
      <h3 class="perkTeach">{{ selectedSurvPerk3.teachable }}</h3>
      <img
        :src="selectedSurvPerk3.survivor"
        :alt="selectedSurvPerk3.teachable"
        class="survivorPerkOwner"
      />
      <p class="rerollPerk">
        <img
          src="/assets/icons/reroll.png"
          alt="Reroll Icon"
          class="rerollIcon"
          @click="rerollPerk3()"
        /><br />Reroll Perk
      </p>
    </div>
    <div class="perk4">
      <img
        :src="selectedSurvPerk4.image"
        :alt="selectedSurvPerk4.name"
        class="survivorPerks"
      />
      <h1 class="perkName">{{ selectedSurvPerk4.name }}</h1>
      <h3 class="perkTeach">{{ selectedSurvPerk4.teachable }}</h3>
      <img
        :src="selectedSurvPerk4.survivor"
        :alt="selectedSurvPerk4.teachable"
        class="survivorPerkOwner"
      />
      <p class="rerollPerk">
        <img
          src="/assets/icons/reroll.png"
          alt="Reroll Icon"
          class="rerollIcon"
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
      class="randomPerkButton"
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
@media (min-width: 320px) and (max-width: 999px) {
  .header {
    font-size: 1.5rem;
  }

  .emptyPerk {
    width: 7.5rem !important;
  }

  .randomPerkButton {
    width: 5.375rem !important;
    height: 5.375rem !important;
  }

  .survivorPerks,
  .rerollIcon {
    width: 4.5rem !important;
  }

  .survivorPerkOwner {
    width: 4.5rem !important;
  }

  .rerollPerk {
    font-size: 0.73rem !important;
  }

  .perkName {
    font-size: 0.6rem !important;
    height: 20% !important;
  }

  .perkTeach {
    display: none;
  }
}

h1 {
  margin-top: 1.2rem;
  font-size: 3.125rem;
}

h3 {
  color: #ff8800;
}

img {
  color: white;
}

p {
  line-height: 0.0625rem;
}

.questionMark {
  height: 5.625rem;
  width: 5.625rem;
}

.emptyPerk {
  width: 12.5rem;
}

.randomPerkButton {
  width: 9.375rem;
  height: 9.375rem;
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
  transform: translateY(0.25rem);
}

.perkName {
  font-size: 1rem;
}

.perk1 {
  width: 20%;
  height: 21.875rem;
}

.perk2 {
  width: 20%;
  height: 21.875rem;
}

.perk3 {
  width: 20%;
  height: 21.875rem;
}

.perk4 {
  width: 20%;
  height: 21.875rem;
}

.survivorPerks,
.survivorPerkOwner {
  width: 12.5rem;
}

.rerollIcon {
  width: 7.6875rem;
}
</style>
