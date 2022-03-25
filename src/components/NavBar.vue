<template>
  <div id="nav">
    <nav class="container navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="/"
        ><img
          src="https://raw.githubusercontent.com/joeytierney/deadbydaylight-randomizer/main/public/assets/icons/dbd-logo.png"
          width="40"
          height="40"
          alt="Dead by Daylight logo"
      /></a>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav mr-auto">
          <router-link to="/" class="nav-item nav-link">Home</router-link>
          <router-link to="/about" class="nav-item nav-link">About</router-link>
          <router-link to="/survivors" class="nav-item nav-link"
            >Survivors</router-link
          >
          <router-link to="/killers" class="nav-link">Killers</router-link>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Perks
            </a>
            <div class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
              <router-link
                to="/perks/survivor-perks"
                class="dropdown-item bg-dark"
                >Survivor Perks</router-link
              >
              <router-link
                to="/perks/killer-perks"
                class="dropdown-item bg-dark"
                >Killer Perks</router-link
              >
            </div>
          </li>
        </div>
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </div>
</template>

<style>
#nav {
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #cccccc;
}

#nav a.router-link-exact-active {
  color: #cccccc;
  border-bottom: 0.125rem solid rgba(170, 1, 1, 1);
  text-decoration: none;
  cursor: pointer;
  transition: color 0.1s ease-in-out;
}

#nav a:hover {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.1s ease-in-out;
}
</style>
