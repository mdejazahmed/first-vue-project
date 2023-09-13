<script setup>
import { reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
import router from '../router';
import { useAuthStore } from '../stores/counter';


const userDetails = reactive({
    username: "",
    password: ""
});

let msg = ref("")

const login = async (userDetails) => {
if(userDetails.username && userDetails.password){
    const isValidate = await useAuthStore().login(userDetails)
    console.log(isValidate)
    if (isValidate) {
        router.replace("/")
    } else {
        msg.value = "Invalid username or password"
    }
}else{
    msg.value="Please enter username or password"
}
    
};
</script>


<template>
    <div class="login">
        <div class="form">
            <input type="text" v-model="userDetails.username" placeholder="Username" required>
            <input type="password" v-model="userDetails.password" placeholder="Password" required>
            <button @click="login(userDetails)">Login</button>
            <p v-if="msg" style="color: rgb(249, 52, 52);">{{ msg }}</p>

            <p>
                <RouterLink to="/signup">Signup</RouterLink>
            </p>
        </div>
    </div>
</template>

<style scoped>
.login {
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