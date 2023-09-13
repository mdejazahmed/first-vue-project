

<script setup>
import { reactive } from 'vue';
import axios from "axios"
import { RouterLink } from 'vue-router';
import { useAuthStore } from '../stores/counter';
import router from '../router';

const {login}=useAuthStore()

const userDetails = reactive({
    username: "",
    email: '',
    password: ""
});

const signup = async () => {
    try {
        const res = await axios.post("http://localhost:3000/users", userDetails)
        console.log(res.data)
        const {username,password}=res.data 
        if(login(username,password)){
            router.push("/")
        }

    } catch (error) {
        console.log(error)
    }

};

</script>

<template>
    <div class="signup">
    <div class="form">
        <h1>Sign up</h1>
        <input type="text" v-model="userDetails.username" placeholder="Username">
        <input type="email" v-model="userDetails.email" placeholder="Email">
        <input type="password" v-model="userDetails.password" placeholder="Password">
        <button @click="signup">Signup</button>
        <p>
            <RouterLink to="/login">Login</RouterLink>
        </p>
    </div>
</div>
</template>


<style scoped>

.signup{
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.form {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>