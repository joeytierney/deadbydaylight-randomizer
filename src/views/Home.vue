<template>
  <div class="home">
    <br />
    <h2 class="sidebar-title">About</h2>
    <h3 class="sidebar-title">This website</h3>
    <p class="sidebar-text">
      <span
        >Tired of playing as the same character? Do you already have all perks
        unlocked? Do you need a new challenge? Want to try some perks you never
        used before?</span
      ><span class="white"> Then is this the website you searched for.</span>
    </p>
    <br />
    <p class="sidebar-text">
      <span
        >This site randomly selects your Killer, Survivor, and four Killer or
        Survivor Perks for you to play with in a game of Dead by Daylight.</span
      >
    </p>
    <br />
    <h3 class="sidebar-title">The game</h3>
    <p class="sidebar-text">
      <span
        ><a
          class="link"
          href="https://deadbydaylight.com"
          target="_blank"
          title="https://deadbydaylight.com"
          rel="noreferrer"
          >Dead by Daylight</a
        >
        is an asymmetrical multiplayer (4vs1) horror game where one player takes
        on the role of the savage Killer, and the other four players play as
        Survivors, trying to escape the Killer and avoid being caught and
        killed.</span
      >
    </p>
    <br />
    <div class="sidebar-column" id="c2">
      <h2 class="sidebar-title">Disclaimer</h2>
      <p class="sidebar-text white">
        <span
          >This site is not associated with, endorsed by, or in any other form
          connected with any company.</span
        >
      </p>

      <p class="sidebar-text">
        <span
          >DEAD BY DAYLIGHT® is a registered trademark of Behaviour Interactive
          Inc. in Canada, the United States of America and/or other
          countries.</span
        >
      </p>

      <p class="sidebar-text">
        <span
          >Use at your own risk. This site runs in your browser, no data is
          saved on the server.</span
        >
      </p>
      <br />
      <h3 class="sidebar-title">Image and music credit</h3>
      <p class="sidebar-text">
        <span
          >The character portraits, perk icons and menu music are game related
          content and therefore property of
          <a
            class="link"
            href="https://www.bhvr.com/"
            target="_blank"
            title="https://www.bhvr.com/"
            rel="noreferrer"
            >Behaviour</a
          >
          and were taken from the official
          <a
            class="link"
            href="https://deadbydaylight.gamepedia.com/Dead_by_Daylight_Wiki"
            target="_blank"
            title="https://deadbydaylight.gamepedia.com/Dead_by_Daylight_Wiki"
            rel="noreferrer"
            >Dead by Daylight wiki</a
          >.</span
        >
      </p>
      <br />
      <p class="sidebar-text">
        <span>All other images were created by the author.</span>
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  outline: none;
}

.home {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  color: #fff;
}

h1 {
  font-size: 50px;
  font-weight: bold;
  font-style: normal;
  line-height: 50px;
  margin: 0 0 15px 0;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  font-style: normal;
  line-height: 24px;
  margin: 0 0 10px 0;
  text-align: center;
  text-transform: uppercase;
  color: #aa0101;
}

h3 {
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  line-height: 14px;
  margin: 0 0 10px 0;
  text-align: center;
  text-transform: uppercase;
  color: #cccccc;
}

p {
  margin: unset;
  display: block;
  color: white;
}

p.site-paragraph {
  line-height: 1.5;
  font-size: 18px;
  margin-bottom: 15px;
}

a.link {
  color: #fff;
  border-bottom: 2px solid rgba(255, 255, 255, 0.25);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.1s ease-in-out;
}

a.link:hover {
  color: #aaa;
}
</style>
