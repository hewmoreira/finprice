<template>
  <header>
    <nav class="container">
      <a href="/"
        ><img src="../assets/menu.svg" alt="menu" id="menu-button"
      /></a>
      <a href="/" id="logo">FinCa1c</a>
      <span></span>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  background-color: var(--color-background-nav);
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav {
  display: flex;
  justify-content: space-between;
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
</style>