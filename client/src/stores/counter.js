import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  const doubleCount = computed(() => count.value * 2)
  const increment = () => {
    console.log('work')
    count.value++
  }

  return { count, doubleCount, increment }
})

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(localStorage.getItem('isAuth') || false)

  const login = async ({ username, password }) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/users?username=${username}&password=${password}`
      )
      console.log(res.data)
      if (res.data.length >= 1) {
        const user = res.data[0]
        const { username, email } = user
        localStorage.setItem('user', JSON.stringify({ username, email }))
        isAuthenticated.value = true
        localStorage.setItem('isAuth', JSON.stringify(isAuthenticated.value))
      }else{
        return false
      }
    } catch (error) {
      console.log(error)
    }
return true
   
  }
  const logout = () => {
    isAuthenticated.value = false
    localStorage.removeItem('isAuth')
    localStorage.removeItem('user')
  }
  return { isAuthenticated, login, logout }
})
