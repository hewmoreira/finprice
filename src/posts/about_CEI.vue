<template>
  <div id="post">
    <div id="conteudoCEI">
      <h1>CEI - Canal Eletrônico do Investidor</h1>
      <h2>O que é CEI?</h2>
      <p>
        De forma geral, <a href="https://cei.b3.com.br/CEI_Responsivo/" target="_blank" rel="noopener noreferrer"><b>CEI</b></a> (Canal Eletrônico do Investidor) é um sistema online oferecido pela B3, a nossa famosa bolsa de valores. A finalidade dessa plataforma é disponibilizar os dados referentes aos investimentos de maneira simples para os acionistas, de modo que todos façam seu próprio controle para manter a educação financeira em dia. <br><br>
        O portal permite a quem <b>compra e vende ativos</b> na bolsa a pesquisa consolidada sobre as negociações realizadas em renda fixa ou renda variável. <br><br>
        Não é necessário realizar um cadastro específico para acessar o site. Assim que a instituição registra a aplicação, o sistema gera automaticamente uma <b>senha de acesso para o investidor</b>. Ele receberá as informações pelo e-mail cadastrado na corretora ou gestora dos investimentos, que faz a intermediação entre o investidor e a B3.
      </p>
      <h2>Para que serve o CEI?</h2>
      <p>
        A principal função do CEI é <b>consolidar dados</b> sobre as negociações feitas pelo indivíduo e, assim, fornecer a ele informações importantes sobre seus ativos. <br><br>
        Pense em uma pessoa que, para <b>otimizar custos</b>, negocie renda fixa com uma corretora e renda variável com outra. A situação é bastante comum, mas, na prática, pode gerar confusão com vários extratos e carteiras. <br><br>
        Com o canal, o investidor tem acesso à posição e às movimentações sobre esses ativos em um só lugar. Então, fica muito mais fácil <b>acompanhar o status</b> das aplicações. <br><br>
        Confira quais são os ativos que podem ser monitorados pelo canal: <br><br>
        <ul>
          <li>Ações</li>
          <li>Tesouro Direto</li>
          <li>Ativos financeiros</li>
          <li>Valores mobiliários</li>
          <li>Derivativos</li>
          <li>Empréstimo de ativos</li>
          <li>Proventos e garantias relacionadas a esses produtos</li>
        </ul>
      </p>
      <h2>O que é possível fazer no CEI?</h2>
      <p>
        O canal permite que você veja vários números e <b>atividades realizadas</b> em seus investimentos. Confira o que dá para fazer no site da B3: <br><br>
        <ul>
          <li>Visualização dos saldos:
            <ul>
              <li>Conta geral</li>
              <li>Mercado futuro</li>
              <li>Mercado de opções</li>
              <li>Ativos depositados para garantias de posições</li>
              <li>Títulos públicos</li>
            </ul>
          </li>
          <li>Extrato mensal de custódia de ativos</li>
          <li>Aviso de movimentação</li>
          <li>Informe de rendimento</li>
          <li>Avisos de transferências</li>
          <li>Extrato de negociação de ativos</li>
          <li>Histórico das posições em custódia dos últimos 60 dias</li>
        </ul> <br><br>
        Em suma, você consegue ver todas as <b>principais informações</b> sobre os investimentos realizados na bolsa de valores. Tudo isso de forma simplificada e em um só lugar.
      </p>
      <h2>Como realizar o cadastro e acessar o CEI?</h2>
      <p>
        Não há necessidade de fazer um cadastro em si. No momento em que você abrir uma conta de investimentos na instituição financeira autorizada, aparecerão em seu e-mail todas as informações necessárias para que entre na plataforma e desfrute dos recursos disponíveis. <br><br>
        É fundamental que você leia o e-mail e guarde a senha, pois ela será imprescindível para dar a permissão de acesso. Obviamente que você pode trocar a senha depois. Mas cuidado para não a preencher de forma errada por mais de três vezes. Isso pode causar o bloqueio temporário da conta no CEI. <br><br>
        Mesmo que você tenha vários cadastros em bancos e corretoras, não há necessidade de se preocupar. O sistema identifica todos os seus investimentos por meio do CPF informado. <br><br>
        Vale lembrar que, por questões de segurança da própria B3, há a exigência da troca de senha a cada seis meses. Portanto, fique de olho nisso para não levar um susto ao tentar a entrada no sistema. No caso de não lembrar a sua credencial, o procedimento também é muito simples. Basta clicar em “esqueci minha senha”, preencher as informações solicitadas e ficar de olho no e-mail para pegar a nova credencial. <br><br>
        Em resumo, perceba que o CEI não é um bicho de sete cabeças. Trata-se de um facilitador em termos de organização, de modo que você pode ter a tranquilidade de saber que os seus títulos e ativos comprados estão muito bem guardados. <br><br>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About_CEI",
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

#conteudoCEI {
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
}
</style>