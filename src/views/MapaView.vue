<template>
  <div class="container mt-4">
    <h2 class="text-center mb-4">Mapa de Coleta</h2>

    <l-map style="height: 500px; width: 100%; border-radius: 8px" :zoom="12" :center="mapCenter">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <l-marker v-for="(caminhao, index) in caminhoes" :key="index" :lat-lng="caminhao.posicao" :icon="iconeCaminhao">
        <l-popup>Caminhão #{{ index + 1 }}</l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script setup>
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import { ref, onMounted } from "vue";
import L from "leaflet";
import caminhaoImg from "@/assets/caminhao.png";

// Centro geral da cidade
const mapCenter = ref([-23.4209, -51.9331]);

// Ícone do caminhão
const iconeCaminhao = L.icon({
  iconUrl: caminhaoImg,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

// Caminhões espalhados amplamente
const caminhoes = ref([
  {
    rota: [
      [-23.4, -51.95],
      [-23.402, -51.948],
      [-23.404, -51.946],
    ],
    posicao: [-23.4, -51.95],
    index: 0,
  },
  {
    rota: [
      [-23.41, -51.97],
      [-23.4115, -51.969],
      [-23.413, -51.968],
    ],
    posicao: [-23.41, -51.97],
    index: 0,
  },
  {
    rota: [
      [-23.43, -51.96],
      [-23.432, -51.958],
      [-23.434, -51.956],
    ],
    posicao: [-23.43, -51.96],
    index: 0,
  },
  {
    rota: [
      [-23.44, -51.92],
      [-23.442, -51.922],
      [-23.444, -51.924],
    ],
    posicao: [-23.44, -51.92],
    index: 0,
  },
  {
    rota: [
      [-23.45, -51.9],
      [-23.451, -51.902],
      [-23.452, -51.904],
    ],
    posicao: [-23.45, -51.9],
    index: 0,
  },
  {
    rota: [
      [-23.42, -51.97],
      [-23.4215, -51.972],
      [-23.423, -51.974],
    ],
    posicao: [-23.42, -51.97],
    index: 0,
  },
  {
    rota: [
      [-23.435, -51.94],
      [-23.437, -51.942],
      [-23.439, -51.944],
    ],
    posicao: [-23.435, -51.94],
    index: 0,
  },
  {
    rota: [
      [-23.405, -51.91],
      [-23.407, -51.912],
      [-23.409, -51.914],
    ],
    posicao: [-23.405, -51.91],
    index: 0,
  },
  {
    rota: [
      [-23.445, -51.93],
      [-23.447, -51.932],
      [-23.449, -51.934],
    ],
    posicao: [-23.445, -51.93],
    index: 0,
  },
  {
    rota: [
      [-23.415, -51.905],
      [-23.417, -51.907],
      [-23.419, -51.909],
    ],
    posicao: [-23.415, -51.905],
    index: 0,
  },
  {
    rota: [
      [-23.425, -51.96],
      [-23.427, -51.962],
      [-23.429, -51.964],
    ],
    posicao: [-23.425, -51.96],
    index: 0,
  },
  {
    rota: [
      [-23.4, -51.91],
      [-23.402, -51.912],
      [-23.404, -51.914],
    ],
    posicao: [-23.4, -51.91],
    index: 0,
  },
]);

// Movimento
onMounted(() => {
  setInterval(() => {
    caminhoes.value = caminhoes.value.map((caminhao) => {
      const novoIndex = (caminhao.index + 1) % caminhao.rota.length;
      return {
        ...caminhao,
        posicao: caminhao.rota[novoIndex],
        index: novoIndex,
      };
    });
  }, 6000);
});
</script>
