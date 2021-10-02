<template>
  <header>
      <nav class="container">
          <a href="/" id="logo">FinCa!c</a>
          <i class="fas fa-ellipsis-h"></i>
      </nav>
  </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>

    header{
        background-color: var(--color-background-nav);
        height: 60px;
        width: 100%;
    }

    #logo{
        color: rgb(238, 231, 231);
        font-weight: 500;
        font-size: 28px;
    }

    #nav {
        display: flex;
    }

    .fas.fa-bars{
        width: 300px;
    }

</style>