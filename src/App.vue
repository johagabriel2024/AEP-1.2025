<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-success px-4">
      <RouterLink class="navbar-brand fw-bold text-white" to="/">Coleta Verde</RouterLink>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Início</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/mapa">Mapa</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/morador">Área do Morador</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/solicitar-sacolas">Solicitar Sacolas</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/recompensas">Recompensas</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/prefeitura">Painel da Prefeitura</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/historico">Histórico de Coletas</RouterLink>
            <!-- ✅ Adicionado -->
          </li>
        </ul>
      </div>
    </nav>

    <main class="container mt-4">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
