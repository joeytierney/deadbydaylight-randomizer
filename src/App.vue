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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  margin: 0;
  padding: 0;
  background: #1b1b1b;
  font-family: "Roboto", sans-serif;
  color: #fff;
  background-image: url(/assets/background/dbd-fog-background.jpg);
  background-size: fill;
  background-repeat: no-repeat;
}
header {
  width: 100vw;
  background-color: rgb(88, 82, 82);
  padding: 25px;
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
