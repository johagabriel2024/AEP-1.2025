<template>
  <div class="container mt-5">
    <h2 class="text-success mb-4">Histórico de Coletas</h2>

    <div class="row mb-3">
      <div class="col-md-6">
        <input v-model="filtroData" type="date" class="form-control" placeholder="Filtrar por data" />
      </div>
      <div class="col-md-6">
        <select v-model="filtroStatus" class="form-select">
          <option value="">Todos os status</option>
          <option value="realizada">Realizada</option>
          <option value="pendente">Pendente</option>
        </select>
      </div>
    </div>

    <div class="card shadow">
      <div class="card-body">
        <h5 class="card-title">Coletas Encontradas</h5>
        <ul class="list-group">
          <li
            v-for="(coleta, index) in coletasFiltradas"
            :key="index"
            class="list-group-item d-flex justify-content-between align-items-center"
          >
            {{ coleta.data }} - {{ coleta.status }}
            <span
              class="badge"
              :class="{
                'bg-success': coleta.status === 'realizada',
                'bg-warning': coleta.status === 'pendente',
              }"
            >
              {{ coleta.status.toUpperCase() }}
            </span>
          </li>
          <li v-if="coletasFiltradas.length === 0" class="list-group-item text-muted">Nenhuma coleta encontrada.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const filtroData = ref("");
const filtroStatus = ref("");

const coletas = ref([
  { data: "2024-01-02", status: "pendente" },
  { data: "2024-01-03", status: "realizada" },
  { data: "2024-01-04", status: "realizada" },
  { data: "2024-01-05", status: "pendente" },
  { data: "2024-01-08", status: "realizada" },
  { data: "2024-01-09", status: "realizada" },
  { data: "2024-01-10", status: "pendente" },
  { data: "2024-01-11", status: "realizada" },
  { data: "2024-01-12", status: "realizada" },
  { data: "2024-01-15", status: "pendente" },
  { data: "2024-01-16", status: "realizada" },
  { data: "2024-01-17", status: "realizada" },
  { data: "2024-01-18", status: "pendente" },
  { data: "2024-01-19", status: "realizada" },
  { data: "2024-01-22", status: "realizada" },
  { data: "2024-01-23", status: "pendente" },
  { data: "2024-01-24", status: "realizada" },
  { data: "2024-01-25", status: "realizada" },
  { data: "2024-01-26", status: "pendente" },
  { data: "2024-01-29", status: "realizada" },
]);

const coletasFiltradas = computed(() => {
  return coletas.value.filter((c) => {
    const correspondeData = !filtroData.value || c.data === filtroData.value;
    const correspondeStatus = !filtroStatus.value || c.status === filtroStatus.value;
    return correspondeData && correspondeStatus;
  });
});
</script>
