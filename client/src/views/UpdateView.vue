<template>
    <div>
<h1>Upadate page {{ $route.params.id }}</h1>
<form @submit.prevent="updateRest">
    <input type="text" placeholder="Name" v-model="restDetails.name">
    <input type="text" placeholder="Place" v-model="restDetails.place">
    <input type="text" placeholder="Contact" v-model="restDetails.contact">
    <button type="submit">Update</button>
  </form>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import router from '../router';

const id=useRoute().params.id


let restDetails=ref({})
onMounted(async()=>{
    try {
    const res=await axios.get(`http://localhost:3000/restaurants/${id}`)
     restDetails.value=res.data
     } catch (err) {
         console.log(err)
     }
});

const updateRest=async()=>{
    try {
        const res=await axios.put(`http://localhost:3000/restaurants/${id}`,restDetails.value)
       console.log(res.data)
       router.push("/")
        
    } catch (error) {
        console.log(error)
    }

};
</script>

<style scoped>

</style>