<template>
  <q-page class="row items-center justify-evenly">
    <loginForm/>
  </q-page>
</template>

<script setup lang="ts">
import loginForm from 'src/components/loginForm.vue';
defineOptions({
  name: 'IndexPage'
});

</script>
