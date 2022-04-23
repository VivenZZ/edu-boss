<template>
  <!-- 跟路由出口 -->
  <h1>学习测试1111</h1>
  <el-button type="success" size="default">测试</el-button>
  <el-button type="primary" size="default" @click="getA">点击</el-button>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  // 已启用类型推断
  setup () {
    let a = 1
    const getA = function () {
      console.log(a++)
    }
    return {
      a,
      getA
    }
  }
})
</script>

<style lang="scss" scoped>
h1{
  color: $color;
}
</style>
