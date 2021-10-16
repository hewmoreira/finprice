<template>
  <header>
    <nav id="navDiv">
      <div class="logo">
        <router-link to="/">FinPrice</router-link>
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

.logo {
  width: auto;
  height: 60px;
  display: flex;
  align-items: center;
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