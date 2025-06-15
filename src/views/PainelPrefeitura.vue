// PainelPrefeitura.vue
<template>
  <div class="container mt-5">
    <h2 class="mb-4 text-center text-success">Painel da Prefeitura</h2>

    <div class="row mb-4">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-body">
            <h5 class="card-title">Adesão por Bairros</h5>
            <p class="card-text">Visualize quantas casas participam da coleta seletiva em cada bairro.</p>
            <ul>
              <li>Zona 1: 80%</li>
              <li>Zona 2: 55%</li>
              <li>Zona 3: 40%</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-body">
            <h5 class="card-title">Falhas de Separação</h5>
            <p class="card-text">Quantidade de coletas com erro na separação dos resíduos.</p>
            <ul>
              <li>Semana atual: 12 coletas incorretas</li>
              <li>Mês atual: 46 coletas incorretas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card shadow">
          <div class="card-body">
            <h5 class="card-title">Relatórios e Dados</h5>
            <p class="card-text">
              Estatísticas de coleta, participação, e sugestões para planejamento urbano sustentável.
            </p>
            <button class="btn btn-success">Baixar Relatório</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.card {
  border-radius: 12px;
}
</style>
