<template>
  <div id="post">
    <div id="conteudoPost">
      <h1>O que são ETFs?</h1>
      <p>
        Os ETFs são fundos de investimentos negociados em bolsa que replicam o
        desempenho de um índice de referência. Uma alternativa simples e
        acessível para facilitar o acesso de qualquer investidor no mercado de
        Ações, Renda Fixa, Ouro (e outros metais) e criptomoedas.
      </p>
      <h2>Entenda como você pode investir</h2>
      <p>
        Os ETFs permitem que você invista sem precisar acompanhar o desempenho
        das empresas e seus títulos. A compra funciona como a de outras ações,
        onde você adquire a cesta de ativos que mais lhe agrada, sendo uma ótima
        alternativa para diversificar investindo pouco dinheiro. Se você está
        começando a investir na bolsa ou nunca teve essa experiência, essa é uma
        forma vantajosa de iniciar.
      </p>
      <h2>Vantagens de ter ETF em sua carteira</h2>
      <p>
        Um ETF tem algumas características dos fundos de investimentos e outras
        dos ativos negociados na bolsa de valores. Ele proporciona algumas
        vantagens em relação a outras opções do mercado, que você pode conferir
        abaixo:
      </p>
      <p>
        <b>Simplicidade na negociação</b> – Comprar e vender ETFs é tão simples
        quanto negociar uma ação individual na bolsa de valores. Paga-se uma
        taxa de corretagem em cada operação e acompanham-se as cotações por meio
        dos dados divulgados diariamente pela B3. O desempenho do ETF reflete a
        média da performance de todas as ações ou outros papéis incluídos nele,
        o que é uma mão na roda para quem não dispõe de muito tempo para montar
        e monitorar uma carteira de ações.
      </p>
      <p>
        <b>Diversificação dos investimentos</b> – Um ETF oferece aos
        investidores a possibilidade de aplicar em muitos ativos de uma vez só,
        comprando apenas as cotas do fundo. Desta forma, o risco da carteira
        pode ser diluído mesmo que o recurso disponível para o investimento seja
        pequeno. É muito mais difícil e caro montar um portfólio diversificado e
        equilibrado ação por ação, do que fazer isso por meio das cotas de
        apenas um ETF.
      </p>
      <p>
        <b>Facilidade de balanceamento</b> – Os índices de referência do mercado
        costumam ter a sua composição atualizada periodicamente. Quem quer
        manter uma carteira aderente a esses indicadores, precisa ajustar a
        participação de cada carteira conforme essas atualizações são
        realizadas. Já quem investe em ETFs não precisa se preocupar com isso.
        Os gestores fazem os ajustes necessários na carteira sempre que a
        composição dos índices de referência dos fundos é alterada. Os cotistas
        não precisam fazer nada para que isso aconteça.
      </p>
      <h2>Quais são os principais ETFs do mercado?</h2>
      <p>
        Como você viu, o Índice Ibovespa é um dos principais benchmarks do
        mercado de ações. É por isso que existem ETFs na bolsa brasileira que
        objetivam acompanhá-lo. É o caso do BOVA11. <br /><br />
        Quem adquire cotas desse fundo de índice está buscando acompanhar os
        resultados da média do mercado de ações. Afinal, o ETF investe nas
        empresas mais negociadas na bolsa brasileira — com peso definido pelos
        critérios do índice. <br /><br />
        E quem desejar investir de formas diferentes? Existem outras
        possibilidades. Por exemplo, ETFs que acompanham o IFIX: o índice de
        Fundos Imobiliários. Além disso, existem ETFs focados em determinado
        grupo de empresas (como as small caps). <br /><br />
        Também é possível encontrar ETFs temáticos. Um exemplo é um fundo de
        índice que acompanhe um indicador ESG (focado em empresas que tenham
        responsabilidade socioambiental). Há, ainda, aqueles que replicam
        índices do exterior. <br /><br />
        Quem deseja expor sua carteira a mercados internacionais sem sair da B3,
        por exemplo, pode fazer isso por meio de ETFs. Uma possibilidade é
        investir em fundos de índice que acompanham o S&P 500, um dos principais
        benchmarks das bolsas de valores norte-americanas. <br /><br />
        Mesmo sendo mais comum quando se fala em renda variável, também existem
        possibilidades de ETF de renda fixa. Por exemplo, os que replicam o
        índice IMA-B (Índice de Mercado Anbima). O indicador acompanha a curva
        de juros nos títulos públicos, replicando o Tesouro IPCA+. <br /><br />
        Quanto ao ETF de renda fixa, é preciso ficar atento ao fato de que ele
        não será tão seguro e estável quanto os títulos. Ele apresenta maior
        exposição à volatilidade da marcação a mercado. Além disso, os preços
        das cotas também oscilam na bolsa.
      </p>

      <SeeMore />
    </div>
  </div>
</template>

<script>
import SeeMore from './seeMore.vue'

export default {
  name: "About_ETF",
  components: {
      SeeMore
  }
};
</script>

<style scoped>
#post {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-background-home);
  min-height: calc(100vh - 120px);
}

#conteudoPost {
  margin-top: 100px;
  width: 600px;
  padding: 20px;
}

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
  color: var(--color-orange1);
  cursor: pointer;
  text-decoration: none;
}

a:hover {
  transition: 0.5s;
  color: var(--color-yellow1);
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