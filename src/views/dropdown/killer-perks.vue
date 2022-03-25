<template>
  <h1 class="header">Killer Perks</h1>
  <div class="perks" v-if="visible">
    <div class="perk1">
      <img
        :src="selectedKillerPerk.image"
        :alt="selectedKillerPerk.name"
        class="killerPerks"
      />
      <h1 class="perkName">{{ selectedKillerPerk.name }}</h1>
      <h3 class="perkTeach">{{ selectedKillerPerk.teachable }}</h3>
      <img
        :src="selectedKillerPerk.killer"
        :alt="selectedKillerPerk.teachable"
        class="killerPerkOwner"
      />
      <p class="rerollPerk">
        <img
          src="https://raw.githubusercontent.com/joeytierney/deadbydaylight-randomizer/main/public/assets/icons/reroll.png"
          alt="Reroll Icon"
          class="rerollIcon"
          @click="rerollPerk1()"
        /><br />Reroll Perk
      </p>
    </div>
    <div class="perk2">
      <img
        :src="selectedKillerPerk2.image"
        :alt="selectedKillerPerk2.name"
        class="killerPerks"
      />
      <h1 class="perkName">{{ selectedKillerPerk2.name }}</h1>
      <h3 class="perkTeach">{{ selectedKillerPerk2.teachable }}</h3>
      <img
        :src="selectedKillerPerk2.killer"
        :alt="selectedKillerPerk2.teachable"
        class="killerPerkOwner"
      />
      <p class="rerollPerk">
        <img
          src="https://raw.githubusercontent.com/joeytierney/deadbydaylight-randomizer/main/public/assets/icons/reroll.png"
          alt="Reroll Icon"
          class="rerollIcon"
          @click="rerollPerk2()"
        /><br />Reroll Perk
      </p>
    </div>
    <div class="perk3">
      <img
        :src="selectedKillerPerk3.image"
        :alt="selectedKillerPerk3.name"
        class="killerPerks"
      />
      <h1 class="perkName">{{ selectedKillerPerk3.name }}</h1>
      <h3 class="perkTeach">{{ selectedKillerPerk3.teachable }}</h3>
      <img
        :src="selectedKillerPerk3.killer"
        :alt="selectedKillerPerk3.teachable"
        class="killerPerkOwner"
      />
      <p class="rerollPerk">
        <img
          src="https://raw.githubusercontent.com/joeytierney/deadbydaylight-randomizer/main/public/assets/icons/reroll.png"
          alt="Reroll Icon"
          class="rerollIcon"
          @click="rerollPerk3()"
        /><br />Reroll Perk
      </p>
    </div>
    <div class="perk4">
      <img
        :src="selectedKillerPerk4.image"
        :alt="selectedKillerPerk4.name"
        class="killerPerks"
      />
      <h1 class="perkName">{{ selectedKillerPerk4.name }}</h1>
      <h3 class="perkTeach">{{ selectedKillerPerk4.teachable }}</h3>
      <img
        :src="selectedKillerPerk4.killer"
        :alt="selectedKillerPerk4.teachable"
        class="killerPerkOwner"
      />
      <p class="rerollPerk">
        <img
          src="https://raw.githubusercontent.com/joeytierney/deadbydaylight-randomizer/main/public/assets/icons/reroll.png"
          alt="Reroll Icon"
          class="rerollIcon"
          @click="rerollPerk4()"
        /><br />Reroll Perk
      </p>
    </div>
  </div>
  <img
    src="https://raw.githubusercontent.com/joeytierney/deadbydaylight-randomizer/main/public/assets/icons/perk-empty-icon.png"
    alt="Random Killer Perk Placeholder"
    class="emptyPerk"
    id="emptyPerk"
  />
  <br />
  <br />
  <p id="helperText">Click the Perk icon below!</p>
  <br />
  <div class="perkButton">
    <img
      src="https://raw.githubusercontent.com/joeytierney/deadbydaylight-randomizer/main/public/assets/icons/perk-icon.png"
      alt="Click here for a random set of perks!"
      @click="rndPerk"
      class="randomPerkButton"
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

  .killerPerks,
  .rerollIcon {
    width: 4.5rem !important;
  }

  .killerPerkOwner {
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

.perks {
  margin-top: 1.2rem;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.perkName {
  font-size: 1rem;
}

.emptyPerk {
  width: 12.5rem;
}

.randomPerkButton {
  width: 9.375rem;
  height: 9.375rem;
}

.perkButton,
.rerollPerk {
  cursor: pointer;
}

.perkButton:active,
.rerollPerk:active {
  transform: translateY(0.25rem);
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

.killerPerks,
.killerPerkOwner {
  width: 12.5rem;
}

.rerollIcon {
  width: 7.6875rem;
}
</style>
