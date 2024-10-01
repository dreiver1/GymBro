import { defineStore } from 'pinia';

export const useWorkoutStore = defineStore('workout', {
  state: () => ({
    workouts: [
      [
        {
          id: 1,
          goal: 'força',
          name: 'Treino de Força A',
          exercises: [
            { name: 'Agachamento', sets: 4, reps: 6 },
            { name: 'Levantamento Terra', sets: 4, reps: 6 },
            { name: 'Supino', sets: 4, reps: 6 },
          ],
        },
        {
          id: 2,
          goal: 'força',
          name: 'Treino de Força B',
          exercises: [
            { name: 'Barra Fixa', sets: 4, reps: 6 },
            { name: 'Remada', sets: 4, reps: 6 },
            { name: 'Desenvolvimento', sets: 4, reps: 6 },
          ],
        },
        {
          id: 3,
          goal: 'força',
          name: 'Treino de Força C',
          exercises: [
            { name: 'Agachamento Frontal', sets: 4, reps: 6 },
            { name: 'Cadeira Extensora', sets: 4, reps: 8 },
            { name: 'Tríceps Testa', sets: 4, reps: 8 },
          ],
        },
      ],
      [
        {
          id: 4,
          goal: 'hipertrofia',
          name: 'Treino de Hipertrofia A',
          exercises: [
            { name: 'Agachamento', sets: 4, reps: 10 },
            { name: 'Leg Press', sets: 4, reps: 10 },
            { name: 'Supino Inclinado', sets: 4, reps: 10 },
          ],
        },
        {
          id: 5,
          goal: 'hipertrofia',
          name: 'Treino de Hipertrofia B',
          exercises: [
            { name: 'Puxada na Barra', sets: 4, reps: 10 },
            { name: 'Desenvolvimento com Halteres', sets: 4, reps: 10 },
            { name: 'Cadeira Abdutora', sets: 4, reps: 10 },
          ],
        },
        {
          id: 6,
          goal: 'hipertrofia',
          name: 'Treino de Hipertrofia C',
          exercises: [
            { name: 'Stiff', sets: 4, reps: 10 },
            { name: 'Rosca Direta', sets: 4, reps: 10 },
            { name: 'Elevação Lateral', sets: 4, reps: 10 },
          ],
        },
      ],
      [
        {
          id: 7,
          goal: 'resistência',
          name: 'Treino de Resistência A',
          exercises: [
            { name: 'Corrida', duration: '30 min' },
            { name: 'Ciclismo', duration: '30 min' },
            { name: 'Pular Corda', duration: '10 min' },
          ],
        },
        {
          id: 8,
          goal: 'resistência',
          name: 'Treino de Resistência B',
          exercises: [
            { name: 'Natação', duration: '30 min' },
            { name: 'HIIT', duration: '20 min' },
            { name: 'Subida de Escadas', duration: '15 min' },
          ],
        },
        {
          id: 9,
          goal: 'resistência',
          name: 'Treino de Resistência C',
          exercises: [
            { name: 'Circuito de Exercícios', duration: '30 min' },
            { name: 'Sprints', duration: '15 min' },
            { name: 'Flexões', sets: 3, reps: 12 },
          ],
        },
      ]
    ],

    myWorkout: null
  }),
});
