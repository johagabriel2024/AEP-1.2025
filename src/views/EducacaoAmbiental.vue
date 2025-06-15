<template>
  <div class="container py-5">
    <h2 class="mb-4 text-success text-center">Educação Ambiental</h2>

    <div class="mb-5">
      <h4>Dicas Sustentáveis</h4>
      <ul>
        <li>Separe corretamente o lixo seco e orgânico.</li>
        <li>Reduza o consumo de plástico descartável.</li>
        <li>Reutilize materiais sempre que possível.</li>
        <li>Participe de programas de coleta seletiva.</li>
        <li>Ensine crianças e vizinhos sobre sustentabilidade.</li>
      </ul>
    </div>

    <div>
      <h4>Quiz Interativo</h4>
      <div v-if="currentQuestionIndex < questions.length" class="mt-3">
        <p>
          <strong>Pergunta {{ currentQuestionIndex + 1 }}:</strong>
          {{ questions[currentQuestionIndex].pergunta }}
        </p>
        <div>
          <button
            v-for="(resposta, index) in questions[currentQuestionIndex].respostas"
            :key="index"
            class="btn btn-outline-success me-2 mb-2"
            @click="verificarResposta(index)"
          >
            {{ resposta }}
          </button>
        </div>
      </div>

      <div v-else class="mt-4">
        <h5 class="text-success">Quiz concluído!</h5>
        <p>Você acertou {{ score }} de {{ questions.length }} perguntas.</p>
        <button class="btn btn-success" @click="reiniciarQuiz">Refazer Quiz</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const currentQuestionIndex = ref(0);
const score = ref(0);

const questions = [
  {
    pergunta: "Qual é a cor da lixeira para materiais recicláveis?",
    respostas: ["Azul", "Vermelha", "Verde"],
    correta: 0,
  },
  {
    pergunta: "O que não deve ser descartado no lixo reciclável?",
    respostas: ["Garrafa PET", "Restos de comida", "Jornal"],
    correta: 1,
  },
  {
    pergunta: "Qual destes hábitos ajuda o meio ambiente?",
    respostas: ["Jogar óleo no ralo", "Utilizar sacolas reutilizáveis", "Queimar lixo"],
    correta: 1,
  },
];

function verificarResposta(index) {
  if (index === questions[currentQuestionIndex.value].correta) {
    score.value++;
  }
  currentQuestionIndex.value++;

  // Ao finalizar o quiz, salvar pontuação no localStorage
  if (currentQuestionIndex.value === questions.length) {
    const pontosAtuais = parseInt(localStorage.getItem("pontos") || "150");
    localStorage.setItem("pontos", pontosAtuais + score.value);
  }
}

function reiniciarQuiz() {
  currentQuestionIndex.value = 0;
  score.value = 0;
}
</script>

<style scoped>
ul li {
  margin-bottom: 0.5rem;
}
</style>
