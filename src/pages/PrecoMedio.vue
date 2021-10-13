<template>
  <main>
    <div id="title">
        Calculadora de Preço Médio
    </div>
    <div id="calculadoraPrecoMedio">
        <input type="number" class="quantField" placeholder="Quantidade" v-model="quantidade">
        <input type="number" class="priceField" placeholder="R$ 0,00" v-model="preco">
        <button type="submit" class="btnCalc" @click="calcPM" :disabled="!quantidade || !preco">
            <font-awesome-icon class="iconBtnCalc" icon="plus"/>
        </button>
    </div>
    <div id="result">
        <div id="divQtdTotal">
                Quantidade Total: &nbsp;
                <font-awesome-icon icon="coins"/>&nbsp;
                <b>{{ formatNumber(quantidade) }}</b>
        </div>
        <div id="divPMTotal">
                Preço Médio: &nbsp;
                <font-awesome-icon icon="dollar-sign"/>&nbsp;
                <b>{{ formatPrice(preco) }}</b>
        </div>
    </div>
    <div id="listaPMs">
        <div>
            <button type="submit" class="btnDelete" :click="deletePM">
                <font-awesome-icon class="iconBtnDelete" icon="minus"/>
            </button>
            &emsp;<font-awesome-icon icon="coins"/>&nbsp;
            <b>{{ formatNumber(quantidade) }}</b>&emsp;&emsp;
            <font-awesome-icon icon="dollar-sign"/>&nbsp;
            <b>{{ formatPrice(preco) }}</b> {{listaQuantidade}} {{listaPreco}}
        </div>
    </div>
    <div id="publish"></div>
  </main>
</template>

<script>
export default {
    name: "PrecoMedio",
    data(){
        return{
            quantidade: '',
            listaQuantidade: [],
            preco: '',
            listaPreco: []
        }
    },
    methods: {
    formatNumber(value) {
        let val = (value/1).toFixed(0).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    formatPrice(value) {
        let val = (value/1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    calcPM(){
        this.listaQuantidade.push(this.quantidade)
        this.listaPreco.push(this.preco)
 
    }
}
}
</script>

<style scoped>

    main{
        background-color: var(--color-background-home);
        align-items: center;
    }
    
    #title{
        color: var(--color-black2);
        font-size: 30px;
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

    .quantField{
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

    .quantField:hover{
        width: 230px;
        transition: 0.5s;
    }

    .quantField:focus{
        width: 230px;
    }

    .priceField{
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

    .priceField:hover{
        width: 230px;
    }

    .priceField:focus{
        width: 230px;
    }

    .btnCalc{
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

    .btnCalc:hover{
        background: var(--color-yellow1);
        color: var(--color-black2);
        transition: 0.35s;
    }

    .iconBtnCalc{
        margin-top: 4px;
        width: 22px;
    }


    #result{
        min-width: 300px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 10px;
        border: 2px dashed var(--color-white1);
    }
        
    .qtdTotal{
        font-size: 20px;
    }

    .pmAtual{
        font-size: 20px;
    }

    #listaPMs{
        margin-top: 30px;
        height: 100px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 10px;
        border: 2px dashed var(--color-white1);
    }

    .btnDelete{
        width: 20px;
        height: 18px;
        border: none;
        border-radius: 5px;
        color: var(--color-white1);
        background: var(--color-background-footer);
        transition: 0.35s;
        
    }

    .btnDelete:hover{
        background: var(--color-yellow1);
        color: var(--color-black2);
        transition: 0.35s;
    }

    .iconBtnDelete{
        padding: 0;
        margin-top: 1px;
        width: 20px;
    }

    #publish{
        margin-top: 30px;
        width: 600px;
        height: 100px;
        background: #fff;
    }

</style>