<template>
  <div class="killers">
    <h1>Choose Your Killer</h1>
    <br />
    <div class="killerImage" v-if="visible">
      <img :src="selectedKiller.image" alt="Click the killer icon below!" />
    </div>
    <img
      src="/assets/icons/character-empty.png"
      alt="Random Killer Placeholder"
      class="questionMark"
      id="questionPlaceholder"
    />
    <p id="helperText">Click the Killer icon below!</p>
    <h1>{{ selectedKiller.name }}</h1>
    <h2>{{ selectedKiller.realName }}</h2>
    <h3>{{ selectedKiller.dlc }}</h3>
    <br />
    <div class="killerButton">
      <img
        src="../assets/icons/killer-icon.png"
        alt="Click here for a random Killer!"
        @click="rndKiller"
        width="90"
        height="90"
      />
    </div>
  </div>
</template>

<script>
import { killersArray } from "/utils/Killers.js";
export default {
  data() {
    return {
      killersArray: killersArray,
      selectedKiller: "",
      visible: false,
    };
  },
  methods: {
    randomArray() {
      const idx = Math.floor(Math.random() * this.killersArray.length);
      this.selectedKiller = this.killersArray[idx];
    },
    rndKiller() {
      this.randomArray();
      document.getElementById("questionPlaceholder").remove();
      document.getElementById("helperText").remove();
      this.visible = true;
    },
  },
};
</script>

<style scoped>
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
