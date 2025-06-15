<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div class="container">
      <a class="navbar-brand" href="#">Coleta Verde</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/morador">Morador</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/prefeitura">Prefeitura</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/seu-repo/coleta-verde" target="_blank" rel="noopener">
              <i class="bi bi-github"></i> GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// vazio
</script>
