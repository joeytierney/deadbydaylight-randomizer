<template>
  <div id="app">
    <NavBar />
  </div>
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

@media (min-width: 320px) and (max-width: 999px) {
  body {
    height: 100vh;
  }

  footer {
    visibility: hidden;
    display: none;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  width: 100%;
  background-color: rgb(88, 82, 82);
  padding: 1.5625rem;
}

body {
  margin: 0;
  padding-bottom: 3.75rem;
  font-family: "Roboto", sans-serif;
  background-image: url(https://raw.githubusercontent.com/joeytierney/deadbydaylight-randomizer/main/public/assets/background/dbd-fog-background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

h1 {
  font-size: 3.125rem;
  font-weight: bold;
  font-style: normal;
  line-height: 3.125rem;
  margin: 0 0 0.9375rem 0;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  font-style: normal;
  line-height: 1.5rem;
  margin: 0 0 0.625rem 0;
  text-align: center;
  text-transform: uppercase;
  color: #aa0101;
}

h3 {
  font-size: 0.875rem;
  font-weight: bold;
  font-style: normal;
  line-height: 0.875rem;
  margin: 0 0 0.625rem 0;
  text-align: center;
  text-transform: uppercase;
  color: #cccccc;
}

p {
  margin: unset;
  display: block;
  color: white;
}

a.link {
  color: #fff;
  border-bottom: 0.125rem solid rgba(255, 255, 255, 0.25);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.1s ease-in-out;
}

a.link:hover {
  color: #aaa;
}

footer {
  padding: 0.125rem 2.5rem;
  position: absolute;
  width: 100%;
  height: 3.75rem;
  bottom: 0;
}

footer .footer-text,
footer .footer-links {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.775rem;
}

footer .footer-links {
  margin: 0.625rem 0 0.625rem auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #202427;
}
</style>
