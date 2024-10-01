<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          GymBro
        </q-toolbar-title>

        <q-btn
            class=""
            flat
            icon="logout"
            aria-label="logout"
            @click="logout()"
            label="sair"
          />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue';


const router = useRouter()
defineOptions({
  name: 'MainLayout'
});

const linksList: EssentialLinkProps[] = [
  {
    title: 'Inicio',
    caption: '',
    icon: 'home',
    link: '/main'
  },
  {
    title: 'Perfil',
    caption: '',
    icon: 'person',
    link: '/main'
  },
  {
    title: 'Planos de Treino',
    caption: 'Organize seu treino',
    icon: 'fitness_center',
    link: '/workout'
  },
  {
    title: 'Github',
    caption: 'Pagina do Autor',
    icon: 'code',
    link: 'https://github.com/dreiver1',
    target: '_blank'
  },
];

const leftDrawerOpen = ref(false);

function logout(){
  window.localStorage.clear()
  router.push('/')

}

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
