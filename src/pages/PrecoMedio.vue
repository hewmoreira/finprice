<template>
  <main>
    <div id="title">
        Calculadora de Preço Médio
    </div>
    <div id="calculadoraPrecoMedio">
        <input type="number" class="quantField" placeholder="Quantidade">
        <input type="number" class="priceField" placeholder="R$ 0,00">
        <button type="submit" class="btnCalc" :click="calcPM">+</button>
    </div>
    <div id="result">
        <span class="qtdTotal">Quantidade Total: <b>30</b></span>
        <font-awesome-icon icon="user" /><span class="pmAtual">Preço Médio: <b>25</b></span>
    </div>
    <div id="publish"></div>
  </main>
</template>

<script>
export default {
    name: "PrecoMedio"
}
</script>

<style scoped>

    main{
        background-color: var(--color-background-home);
        align-items: center;
    }
    
    #title{
        color: var(--color-text-dark);
        font-size: 30px;
        text-align: center;
        margin-top: 100px;
    }

    #calculadoraPrecoMedio {
        /* background-color: var(--color-background); */
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
        color: var(--color-text-light);
        background: var(--color-background-footer);
        transition: 0.35s;
        
    }

    .btnCalc:hover{
        background: var(--color-text-yellow);
        color: var(--color-text-dark);
        transition: 0.35s;
    }


    #result{
        width: 450px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .qtdTotal{
        font-size: 20px;
    }

    .pmAtual{
        font-size: 20px;
    }

    #publish{
        margin-top: 30px;
        width: 600px;
        height: 100px;
        background: #fff;
    }

</style>