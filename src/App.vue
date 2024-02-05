<template>
  <div class="Tab">
    <RouterLink to="/homepage">首页</RouterLink>
    <RouterLink to="/aichat">AI问答</RouterLink>
    <RouterLink to="/industrygraph">行业图谱</RouterLink>
    <RouterLink to="/community">交流社区</RouterLink>
  </div>
  <div class="main-content">
    <br>
    <RouterView/>
    <togTest/>
  </div>
</template>

<script setup lang='ts' name='vueJS'>
import { } from "vue"
import togTest from '@/components/togTest.vue'
</script>

<style scoped>
.Tab {
  display: flex;
  text-align: center;
  justify-content: space-around;
  margin: 0 100px;
  width: 70%;
}

.Tab a {
  display: block;
  border-radius: 10px;
  background-color: seashell;
  font-size: large;
  color: black;
}

.Tab a.active {
  background-color: #64967E;
  color: #ffc268;
  font-weight: 900;
  text-shadow: 0 0 1px black;
  font-family: 微软雅黑;
}

.main-content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 60%;
  height: 400px;
  border: 1px solid;
}</style>
