

<script setup>
import { reactive, ref } from 'vue';
import router from '../router';
import { useAuthStore } from '../stores/counter';

const handleLogout = () => {
    useAuthStore().logout()
    router.replace('/login')
};

const user=reactive(JSON.parse(localStorage.getItem("user")))
</script>


<template>
    <header>
             <nav>
                 <RouterLink to="/">Home</RouterLink>
                 <RouterLink to="/about">About</RouterLink>

             </nav>
             <div>
<p>Hello, {{ user.username }}</p>
                 <button @click="handleLogout">Log out</button>
             </div>
         </header>
 </template>

<style scoped>
header{
    width: 100%;
    height: 70px;
    padding: 0 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #e6e6e6;
}
nav{
    display: flex;
    align-items: center;
    gap: 10px;
}
div{
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>