<template>
  <div id="calculadoraPrecoMedio">
    <input
      type="number"
      class="quantField"
      ref="input"
      placeholder="Quantidade"
      v-model="quantidade"
    />
    <input
      type="number"
      class="priceField"
      ref="input"
      step="0.01"
      placeholder="R$ 0,00"
      v-model="preco"
    />
    <button
      type="submit"
      class="btnCalc"
      @click="calcPM"
      :disabled="!quantidade || !preco"
    >
      <font-awesome-icon class="iconBtnCalc" icon="plus" />
    </button>
  </div>
  <div id="result">
    <div id="divQtdTotal">
      Quantidade Total: &nbsp;
      <font-awesome-icon
        icon="coins"
        id="iconResult"
        :class="
          corAtivaIcon.orange
            ? 'orangeColor'
            : corAtivaIcon.yellow
            ? 'yellowColor'
            : ''
        "
      />&nbsp;
      <b
        id="iconResult"
        :class="
          corAtivaIcon.orange
            ? 'orangeColor'
            : corAtivaIcon.yellow
            ? 'yellowColor'
            : ''
        "
      >
        {{ formatNumber(quantidadeTotal) }}
      </b>
    </div>
    <div id="divPMTotal">
      Preço Médio: &nbsp;
      <font-awesome-icon
        icon="dollar-sign"
        id="iconResult"
        :class="
          corAtivaIcon.orange
            ? 'orangeColor'
            : corAtivaIcon.green
            ? 'greenColor'
            : ''
        "
      />&nbsp;
      <b
        id="iconResult"
        :class="
          corAtivaIcon.orange
            ? 'orangeColor'
            : corAtivaIcon.green
            ? 'greenColor'
            : ''
        "
      >
        {{ formatPrice(precoMedioTotal) }}
      </b>
    </div>
  </div>
  <div id="divListaPM" v-if="listaQuantidade[0] || listaPreco[0]">
    <div id="listaPMs" v-for="index in listaQuantidade.length" :key="index">
      <div>
        <button type="submit" class="btnDelete" @click="deleteSelectPM(index)">
          <font-awesome-icon class="iconBtnDelete" icon="minus" />
        </button>
      </div>
      <div>
        <font-awesome-icon icon="coins" />&nbsp;
        <b>{{ formatNumber(listaQuantidade[index - 1]) }}</b>
      </div>
      <div>
        <font-awesome-icon icon="dollar-sign" />&nbsp;
        <b>{{ formatPrice(listaPreco[index - 1]) }}</b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalculadoraPrecoMedio",
};
</script>

<style>
</style>