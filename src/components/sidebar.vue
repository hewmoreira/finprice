<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
    <a
      href="/"
      class="
        d-flex
        align-items-center
        mb-3 mb-md-0
        me-md-auto
        text-white text-decoration-none
      "
    >
      <span class="fs-4">FinCalc</span>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <!-- <svg class="bi me-2" width="16" height="16">
          <use xlink:href="#precomedio"></use>
        </svg> -->
        <a href="#" class="nav-link active" aria-current="page">
          Preço Médio
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style>
.d-flex.flex-column.flex-shrink-0.p-3.text-white.bg-dark {
  width: 200px;
  height: 100vh;
}

.nav-link {
  text-align: center;
}
</style>