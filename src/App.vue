<template>
  <div class="app">
    <header>
      <h1>My Website</h1>
      <h3 :class="authStore.isLoggedIn ? 'online' : 'offline'">Login State: {{ authStore.isLoggedIn ? "Online" : "Offline"
      }} </h3>


    </header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/dashboard">Dashboard</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()


</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;

  padding: 10px 50px;
}

nav {
  padding: 5px 50px;
  background-color: lightgray;
  font-size: 20px;

  text-align: center;
}

.offline {
  border: 1px solid red;
  padding: 3px 10px;
}

.online {
  border: 1px solid green;
  padding: 3px 10px;
}
</style>
