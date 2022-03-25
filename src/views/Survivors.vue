<template>
  <div class="survivors">
    <h1 class="header">Choose Your Survivor</h1>
    <br />
    <div class="survImage" v-if="visible">
      <img
        :src="selectedSurvivor.image"
        :alt="selectedSurvivor.name"
        class="randomSelectedSurv"
      />
    </div>
    <img
      src="/deadbydaylight-randomizer/public/assets/icons/character-empty.png"
      alt="Random Survivor Placeholder Portrait"
      class="questionMark"
      id="questionPlaceholder"
    />
    <p id="helperText">Click the Survivor icon below!</p>
    <h1 class="survName">{{ selectedSurvivor.name }}</h1>
    <h3 class="survDLC">{{ selectedSurvivor.dlc }}</h3>
    <br />
    <div class="survButton">
      <img
        src="/deadbydaylight-randomizer/public/assets/icons/survivor-icon.png"
        alt="Click here for a random survivor!"
        @click="rndSurv"
        class="randomSurvButton"
      />
    </div>
  </div>
</template>

<script>
import { survivorsArray } from "/utils/Survivors.js";
export default {
  data() {
    return {
      survivorsArray: survivorsArray,
      selectedSurvivor: "",
      visible: false,
    };
  },
  methods: {
    randomArray() {
      const idx = Math.floor(Math.random() * this.survivorsArray.length);
      this.selectedSurvivor = this.survivorsArray[idx];
    },
    rndSurv() {
      this.randomArray();
      document.getElementById("questionPlaceholder").remove();
      document.getElementById("helperText").remove();
      this.visible = true;
    },
  },
};
</script>

<style scoped>
@media (min-width: 320px) and (max-width: 999px) {
  .header {
    font-size: 1.5rem;
  }

  .questionMark,
  .randomSelectedSurv {
    height: 15.2rem;
  }

  .survName {
    font-size: 1.2rem;
  }

  .randomSurvButton {
    width: 5.5rem !important;
    height: 5.5rem !important;
  }
}

h3 {
  font-size: 0.875rem;
  font-weight: bold;
  font-style: normal;
  line-height: 0.875rem;
  margin: 0 0 0.625rem 0;
  text-align: center;
  text-transform: uppercase;
  color: #aa0101;
}

img {
  color: white;
}

footer {
  padding: 0.125rem 2.5rem;
  float: left;
  margin-top: 9rem;
}

.survivors {
  margin-top: 1.2rem;
}

.survButton {
  cursor: pointer;
}

.survButton:active {
  transform: translateY(0.25rem);
}

.randomSurvButton {
  width: 7.5rem;
  height: 7.5rem;
}
</style>
