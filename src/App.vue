<template>
  <div>
    <Sidebar/>
    <div class="text-center">
      <h1> FinCalc</h1>
    </div>
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

</style>
