<template>
  <div class="container">
    <h2 class="my-4 text-center">Bem-vindo ao Coleta Verde</h2>

    <div class="alert alert-success text-center">
      <strong>Pontuação Atual:</strong> {{ pontos }} pontos
      <RouterLink to="/recompensas" class="btn btn-outline-light btn-sm float-end">Trocar Pontos</RouterLink>
    </div>

    <div class="row g-4">
      <div class="col-md-6">
        <div class="card p-3">
          <h5><i class="bi bi-truck"></i> Dia da Coleta</h5>
          <p class="mb-0">A coleta no seu bairro acontece <strong>toda quarta-feira às 10h</strong>.</p>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card p-3">
          <h5><i class="bi bi-bag-plus"></i> Solicitar Sacola</h5>
          <RouterLink to="/solicitar-sacolas" class="btn btn-primary">Solicitar</RouterLink>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card p-3">
          <h5><i class="bi bi-clock-history"></i> Histórico de Coletas</h5>
          <ul class="mb-0">
            <li>29/05 - Coleta realizada</li>
            <li>22/05 - Coleta realizada</li>
            <li>15/05 - Coleta realizada</li>
          </ul>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card p-3">
          <h5><i class="bi bi-book"></i> Educação Ambiental</h5>
          <RouterLink to="/educacao" class="btn btn-success">Acessar</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted } from "vue";

const pontos = ref(150);

onMounted(() => {
  const salvo = localStorage.getItem("pontos");
  if (salvo) {
    pontos.value = parseInt(salvo);
  }
});
</script>
