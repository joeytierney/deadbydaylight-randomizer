<template>
  <div class="survivors">
    <h1>Choose Your Survivor</h1>
    <br />
    <div class="survImage" v-if="visible">
      <img :src="selectedSurvivor.image" :alt="selectedSurvivor.name" />
    </div>
    <img
      src="/assets/icons/character-empty.png"
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
        src="/assets/icons/survivor-icon.png"
        alt="Click here for a random survivor!"
        @click="rndSurv"
        width="120"
        height="120"
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
