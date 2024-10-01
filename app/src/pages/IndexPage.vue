<template>
  <q-page class="row items-center justify-evenly">
    <div>
      <p>User ID: {{ userId }}</p>
      <p>User Role: {{ userRole }}</p>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineOptions({
  name: 'IndexPage'
});

const userId = ref<string | null>(null);
const userRole = ref<string | null>(null);

const token = localStorage.getItem('accessToken');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function decodeJWT(token: string): { [key: string]: any } | null {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
}

if (token) {
  const decodedToken = decodeJWT(token);
  if (decodedToken) {
    userId.value = decodedToken.userId;
    userRole.value = decodedToken.roles;
  }
}
</script>
