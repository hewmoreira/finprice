<template>
  <div id="seeMore">
    <h2>Veja mais posts em:</h2>
    <p>
      <a href="/o-que-e-cei" target="_top">O que é CEI?</a><br />
      <a
        href="/benchmark-saiba-quais-sao-os-indices-de-referencias"
        target="_top"
        >Benchmark: Saiba quais são os índices de referências</a
      ><br />
      <a href="/o-que-sao-etfs" target="_top">O que são ETFs?</a><br />
    </p>
  </div>
</template>

<script>
export default {
  name: "SeeMore",
};
</script>

<style scoped>
h1 {
  font-size: 45px;
  color: var(--color-black2);
}

h2 {
  font-size: 25px;
  color: var(--color-black2);
}

h3 {
  font-size: 20px;
  color: var(--color-black2);
}

p,
ul {
  text-align: justify;
  color: var(--color-black2);
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
  #textPolicy {
    margin-top: 30px;
    width: auto;
    padding: 15px;
  }

  h1 {
    font-size: 25px;
  }

  h2 {
    font-size: 18px;
  }

  h3 {
    font-size: 15px;
  }
}
</style>