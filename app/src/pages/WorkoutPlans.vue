<template>
  <q-page class="row items-center justify-center q-pa-md">
    <div class="col-12">
      <h2 class="text-h2 text-center q-my-xl">Planos de Treino</h2>
      <div v-for="goal in uniqueGoals" :key="goal" class="section q-my-lg">
        <h3 class="text-h3 text-center">{{ goal }} (3 Treinos)</h3>
        <div class="q-gutter-md row justify-center">
          <div
            v-for="workout in filteredWorkouts(goal)"
            :key="workout.id"
            class="workout-card col-12 col-sm-6 col-md-4 col-lg-3"
          >
            <div class="card">
              <div class="card-header">
                <h4 class="text-h4">{{ workout.name }}</h4>
              </div>
              <div class="card-body">
                <ul class="exercise-list">
                  <li v-for="exercise in workout.exercises" :key="exercise.name" class="exercise-item">
                    <q-icon name="fitness_center" class="exercise-icon" />
                    <span>{{ exercise.name }}</span>
                    <span v-if="exercise.sets"> - {{ exercise.sets }} séries de {{ exercise.reps }} repetições</span>
                    <span v-else> - Duração: {{ exercise.duration }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useWorkoutStore } from 'src/stores/workoutStore.ts';
import { QIcon } from 'quasar';

const workoutStore = useWorkoutStore();
const workouts = workoutStore.myWorkout;

const uniqueGoals = [...new Set(workouts.map(workout => workout.goal))];

const filteredWorkouts = (goal) => {
  return workouts.filter(workout => workout.goal === goal);
};
</script>

<style>
.section {
  margin-top: 20px;
}

.workout-card {
  transition: transform 0.2s;
  margin-bottom: 15px;
}

.workout-card:hover {
  transform: scale(1.05);
}

.card {
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

.card-header {
  background-color: #333333;
  color: white;
  padding: 15px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  text-align: center;
}

.card-body {
  padding: 15px;
}

.exercise-list {
  list-style-type: none;
  padding: 0;
}

.exercise-item {
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-size: 0.9rem;
}

.exercise-icon {
  margin-right: 10px;
  color: #000000;
}

.q-gutter-md {
  margin: 20px 0;
}

@media (max-width: 600px) {
  .card-header h4 {
    font-size: 1.2rem;
  }

  .exercise-item {
    font-size: 0.8rem;
  }
}
</style>
