<script setup>
import { computed, reactive } from "vue";
import {useCounterStore} from "../stores/counter.js"
import axios from "axios";
import router from "../router";
const store=useCounterStore()
const isEvenOrOdd=computed(()=>store.count%2==0?"even":"odd");
const restDetails=reactive({
  name:"",
  place:"",
  contact:""
});
const addRest=async()=>{
  const res=await axios.post("http://localhost:3000/restaurants",restDetails)
  console.log(res.data)
  router.push("/")
};
</script>

<template>
  <div class="about">
    <div>
      <h1>This is an about page</h1>
    <button @click="store.increment">{{ store.count }}</button>
    <p>{{ isEvenOrOdd }}</p>
    </div>
    <form @submit.prevent="addRest">
    <input type="text" placeholder="Name" v-model="restDetails.name">
    <input type="text" placeholder="Place" v-model="restDetails.place">
    <input type="text" placeholder="Contact" v-model="restDetails.contact">
    <button type="submit">Add</button>
  </form>
  </div>
  
</template>

<style scoped>
.about{
  width: 100%;
  display: flex;
}
form{
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
