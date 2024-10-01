<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="no-background text-black" fixed>
      <q-toolbar class="no-background" fixed>

        <q-toolbar-title>
          GymBro
        </q-toolbar-title>

        <div>
          <q-btn label="Entrar" color="primary" class="q-mx-md" to="/login"/>
          <q-btn label="Cadastrar-se" color="primary" to="singin"/>
        </div>

      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup>

defineOptions({
  name: 'MainLayout'
})
</script>


<style>
.no-background {
  background-color: transparent !important;
  box-shadow: none !important;
}

</style>
