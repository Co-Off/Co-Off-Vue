<script>
</script>
<template>
    <div v-if="authStore.isAuthenticated">
        <p>Bem-vindo, {{ authStore.user.name }}!</p>
        <button @click="logout()">Sair</button>
    </div>
</template>