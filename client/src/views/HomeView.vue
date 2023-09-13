<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
let resList = ref([])
const getResList=async()=>{
  try {
    const res = await axios.get("http://localhost:3000/restaurants")
    resList.value = res.data
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  getResList()
});

const onDelete=async(id)=>{
const isConfirm=confirm("are you sure")
if(isConfirm){
  try {
    await axios.delete(`http://localhost:3000/restaurants/${id}`)
    getResList()
  } catch (error) {
    console.log(error)
  }
}
}
</script>

<template>
  <main>
    <table border="1px" width="500">
      <thead>
        <th>id</th>
        <th>name</th>
        <th>place</th>
        <th>contact</th>
        <th>actions</th>
      </thead>
      <tbody>
        <tr v-for="each in resList" :key="each.id">
          <td>{{ each.id }}</td>
          <td>{{ each.name }}</td>
          <td>{{ each.place }}</td>
          <td>{{ each.contact }}</td>
          <td>
            <RouterLink :to="`/update/`+each.id">Update</RouterLink>
            <a href="javascript:;" style="margin-left: 10px;" @click="onDelete(each.id)">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
