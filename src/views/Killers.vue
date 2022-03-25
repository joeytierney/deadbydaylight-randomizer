<template>
  <div class="killers">
    <h1 class="header">Choose Your Killer</h1>
    <br />
    <div class="killerImage" v-if="visible">
      <img
        :src="selectedKiller.image"
        :alt="selectedKiller.name"
        class="randomSelectedKiller"
      />
    </div>
    <img
      src="/../assets/icons/character-empty.png"
      alt="Random Killer Placeholder Portrait"
      class="questionMark"
      id="questionPlaceholder"
    />
    <p id="helperText">Click the Killer icon below!</p>
    <h1 class="killerName">{{ selectedKiller.name }}</h1>
    <h2 class="killerRealName">{{ selectedKiller.realName }}</h2>
    <h3 class="killerDLC">{{ selectedKiller.dlc }}</h3>
    <br />
    <div class="killerButton">
      <img
        src="/../assets/icons/killer-icon.png"
        alt="Click here for a random Killer!"
        @click="rndKiller"
        class="randomKillerButton"
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
@media (min-width: 320px) and (max-width: 999px) {
  .header {
    font-size: 1.5rem;
  }

  .questionMark,
  .randomSelectedKiller {
    height: 15.2rem;
  }

  .killerName,
  .killerRealName {
    font-size: 1.2rem;
  }

  .randomKillerButton {
    width: 5.5rem !important;
    height: 5.5rem !important;
  }
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  font-style: normal;
  line-height: 1.5rem;
  margin: 0 0 0.625rem 0;
  text-align: center;
  text-transform: uppercase;
  color: #cccccc;
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

.killers {
  margin-top: 1.2rem;
}

.killerButton {
  cursor: pointer;
}

.killerButton:active {
  transform: translateY(0.25rem);
}

.randomKillerButton {
  width: 7.5rem;
  height: 7.5rem;
}
</style>
