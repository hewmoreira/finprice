<template>
  <div id="app">
    <Header />
    <PrecoMedio />
    <Footer />
  </div>
</template>

<script>
import "./styles/global.css";
import Header from "./components/header.vue";
import PrecoMedio from "./pages/precoMedio/PrecoMedio.vue";
import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    PrecoMedio,
    Footer
  }
}
</script>

<style>
</style>
