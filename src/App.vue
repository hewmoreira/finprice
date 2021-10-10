<template>
  <div id="app">
    <Header />
    <Home />
  </div>
</template>

<script>
import "./styles/global.css";
import Header from "./components/header.vue";
import Home from "./pages/home.vue";


export default {
  name: 'App',
  components: {
    Header,
    Home
  }
}
</script>

<style>
</style>
