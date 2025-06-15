import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import MapaView from '../views/MapaView.vue';
import HomeMorador from '../views/HomeMorador.vue';
import SolicitacaoSacolas from '../views/SolicitacaoSacolas.vue';
import RecompensasView from '../views/RecompensasView.vue';
import PainelPrefeitura from '../views/PainelPrefeitura.vue';
import HistoricoColetas from '../views/HistoricoColetas.vue';
import EducacaoAmbiental from '../views/EducacaoAmbiental.vue'; // ✅ IMPORTAÇÃO ADICIONADA

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/mapa', name: 'Mapa', component: MapaView },
  { path: '/morador', name: 'Morador', component: HomeMorador },
  { path: '/solicitar-sacolas', name: 'SolicitacaoSacolas', component: SolicitacaoSacolas },
  { path: '/recompensas', name: 'Recompensas', component: RecompensasView },
  { path: '/prefeitura', name: 'PainelPrefeitura', component: PainelPrefeitura },
  { path: '/historico', name: 'HistoricoColetas', component: HistoricoColetas },
  { path: '/educacao', name: 'EducacaoAmbiental', component: EducacaoAmbiental }, // ✅ ROTA ADICIONADA
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
