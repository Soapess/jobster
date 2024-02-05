<template>
  <div>
    <h3>同一个for循环列表,绑定不同的点击事件</h3>
    <div class="list" v-for="(item, index) in items" :key="index">
      <p>{{ item.title }}：{{ item.styl }}</p>
      <button type="button" @click="update(item.num)">更新</button>
    </div>
  </div>
</template>

<script setup lang="ts">
let items = [
  {
    id: '001',
    title: '更新1',
    styl: '更新一内容',
    num: 'updateone'
  }, {
    id: '002',
    title: '更新2',
    styl: '更新二内容',
    num: 'updatetwo'
  }
]
function update(methodsNums) {
  //触发这个参数的方法
  this[methodsNums]()
}
function updateone() {
  console.log('更新1');
}
function updatetwo() {
  console.log('更新2');
}
</script>

<style scoped lang='less'>
.list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200rpx;
  margin-bottom: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  text-align: left;
  background: #fcc;

  p {
    flex: 1;
  }

  button {
    width: 44px;
    height: 26px;
    background: lightblue;
    bottom: 0;
  }
}
</style>
