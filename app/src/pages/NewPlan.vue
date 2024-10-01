<template>
  <q-page class="row items-center justify-center">
    <div class="col-12 col-md-6 q-px-md q-py-lg bg-grey-2">
      <h2 class="text-h5 q-mb-md">Gere seu Treino Personalizado</h2>
      <q-form @submit.prevent="submitForm" ref="form">
        <q-input
          filled
          v-model="formData.name"
          label="Nome"
          required
          class="q-mb-md"
        />
        <q-input
          filled
          v-model="formData.age"
          label="Idade"
          type="number"
          required
          class="q-mb-md"
        />
        <q-input
          filled
          v-model="formData.weight"
          label="Peso (kg)"
          type="number"
          required
          class="q-mb-md"
        />
        <q-select
          filled
          v-model="formData.fitnessLevel"
          label="Nível de Condicionamento Físico"
          :options="fitnessLevels"
          required
          class="q-mb-md"
        />
        <q-select
          filled
          v-model="formData.goal"
          label="Objetivo do Treino"
          :options="goals"
          required
          class="q-mb-md"
        />
        <q-select
          filled
          v-model="formData.preference"
          label="Preferência de Treino"
          :options="preferences"
          required
          class="q-mb-md"
        />
        <q-btn @click="generatePlan()" label="Gerar Treino" color="primary" />
      </q-form>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import { useWorkoutStore } from 'src/stores/workoutStore';
import { useRouter } from 'vue-router'
const router = useRouter()
const generatePlan = () => {
  console.log(formData.value.goal.label)
  if( formData.value.goal.label == 'Perda de Peso' ){
    store.myWorkout = store.workouts[2]
  } else if( formData.value.goal.label == 'Ganho de Massa Muscular' ){
    store.myWorkout = store.workouts[1]
  } else if( formData.value.goal.label == 'Ganho de Força' ){
    store.myWorkout = store.workouts[0]
  }

  router.push('/workout-plans')
}

const store = useWorkoutStore()

const formData = ref({
  name: '',
  age: '',
  weight: '',
  fitnessLevel: '',
  goal: '',
  preference: '',
});

const fitnessLevels = [
  { label: 'Iniciante', value: 'beginner' },
  { label: 'Intermediário', value: 'intermediate' },
  { label: 'Avançado', value: 'advanced' },
];

const goals = [
  { label: 'Perda de Peso', value: 'weight_loss' },
  { label: 'Ganho de Massa Muscular', value: 'muscle_gain' },
  { label: 'Ganho de Força', value: 'fitness_improvement' },
];

const preferences = [
  { label: 'Musculação', value: 'weightlifting' },
  { label: 'Treino Funcional', value: 'functional' },
  { label: 'Cardio', value: 'cardio' },
];

const submitForm = () => {
  console.log(formData.value);
};
</script>

<style scoped>
.bg-grey-2 {
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
}
</style>
