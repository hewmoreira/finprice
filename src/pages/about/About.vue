<template>
  <div id="about">
    <div id="conteudo">
      <h1>Sobre</h1>
      <p>
        O FinCalc é uma webpage com o intuito de auxiliar investidores pessoa
        física a resolverem problemas de maneira descomplicada, com o uso de
        ferramentas simples e conteúdos que auxiliem na tomada de decisão e
        acompanhamento do mercado financeiro.<br><br><br>

      </p>
      <h6>
        Este site foi totalmente desenvolvido por <b>Hewerton Moreira</b>.

      </h6>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
#about {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-background-home);
  width: 100%;
  height: calc(100vh - 120px);
}

#conteudo {
    margin-top: 100px;
    width: 450px;
}

h1{
    font-size: 45px;
    color: var(--color-black2);
}

p{
    text-align: justify;
    color: var(--color-black2);
}

h6{
    font-size: 15px;
}

</style>