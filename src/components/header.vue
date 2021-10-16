<template>
  <header>
    <nav id="nav">
      <div class="logo">
        <router-link to="/">FinCalc</router-link>
      </div>
      <div class="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
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

#nav {
  /* background-color: chocolate; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  height: 60px;
}

.logo {
  /* background-color: cornsilk; */
  width: auto;
  height: 60px;
  display: flex;
  align-items: center;
}

.menu {
  /* background-color: darkgoldenrod; */
  min-width: 100px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

a:-webkit-any-link {
    color: var(--color-white1);
    cursor: pointer;
    text-decoration: none;
}

a:hover{
    transition: 0.5s;
    color: var(--color-yellow1);
}

</style>