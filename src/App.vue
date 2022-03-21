<template>
  <div id="app">
    <NavBar />
  </div>
  <router-view />
  <iframe
    width="0"
    height="0"
    src="https://www.youtube.com/embed/videoseries?list=PL9x2RG0HXH1t9UbtXBvTkHU1b50q3vgid&autoplay=1&loop=1"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  >
  </iframe>
  <Footer />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Roboto", sans-serif;
  background-image: url(/assets/background/dbd-fog-background.jpg);
  background-size: fill;
  background-repeat: no-repeat;
}

header {
  width: 100%;
  background-color: rgb(88, 82, 82);
  padding: 1.5625rem;
}

footer {
  padding: 0.125rem 2.5rem;
  position: fixed;
  width: 100%;
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
