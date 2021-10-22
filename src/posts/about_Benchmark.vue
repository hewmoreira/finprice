<template>
  <div id="post">
      <div id="conteudoPost">
          <h1>Benchmark: Saiba quais são os índices de referências</h1>
          <h2>O que é um Benchmark?</h2>
          <p>
              A palavra benchmark tem origem inglesa e pode ser determinada como um processo de comparação entre produtos, serviços ou mesmo práticas empresariais, sendo um importante instrumento de gestão. No caso de investimentos, seria um comparativo entre diferentes fundos de ativos. <br><br>
              O benchmark é um índice utilizado para avaliar o desempenho de um ativo. Ou seja, ajuda a visualizar a sua rentabilidade a partir de uma referência. Desse modo, torna-se um fator importante na hora da escolha dos investimentos. <br><br>
              O conceito tem grande relevância nos fundos de investimento, quando o gestor procura obter retornos que superem um determinado benchmark. Aliás, quando isso acontece, é comum que se cobre, inclusive, uma taxa de performance. <br><br>
              Além de fundos, você também pode utilizar índices de referência para avaliar diversas escolhas na sua carteira. É importante saber que há diferentes benchmarks no mercado, sendo que cada um é direcionado para um conjunto diferente de produtos e ativos. <br><br>
          </p>
          <h2>Quais são os principais índices de referência do mercado?</h2>
          <p>
              Como visto, os benchmarks servem como parâmetro para medir a “qualificação” de um investimento. Existem alguns índices que são usados com mais frequência, e a seguir você conhecerá quais são eles e as suas respectivas especificidades! 
          </p>
          <h3>CDI</h3>
          <p>
              O CDI, ou Certificados de Depósito Interbancário, é considerado um benchmark de renda, considerado a principal referência quando se trata de investimentos mais conservadores. A sua base está na média de empréstimos negociados entre bancos. Diariamente, tal taxa varia, pois ela segue os empréstimos negociados pelas instituições financeiras. <br>br
              Há investimentos que pagam um percentual do CDI (maior ou menor que 100%), outros se propõem a acompanhá-lo de maneira próxima e ainda existem aqueles que têm a proposta de superá-lo. Alguns títulos, como CDB, LCI e LCA, têm a sua remuneração expressa de acordo com o CDI. <br><br>
          </p>
          <h3>SELIC</h3>
          <p>
              A Selic é uma taxa básica de juros da economia, sendo um dos principais elementos políticos usados para controlar a inflação. Ela influencia diretamente as taxas de juros do país em diversas frentes, desde empréstimos até aplicações financeiras. <br><br>
              A Selic é calculada a partir da apuração dos processos operacionais de empréstimos em um dia entre os bancos que utilizam os títulos públicos federais como garantia. Vale lembrar que a taxa Selic e o CDI têm valores bem próximos.
          </p>
          <h3>IPCA</h3>
          <p>
              O IPCA é o Índice de Preços ao Consumidor Amplo, sendo o principal indicador da inflação. Dessa maneira, também é um benchmark importante. Em especial, para indicar a rentabilidade real e mostrar se você está perdendo poder de compra com determinado investimento — seja de renda fixa ou variável.
          </p>
          <h3>Ibovespa</h3>
          <p>
              O índice de referência de maior destaque na bolsa de valores é o Ibovespa ou IBOV. Trata-se de uma carteira teórica que reúne as companhias com maior volume financeiro e liquidez da B3. É preciso seguir critérios específicos para compor o índice, como ter 95% de presença nos pregões. <br><br>
              Por sua relevância, o IBOV serve como termômetro da bolsa brasileira. Assim, os investidores consideram o benchmark para avaliar o desempenho da economia e do seu portfólio de ações — ou na hora de negociar os papéis. <br><br>
              Índice setoriais da bolsa <br><br>
              Além do Ibovespa, existem outros índices de ações na B3. Eles são indicadores com uma carteira teórica que considera aspectos variados, como segmento da empresa, valor de mercado da companhia, entre outros. <br><br>
              Alguns deles são: <br><br>
              <ul>
                  <li>Índice Small Cap (SMLL) — é formado pelas ações das empresas de menor valor de mercado da bolsa;</li>
                  <li>Índice Brasil 50 (IBrX50) — agrupa as 50 ações com maior volume de negociação na bolsa;</li>
                  <li>Índice Brasil 100 (IBrX100) — agrupa as 100 ações mais negociadas da B3.</li>
              </ul>
          </p>
          <h3>Taxa de câmbio</h3>
          <p>
              Quem faz investimento em moedas estrangeiras, como fundos cambiais, precisa ter atenção às taxas de câmbio. Logo, elas servem como um benchmark importante nesse cenário.
          </p>
          <h2>Qual a relação entre índice de referência e ETFs?</h2>
          <p>
              Depois de conhecer os principais benchmarks do mercado, tanto de renda fixa como variável, é interessante saber a relação desses índices com os ETFs (exchange traded funds). Eles são fundos negociados na bolsa de valores, chamados também de fundo de índice. <br><br>
              O nome se deve ao fato de que eles estão atrelados a um benchmark. O objetivo do ETF é exatamente replicar a carteira teórica de um índice do mercado. Assim, são uma forma de fazer investimento indiretamente em determinado indicador. <br><br>
              Os ETFs podem estar atrelados a benchmarks nacionais — como o IBOV — ou internacionais, como o S&P 500 (que representa ações dos Estados Unidos). Ao investir neles, é possível se expor a uma carteira diversificada de maneira passiva. <br><br>
                Como você viu, o benchmark é um índice de referência importante para o investidor avaliar as alternativas do mercado. Ele pode ser utilizado para analisar fundos e ativos, considerando o melhor indicador de acordo com cada alternativa da sua carteira e com seus objetivos.
          </p>

          <SeeMore />
      </div>
  </div>
</template>

<script>
import SeeMore from './seeMore.vue'
export default {
  name: "About_Benchmark",
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