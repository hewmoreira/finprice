<template>
  <div id="app">
    <CookiesMessage />
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import "./styles/global.css";
import Header from "./components/header.vue";
import Footer from './components/footer.vue';
import CookiesMessage from './components/cookies.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    CookiesMessage
  }
}
</script>

<style>
</style>
