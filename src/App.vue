<template>
  <div id="app">
    <Header />
    <PrecoMedio />
  </div>
</template>

<script>
import "./styles/global.css";
import Header from "./components/header.vue";
import PrecoMedio from "./pages/PrecoMedio.vue";


export default {
  name: 'App',
  components: {
    Header,
    PrecoMedio
  }
}
</script>

<style>
</style>
