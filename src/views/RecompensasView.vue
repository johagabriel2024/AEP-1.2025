<template>
  <div class="container mt-5">
    <h2 class="mb-4">Sistema de Recompensas</h2>

    <div class="alert alert-success"><strong>Pontuação atual:</strong> {{ pontos }} pontos</div>

    <div class="card mb-3" v-for="recompensa in recompensas" :key="recompensa.id">
      <div class="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 class="card-title">{{ recompensa.nome }}</h5>
          <p class="card-text">{{ recompensa.descricao }}</p>
          <p class="card-text text-muted">Custa {{ recompensa.custo }} pontos</p>
        </div>
        <button class="btn btn-primary" :disabled="pontos < recompensa.custo" @click="trocar(recompensa)">
          Trocar
        </button>
      </div>
    </div>

    <div v-if="mensagem" class="alert alert-info mt-3">{{ mensagem }}</div>
  </div>
</template>

<script setup>
  import { ref } from "vue";

  const pontos = ref(150);
  const mensagem = ref("");

  const recompensas = [
    { id: 1, nome: "10% de desconto no IPTU", custo: 100, descricao: "Desconto aplicado no próximo boleto." },
    { id: 2, nome: "Sacola personalizada", custo: 50, descricao: "Sacola ecológica com estampa exclusiva." },
  ];

  function trocar(recompensa) {
    pontos.value -= recompensa.custo;
    mensagem.value = `Você trocou por: ${recompensa.nome}`;
    setTimeout(() => (mensagem.value = ""), 3000);
  }
</script>
