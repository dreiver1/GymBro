<!-- eslint-disable @typescript-eslint/ban-ts-comment -->
<template>
  <q-form @submit="login" class="q-gutter-md">
    <q-input
      filled
      v-model="store.user.name"
      label="Nome *"
      hint="Name and surname"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Por favor Digite seu nome completo']"
    />

    <q-input
      filled
      v-model="store.user.cpf"
      label="cpf *"
      hint="Enter your CPF"
      lazy-rules
      :rules="[
        val => !!val || 'Por favor, digite seu CPF',
        val => val.length === 11 || 'O CPF deve ter 11 dígitos'
      ]"
    />

    <q-input
      filled
      v-model="store.user.email"
      label="Email *"
      type="email"
      hint="Enter your email"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Por favor Digite seu email']"
    />

    <q-input
      filled
      type="date"
      v-model="store.user.date"
      label="Data de nascimento"
      lazy-rules
      :rules="[
        val => val !== null && val !== '' || 'Por favor Digite sua data de nascimento',
      ]"
    />

    <q-input
      filled
      type="password"
      v-model="store.user.password"
      label="Senha *"
      hint="Enter your password"
      lazy-rules
      :rules="[ val => val && val.length > 0 || 'Por favor Digite sua senha']"
    />

    <q-option-group
      v-model="store.user.roleId"
      :options="options"
      color="primary"
      inline
    />

    <q-toggle v-model="accept" label="I accept the license and terms" />

    <div class="q-pa-md">
      <q-btn label="Concluir" type="submit" color="primary" class="q-mx-md"/>
      <q-btn label="Cancelar" color="negative" class="q-mx-md" to="/"/>
    </div>
  </q-form>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useUserStore } from 'src/stores/useStore';
import { useRouter } from 'vue-router';
import { AxiosError, isAxiosError } from 'axios';
const route = useRouter()

interface Role {
  id: string;
  name: string;
}

const accept = ref(false)

const store = useUserStore();

interface ErrorResponse {
  meta: {
    target: string[];
  };
}


const login = async () => {
  try {
    const response = await store.post()
    if(response.id){
      route.push('/')
    }
  } catch (error) {
    if (isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;

      if (axiosError.response?.data?.meta?.target?.[0] === 'email') {
        window.alert('Usuário com este email já existe');
      } else if (axiosError.response?.data?.meta?.target?.[0] === 'cpf') {
        window.alert('Usuário com este CPF já existe');
      } else {
        window.alert('Ocorreu um erro inesperado');
      }
    } else {
      window.alert('Ocorreu um erro inesperado');
    }
  }
};


const options = ref<{ value: string; label: string }[]>([]);



onMounted(async () => {
  await store.getRoles();

  if (Array.isArray(store.roles.values)) {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    options.value = store.roles.values.map((element: Role) => ({
      label: element.name,
      value: element.id
    }));
  }
});


</script>
