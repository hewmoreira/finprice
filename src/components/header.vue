<template>
  <header>
    <nav id="navDiv">
      <div class="logo-div">
        <router-link to="/">
          <img id="logo-white" :src="logo.yellowwhite" alt="Finprice">
        </router-link>
      </div>
      <div class="menu">
        <ul class="nav nav-pills">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-expanded="false"
              >Calculadora&nbsp;</a
            >
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/"
                  >Preço Médio</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="about">Sobre</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      logo: {
        hover: false,
        white: require('@/assets/logo-white.png'),
        yellow: require('@/assets/logo-yellow.png'),
        yellowwhite: require('@/assets/logo-yellow-and-white.png'),
      }
    }
  }
};
</script>

<style>
header {
  background-color: var(--color-black1);
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#navDiv {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  height: 60px;
}

.logo-div {
  width: auto;
  height: 60px;
  display: flex;
  align-items: center;
}

#logo-white{
  width: 115px;
  transition: 2s;
  display: flex;
}

.menu {
  min-width: 100px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dropdown-menu {
  background-color: var(--color-black1);
}

.dropdown-item:hover {
  color: var(--color-yellow1);
  background-color: var(--color-black1);
}

.nav-link:focus,
.nav-link:hover {
  color: var(--color-yellow1);
}

a:-webkit-any-link {
  color: var(--color-white1);
  cursor: pointer;
  text-decoration: none;
}

a:hover {
  transition: 0.5s;
  color: var(--color-yellow1);
}
</style>