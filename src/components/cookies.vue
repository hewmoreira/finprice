<template>
  <div id="cookie" v-if="isOpen">
    <div class="cookieMessage">
      Usamos cookies e tecnologias semelhantes de acordo com a nossa
      <a href="/policy"><b>Política de Privacidade</b></a>. Ao continuar navegando,
      você concorda com essas condições.
    </div>
    <button class="btn btn-primary" @click="acceptGDPR">
      {{ cookieButtonTextAgree }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    cookieButtonTextAgree: {
      type: String,
      default: "Ok",
    },
    cookieButtonTextDeny: {
      type: String,
      default: "Recusar",
    },
    cookieMessage: {
      type: String,
      default:
        "Usamos cookies e tecnologias semelhantes de acordo com a nossa Política de Privacidade. Ao continuar navegando, você concorda com essas condições.",
    },
    cookiePosition: {
      type: String,
      default: "bottom",
    },
    cookieButtonClass: {
      type: String,
      default: "cookie-message__button",
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    containerPosition() {
      return `cookie-message__${this.cookiePosition}`;
    },
  },
  created() {
    if (!this.getAcceptStatus() === true) {
      this.isOpen = true;
    }
  },
  methods: {
    setAccept() {
      localStorage.setItem("gdpr:cookie", true);
    },
    setDeny() {
      localStorage.setItem("gdpr:cookie", false);
    },
    getAcceptStatus() {
      return localStorage.getItem("gdpr:cookie");
    },
    acceptGDPR() {
      this.setAccept();
      this.isOpen = false;
      this.$emit("aceptar");
    },
    denyGDPR() {
      this.setDeny();
      this.isOpen = false;
      this.$emit("rechazar");
    },
  },
};
</script>

<style scoped>
#cookie {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vh;
  height: 32px;
  font-size: 12px;
  margin-left: 25%;
  margin-right: 25%;
}

.btn {
  font-size: 12px;
  font-weight: bold;
  padding: 5px 10px 5px 10px;
  background-color: var(--color-white1);
  color: var(--color-black2);
  border-color: var(--color-black1);
}

.btn:hover {
  transition: 0.5s;
  background-color: var(--color-yellow1);
}

a {
  color: var(--color-yellow1);
}

a:-webkit-any-link {
  color: var(--color-yellow1);
  cursor: pointer;
  text-decoration: none;
}

a:hover {
  transition: 0.5s;
  color: var(--color-orange1);
}

@media (max-width: 800px) {
  #cookie {
    width: auto;
    height: auto;
    padding: 2px;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 10px;
  }
}
</style>