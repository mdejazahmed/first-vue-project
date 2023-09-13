<script setup>
import { RouterView, onBeforeRouteLeave } from 'vue-router';
import Navbar from './Navbar.vue';

onBeforeRouteLeave((to, from) => {
    const answer = window.confirm(
        'Do you really want to leave? you have unsaved changes!'
    )
    // cancel the navigation and stay on the same page
    if (!answer) return false
});
</script>



<template>
    <div class="mainContainer">
        <Navbar />
        <main>
            <RouterView />
        </main>
        <footer>footer</footer>
    </div>
</template>



<style scoped>
.mainContainer{
    width: 100%;
    min-height: 100vh;
   
}
main{
    min-height: 100vh;
    padding: 0 10%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>