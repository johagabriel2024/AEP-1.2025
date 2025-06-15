<template>
  <div class="container">
    <h2 class="mt-4 mb-3">Solicitação de Sacolas Identificadas</h2>
    <form @submit.prevent="enviarSolicitacao">
      <div class="mb-3">
        <label for="nome" class="form-label">Nome Completo</label>
        <input v-model="nome" type="text" class="form-control" id="nome" required />
      </div>

      <div class="mb-3">
        <label for="endereco" class="form-label">Endereço</label>
        <input v-model="endereco" type="text" class="form-control" id="endereco" required />
      </div>

      <div class="mb-3">
        <label for="bairro" class="form-label">Bairro</label>
        <input v-model="bairro" type="text" class="form-control" id="bairro" required />
      </div>

      <div class="mb-3">
        <label for="quantidade" class="form-label">Quantidade de Sacolas</label>
        <input v-model="quantidade" type="number" class="form-control" id="quantidade" required min="1" />
      </div>

      <button type="submit" class="btn btn-success">Enviar Solicitação</button>

      <div v-if="mensagem" class="alert alert-success mt-3">{{ mensagem }}</div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const nome = ref("");
const endereco = ref("");
const bairro = ref("");
const quantidade = ref(1);
const mensagem = ref("");

const enviarSolicitacao = () => {
  console.log("Solicitação enviada:", {
    nome: nome.value,
    endereco: endereco.value,
    bairro: bairro.value,
    quantidade: quantidade.value,
  });

  mensagem.value = "Solicitação enviada com sucesso!";

  nome.value = "";
  endereco.value = "";
  bairro.value = "";
  quantidade.value = 1;
};
</script>
