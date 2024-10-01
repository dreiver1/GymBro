<template>
  <q-page class="bg-white q-pa-none" style="font-family: Lexend, 'Noto Sans', sans-serif;">
    <div class="q-pa-md text-center">
      <div class="text-h6 text-primary font-bold ">Plano de Treino</div>
      <div class="text-subtitle1 font-bold ">Selecione um plano</div>
    </div>
      <q-card flat class="q-mb-md">
        <q-carousel
          v-model="slide"
          transition-prev="slide-right"
          transition-next="slide-left"
          animated
          control-color="primary"
          class="carousel"
          swipeable
        >
          <q-carousel-slide
            v-for="item in slides"
            :key="item.name"
            :name="item.name"
            class="column no-wrap flex-center carousel-slide"
          >
            <q-img
              :src="item.image"
              class="rounded-borders q-mb-md carousel-img"
              style="object-fit: cover; width: 100%; height: 100%;"
            >
              <q-card flat class="absolute-bottom q-pa-md carousel-card">
                <q-card-section>
                  <div class="col q-pr-sm carousel-text">
                    <p class="text-body1 font-bold">{{ item.title }}</p>
                    <p class="text-caption text-grey-6">{{ item.subtitle }}</p>
                  </div>
                </q-card-section>
              </q-card>
            </q-img>
          </q-carousel-slide>
          <q-carousel-slide
            v-for="item in slides"
            :key="item.name"
            :name="item.name"
            class="column no-wrap flex-center"
          >
            <q-img
              :src="item.image"
              class="rounded-borders q-mb-md"
              style="object-fit: cover; width: 100%; height: 100%;"
            >
              <q-card flat class="absolute-bottom q-pa-md">
                <q-card-section>
                  <q-btn
                    flat
                    icon="arrow_back"
                    class="absolute top-1/2 left-2"
                    @click="prevSlide"
                    v-if="canNavigatePrev"
                  />
                  <div class="col q-pr-sm">
                    <p class="text-body1 font-bold">{{ item.title }}</p>
                    <p class="text-caption text-grey-6">{{ item.subtitle }}</p>
                  </div>
                  <q-btn
                    flat
                    icon="arrow_forward"
                    class="absolute top-1/2 right-2"
                    @click="nextSlide"
                    v-if="canNavigateNext"
                  />
                </q-card-section>
              </q-card>
            </q-img>
          </q-carousel-slide>
        </q-carousel>



      </q-card>

      <q-list separator class="q-mb-md bg-grey-5">
        <q-item clickable v-ripple to="/new-plan">
          <q-item-section >
            <q-item-label class="text-bold text-white">Gerar um novo plano de treino</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-icon name="arrow_forward" />
          </q-item-section>
        </q-item>
      </q-list>

    <q-footer class="bg-white">
      <q-btn
        color="primary"
        class="full-width q-pa-md q-py-sm"
        label="Começar Treino"
      />
    </q-footer>
  </q-page>
</template>

<script setup>

import { ref, computed } from 'vue';

const slides = ref([
  {
    name: 'lose-weight',
    title: 'Corrida',
    subtitle: 'Queime gordura, construa músculos',
    image: 'https://static.vecteezy.com/system/resources/previews/004/224/304/non_2x/girl-running-in-park-illustration-healthy-lifestyle-happy-woman-sporty-characters-for-training-cardio-exercising-marathon-city-run-summer-outdoor-flat-cartoon-illustration-vector.jpg'
  },
  {
    name: 'cardio',
    title: 'VO2 Maximo - HIT',
    subtitle: 'Melhore a resistência, queime calorias',
    image: 'https://cdn.usegalileo.ai/stability/3f1a8d7b-2323-49e2-b369-e499d08abdf9.png'
  },
  {
    name: 'strength',
    title: 'Treinamento de Força',
    subtitle: 'Construa músculos, aumente a força',
    image: 'https://img.freepik.com/free-vector/woman-lifting-weight-gym-scene_603843-3612.jpg'
  }
]);

const canNavigatePrev = computed(() => {
  return slides.value.length > 1 && slide.value !== slides.value[0].name;
});

const canNavigateNext = computed(() => {
  return slides.value.length > 1 && slide.value !== slides.value[slides.value.length - 1].name;
});

const prevSlide = () => {
  const currentIndex = slides.value.findIndex(item => item.name === slide.value);
  if (currentIndex > 0) {
    slide.value = slides.value[currentIndex - 1].name;
  }
};

const nextSlide = () => {
  const currentIndex = slides.value.findIndex(item => item.name === slide.value);
  if (currentIndex < slides.value.length - 1) {
    slide.value = slides.value[currentIndex + 1].name;
  }
};

const slide = ref('lose-weight')
</script>

<style>

.carousel-container {
  position: relative;
}

.carousel {
  border-radius: 16px;
}

.carousel-slide {
  position: relative;
}

.carousel-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.carousel-card {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.carousel-text {
  padding: 1rem;
}

.carousel-btn {
  z-index: 1;
  font-size: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-btn-left {
  left: 1rem; /* Ajusta o espaçamento à esquerda */
}

.carousel-btn-right {
  right: 1rem; /* Ajusta o espaçamento à direita */
}
</style>
