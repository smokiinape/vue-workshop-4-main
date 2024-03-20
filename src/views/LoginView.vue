<template>
  <div class="login">
    <h1>Login</h1>
    <div class="login-container">
      <p>Press on the button to Login or Logout</p>
      <button @click="authStore.login">Login</button>
      <button @click="authStore.logout">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()


</script>


<style scoped>
.login {
  padding: 20px;
}

.login-container {
  display: flex;
  flex-direction: column;
}

button {
  width: 100px;
  height: 30px;

  margin-top: 10px;
}
</style>