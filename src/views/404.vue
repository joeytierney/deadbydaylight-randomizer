<template>
  <h1>404</h1>
  <h2>Page Not Found</h2>
  <p class="entityText">
    The link you tried to access has been sacrificed to the Entity.
  </p>
  <div class="returnHome">
    <a
      ><router-link to="/"
        ><img
          src="/assets/icons/offering-icon.png"
          alt="Return Home Button"
          width="125" /></router-link
    ></a>
    <p>Return to the campfire</p>
  </div>
</template>

<style scoped>
h1 {
  font-size: 210px;
  line-height: 190px;
  margin: 100px 0 0;
  text-align: center;
}

h2 {
  font-size: 44px;
  line-height: 38px;
  text-align: center;
}

p.entityText {
  font-size: 28px;
  text-align: center;
  margin-top: 100px;
}

a {
  text-align: center;
  text-decoration: none;
  line-height: 30px;
}

.returnHome {
  cursor: pointer;
}

.returnHome:active {
  transform: translateY(4px);
}
</style>
