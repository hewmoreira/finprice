<template>
  <div id="estruturaPagePrecoMedio">
    <main>
      <div id="title">Calculadora de Preço Médio</div>
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
            <button
              type="submit"
              class="btnDelete"
              @click="deleteSelectPM(index - 1)"
            >
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
      <div id="publish"></div>
    </main>
    <DescricaoPrecoMedio />
  </div>
</template>

<script>
import DescricaoPrecoMedio from "./pages/descricao.vue";

export default {
  name: "PrecoMedio",
  components: {
    DescricaoPrecoMedio,
  },
  data() {
    return {
      quantidade: "",
      listaQuantidade: [],
      preco: "",
      listaPreco: [],
      quantidadeTotal: "",
      precoMedioTotal: 0,
      multi: 0,
      result: [],
      corAtivaIcon: {
        yellow: false,
        green: false,
        orange: false,
      },
    };
  },
  methods: {
    formatNumber(value) {
      let val = (value / 1).toFixed(0).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    calcPM() {
      this.listaQuantidade.push(this.quantidade);
      this.listaPreco.push(this.preco);
      this.corAtivaIcon.yellow = true;
      this.corAtivaIcon.green = true;
      this.$refs.input.value = "";
      this.quantidade = "";
      this.preco = "";

      this.calcQuantTotal();
      this.loopCalc();
      setTimeout(this.resetandoCores, 350);
    },
    calcQuantTotal() {
      if (this.listaQuantidade != "") {
        this.quantidadeTotal = this.listaQuantidade.reduce(
          (quantidadeTotal, currentElement) => quantidadeTotal + currentElement
        );
      } else {
        this.zerarVariaveis()
      }
    },
    calcPMTotal() {
      if (this.listaQuantidade != "") {
        this.precoMedioTotal =
          this.result.reduce(
            (precoMedioTotal, currentElement) =>
              precoMedioTotal + currentElement
          ) / this.quantidadeTotal;
      } else {
        this.zerarVariaveis()
      }
    },
    loopCalc() {
      for (let i = 0; i < this.listaQuantidade.length; i++) {
        this.multi = this.listaQuantidade[i] * this.listaPreco[i];
      }
      this.precoMedioTotal = 0;
      this.result.push(this.multi);
      this.calcPMTotal();
    },
    deleteSelectPM(index) {
      if (index > 0 && this.listaQuantidade.length > 0) {
        this.result.splice(index, 1);
        this.listaQuantidade.splice(index, 1);
        this.listaPreco.splice(index, 1);
        this.corAtivaIcon.orange = true;
      } else {
        this.listaQuantidade.splice(index, 1);
        this.listaPreco.splice(index, 1);
        this.result.splice(index, 1);
        this.corAtivaIcon.orange = true;
      }
      this.calcQuantTotal();
      this.calcPMTotal();
      setTimeout(this.resetandoCores, 350);
    },
    resetandoCores() {
      this.corAtivaIcon.yellow = false;
      this.corAtivaIcon.orange = false;
      this.corAtivaIcon.green = false;
    },
    zerarVariaveis(){
      this.quantidade = "",
      this.listaQuantidade = [],
      this.preco = "",
      this.listaPreco = [],
      this.quantidadeTotal = "",
      this.precoMedioTotal = 0,
      this.multi = 0,
      this.result = []     
    }
  },
};
</script>

<style scoped>
#estruturaPagePrecoMedio {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-background-home);
}

main {
  align-items: center;
}

#title {
  color: var(--color-black2);
  font-size: 45px;
  text-align: center;
  margin-top: 100px;
}

#calculadoraPrecoMedio {
  margin-top: 30px;
  width: 700px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.quantField {
  font-size: 20px;
  width: 170px;
  padding: 15px;
  color: #909090;
  background: #fff;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 3px 3px 6px rgb(0 0 0 / 5%);
  transition: 0.5s;
}

.quantField:hover {
  width: 230px;
  transition: 0.5s;
}

.quantField:focus {
  width: 230px;
}

.priceField {
  font-size: 20px;
  width: 170px;
  padding: 15px;
  color: #909090;
  background: #fff;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 3px 3px 6px rgb(0 0 0 / 5%);
  transition: 0.5s;
}

.priceField:hover {
  width: 230px;
}

.priceField:focus {
  width: 230px;
}

.btnCalc {
  width: 50px;
  height: 47px;
  margin-left: 15px;
  font-size: 40px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  color: var(--color-white1);
  background: var(--color-background-footer);
  transition: 0.35s;
}

.btnCalc:hover {
  background: var(--color-yellow1);
  color: var(--color-black2);
  transition: 0.35s;
}

.iconBtnCalc {
  margin-top: 4px;
  width: 22px;
}

#result {
  min-width: auto;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  border: 2px dashed var(--color-white1);
}

#iconResult {
  transition: 0.8s;
  color: var(--color-black2);
}

#iconResult.yellowColor {
  transition: 0s;
  color: var(--color-yellow1);
}

#iconResult.orangeColor {
  transition: 0s;
  color: var(--color-orange1);
}

#iconResult.greenColor {
  transition: 0s;
  color: var(--color-green1);
}

.qtdTotal {
  font-size: 20px;
}

.pmAtual {
  font-size: 20px;
}

#divListaPM {
  margin-top: 30px;
  min-width: 300px;
  min-height: 10px;
  padding: 10px;
  border: 2px dashed var(--color-white1);
}

#listaPMs {
  margin-top: 2px;
  margin-bottom: 2px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}

.btnDelete {
  width: 21px;
  height: 21px;
  border: none;
  border-radius: 5px;
  color: var(--color-white1);
  background: var(--color-background-footer);
  transition: 0.35s;
}

.btnDelete:hover {
  background: var(--color-orange1);
  color: var(--color-black2);
  transition: 0.35s;
}

.iconBtnDelete {
  padding: 0;
  margin-top: 1px;
  width: 20px;
}

#publish {
  margin-top: 30px;
  width: 600px;
  height: 100px;
}

@media (max-width: 800px) {
  #title {
    font-size: 27px;
    margin-top: 50px;
  }

  #calculadoraPrecoMedio {
    margin-top: 10px;
    width: auto;
    height: auto;
  }

  .quantField {
    font-size: 17px;
    width: 120px;
    padding: 10px;
    margin: 0 8px;
  }

  .quantField:hover {
    width: 120px;
  }

  .quantField:focus {
    width: 120px;
  }

  .priceField {
    font-size: 17px;
    width: 120px;
    padding: 10px;
    margin: 0 8px;
  }

  .priceField:hover {
    width: 120px;
  }

  .priceField:focus {
    width: 120px;
  }

  .btnCalc {
    margin-left: 10px;
  }

  #result {
    margin-top: 20px;
  }

  #publish {
    width: 330px;
  }
}
</style>