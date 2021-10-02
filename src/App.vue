<template>
  <div class="app">
    <Sidebar/>
    <div class="main"></div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"
import Sidebar from "./components/sidebar.vue"


export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style>
  .app{
    display: flex;
  }
  .main{
    width: 100%;
    height: 100vh;

    background-color: #f7f7f7;
  }
</style>
