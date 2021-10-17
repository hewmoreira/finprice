<template>
  <footer>
    <div id="end">
      <div class="logo-div">
      <router-link to="/">
        <img id="logo-rodape" :src="logo.yellowwhite" alt="Finprice" />
      </router-link>
      </div>
      <div class="links">
        <router-link to="Policy"> Política de Privacidade </router-link>
      </div>

      <div class="contato">
        <a href="https://github.com/hewmoreira" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a href="https://gitlab.com/hewmoreira" target="_blank">
          <font-awesome-icon :icon="['fab', 'gitlab']" />
        </a>
        <a href="https://twitter.com/hewmoreira" target="_blank">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
        <a href="mailto:hewerton@finprice.com.br">
          <font-awesome-icon icon="envelope" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
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

<style scoped>
footer {
  width: 100%;
  height: 60px;
  background-color: var(--color-black1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#end {
  font-size: 15px;
  width: 100%;
  margin-left: 25%;
  margin-right: 25%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--color-white1);
}

.logo-div {
  width: auto;
  height: 60px;
  display: flex;
  align-items: center;
}

#logo-rodape{
  width: 80px;
  transition: 2s;
  display: flex;
}

.contato {
  font-size: 20px;
  width: 110px;
  display: flex;
  justify-content: space-between;
}

.links {
  text-decoration: none;
  /* color: white; */
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