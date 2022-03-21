<template>
  <h1>404</h1>
  <h2>Page Not Found</h2>
  <p class="entityText">
    The page you tried to access has been sacrificed to the Entity.
  </p>
  <div class="returnHome">
    <a
      ><router-link to="/"
        ><img
          src="/assets/icons/offering-icon.png"
          alt="Return Home Button"
          class="homeButton" /></router-link
    ></a>
    <p>Return to the campfire</p>
  </div>
</template>

<style scoped>
h1 {
  font-size: 13.125rem;
  line-height: 11.875rem;
  margin: 6.25rem 0 0;
  text-align: center;
}

h2 {
  font-size: 2.75rem;
  line-height: 2.375rem;
  text-align: center;
}

p.entityText {
  font-size: 1.75rem;
  text-align: center;
  margin-top: 6.25rem;
}

a {
  text-align: center;
  text-decoration: none;
  line-height: 1.875rem;
}

.returnHome {
  cursor: pointer;
}

.returnHome:active {
  transform: translateY(0.25rem);
}

.homeButton {
  width: 7.8125rem;
  height: 7.8125rem;
}
</style>
