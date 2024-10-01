<template>
  <q-form
        @submit="handleLogin"
        class="q-gutter-md"
      >
        <q-input
          filled
          type="email"
          v-model="store.user.email"
          label="Email *"
          hint="Name and surname"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Por favor Digite seu email']"
        />

        <q-input
          filled
          type="password"
          v-model="store.user.password"
          label="Senha *"
          hint="Name and surname"
          lazy-rules
          :rules="[ val => val && val.length > 0 || 'Por favor Digite sua senha']"
        />

        <div class="q-pa-md">
          <q-btn label="Entrar" type="submit" color="primary" class="q-mx-md"/>
          <q-btn label="Registrar-se" color="primary" class="q-mx-md" to="singin"/>
        </div>
      </q-form>
  </template>

<script setup lang="ts">
import { useUserStore } from 'src/stores/useStore';
import { useRouter } from 'vue-router';

const router = useRouter()
const store = useUserStore()

const handleLogin = async () => {
  const response = await store.login()
  const { accessToken, refreshToken } = response
  window.localStorage.setItem('accessToken', accessToken)
  window.localStorage.setItem('refreshToken', refreshToken)


  router.push('/main')
}

</script>
