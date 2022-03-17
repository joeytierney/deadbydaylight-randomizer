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
  margin-bottom: 100px;
  padding: 0;
  font-family: "Roboto", sans-serif;
  background-image: url(/assets/background/dbd-fog-background.jpg);
  background-size: fill;
  background-repeat: no-repeat;
}

header {
  width: 100vw;
  background-color: rgb(88, 82, 82);
  padding: 25px;
}

footer {
  display: flex;
  padding: 2px 500px;
  background: #010101;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 1;
}

footer .footer-text,
footer .footer-links {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
}

footer .footer-text {
  margin: 10px auto 10px 0;
}

footer .footer-links {
  margin: 10px 0 10px auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #202427;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  background-color: #0d0d0e;
  border-bottom-color: #bb3030;
}
</style>
