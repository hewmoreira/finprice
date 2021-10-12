<template>
  <header>
    <nav class="container">
      <a id="link-menu"
        ><img
          src="../assets/menu.svg"
          alt="menu"
          id="menu-button"
          @click="menuActive = !menuActive"
      /></a>

      <div id="menu-items" :class="{ active: menuActive }">
        <a href="/" id="menu-logo">FinCa1c</a>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>

      <a href="/" id="logo">FinCa1c</a>

      <span id="blank"></span>

      <div
        id="menu-overlay"
        v-if="menuActive"
        @click="menuActive = !menuActive"
      ></div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      menuActive: false,
    };
  },
};
</script>

<style scoped>
header {
  background-color: var(--color-black1);
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
}

#logo {
  color: rgb(238, 231, 231);
  font-weight: 500;
  font-size: 28px;
}

#menu-button {
  width: 22px;
  margin-top: 7px;
}

#menu-overlay {
  position: fixed;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  background-color: #000000;
  opacity: 0.8;
}

#menu-logo {
  width: 110px;
  margin-top: 30px;
  margin-bottom: 10px;
  color: rgb(238, 231, 231);
  font-weight: 500;
  font-size: 28px;
}

#menu-items {
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--color-black1);
  width: 60%;
  height: 100vh;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

#menu-items.active {
  display: flex;
}

ul {
  list-style: none;
  text-align: center;
}

ul li {
  margin: 20px 0px;
}

ul li a {
  color: var(--color-white1);
}

@media screen and (min-width: 700px) {
  #menu-button,
  #menu-logo,
  #blank,
  #link-menu,
  #menu-overlay {
    display: none;
  }

  #logo {
    position: static;
    margin-right: 50%;
  }

  #menu-items {
    display: flex;
    position: static;
    height: 60px;
    width: auto;
  }

  ul {
    display: flex;
    height: 60px;
    align-items: center;
  }

  ul li {
    margin: 0;
    margin-left: 20px;
  }
}
</style>