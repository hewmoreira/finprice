<template>
  <div id="descricaoPrecoMedio">
    <div class="textoInformativo">
      <h1>O que é preço médio?</h1>
      <p>
        O preço médio (PM) é um cálculo de ponderação sobre a média de preço que
        você pagou pelas ações em diferentes situações.
      </p>
      <h3>E para que serve?</h3>
      <p>
        É comum o uso entre investidores com estratégia de longo prazo, com
        hábito de aportar todos os meses na mesma ação, utilizem desse cálculo
        para identificar a média do preço pago em todas essas ações.
        <br /><br />
        O objetivo é identificar os valores pagos na soma de todas as ações.
      </p>
      <h3>Um pequeno exemplo</h3>
      <p>
        Vamos supor que você tenha feito um primeiro aporte no mês passado de
        <b>WEGE3</b> em 800 cotas ao preço de R$ 39,90, depois um segundo aporte
        na semana passada de 400 cotas ao preço R$ 38,72, e hoje você fez um
        último aporte de 1300 cotas ao preço de R$ 40,12. Aplicando a fórmula de
        preço médio, calculamos da seguinte forma: <br /><br />
        <b> Preço Médio = [(C1. P1)+(C2. P2)+ (Cn.Pn)] / TC <br /> </b>
        <br />
        Onde: <br /><br />

        C = Cotas <br />
        P = Preço <br />
        TC = Total de Cotas <br /><br />
        ((Cota1 * Preço1) + (Cota2 * Preço2) + (Cota3 * Preço3)) / Total de
        Cotas <br /><br />
        ((800 * 39,90) + (400 * 38,72) + (1300 * 40,12)) / 2500 = Preço Médio de
        R$ 39,82 <br /><br />
        Viu como é simples de efetuar o cálculo? Mas você não precisa se
        preocupar em decorar essa fórmula, use o site à vontade para descobrir
        você mesmo o resultado desejado.
      </p>
      <h3>Como usar de forma estratégica?</h3>
      <p>
        O preço médio é usado por muitos investidores para mitigar o prejuízo em
        oscilações negativas e ao mesmo tempo aumentar o potencial de
        rentabilidade. Mas e o risco? <br /><br />
        Para operações de <b>daytrade</b>, efetuar estratégias de preço médio
        exige um grau de gerenciamento de risco e conhecimento elevado. Ao
        executar a estratégia você aumenta seu risco potencial somado a uma
        alavancagem nada saudável ao operador pessoa física. <br /><br />
        Em operações <b>buy and hold</b> você tem uma performance mais
        previsível seguindo uma análise fundamentalista somado a uma janela
        temporal. A estratégia favorece muito ao investidor, desde que os
        fundamentos da empresa que se aporta não sejam desfavoráveis à compra.
        <br />
        <br />
        Obrigado por visitar nossa página, esperamos ter contribuído com seu
        conhecimento.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DescricaoPrecoMedio",
};
</script>

<style>
#descricaoPrecoMedio {
  height: auto;
  width: 100%;
  background-color: #fdfbfb;
  display: flex;
  justify-content: center;
  border-top: 1px solid #6868683f;
}

.textoInformativo {
  margin-top: 30px;
  width: 750px;
  margin-bottom: 30px;
}

h1 {
  font-size: 30px;
  margin-bottom: 20px;
}

h3 {
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>