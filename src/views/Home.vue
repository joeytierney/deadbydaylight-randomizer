<template>
  <br />
  <img
    src="/../assets/icons/Logo_dbd.png"
    alt="Dead by Daylight logo"
    class="homeLogo"
  />
  <div class="home">
    <h1 class="header">Randomizer</h1>
    <br />
    <br />
    <img
      src="https://raw.githubusercontent.com/joeytierney/deadbydaylight-randomizer/main/dist/assets/character-backgrounds/meg.png"
      alt="Meg Thomas background"
      class="survBg"
    />
    <div class="survivorsPerk">
      <h1 class="survHeader">Survivors</h1>
      <h2 class="subSurvHeader">Random Survivor Perks</h2>
      <router-link to="/perks/survivor-perks"
        ><img
          src="/../assets/icons/survivor-icon.png"
          alt="Random Survivor Perk button"
          class="toRndPerkButton"
      /></router-link>
    </div>
    <img
      src="/../assets/character-backgrounds/trapper.png"
      alt="The Trapper background"
      class="killerBg"
    />
    <div class="killersPerk">
      <h1 class="killerHeader">Killers</h1>
      <h2 class="subKillerHeader">Random Killer Perks</h2>
      <router-link to="/perks/killer-perks"
        ><img
          src="/../assets/icons/killer-icon.png"
          alt="Random Killer Perk button"
          class="toRndPerkButton"
      /></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
@media (min-width: 320px) and (max-width: 999px) {
  .homeLogo {
    max-height: 100%;
    max-width: 100%;
  }

  .header {
    max-width: 100%;
    font-size: 2.125rem;
  }

  .survHeader,
  .killerHeader {
    font-size: 1.5rem;
  }

  .subSurvHeader,
  .subKillerHeader {
    font-size: 1rem;
  }

  .survivorsPerk {
    float: left;
    width: 50%;
  }

  .killersPerk {
    float: right;
    width: 50%;
  }

  .survBg,
  .killerBg {
    display: none;
  }

  footer .footer-text,
  footer .footer-links {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.6rem;
  }
}

.home {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  color: #fff;
}

.homeLogo {
  margin-top: 1.2rem;
}

.survivorsPerk {
  float: left;
  width: 50%;
}

.survBg {
  position: absolute;
  left: 5%;
  opacity: 50%;
  height: 36rem;
}

.killersPerk {
  float: right;
  width: 50%;
}

.killerBg {
  position: absolute;
  right: 1%;
  opacity: 50%;
  height: 36rem;
}

.toRndPerkButton {
  cursor: pointer;
}

.toRndPerkButton:active {
  transform: translateY(0.25rem);
}
</style>
