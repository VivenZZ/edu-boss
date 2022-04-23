<template>
  <!-- 跟路由出口 -->
  <h1>学习测试1111</h1>
  <el-button type="success" size="default">测试</el-button>
  <el-button type="primary" size="default" @click="getA">点击</el-button>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </el-row>
  <el-row class="mb-4">
    <el-button plain>Plain</el-button>
    <el-button type="primary" plain>Primary</el-button>
    <el-button type="success" plain>Success</el-button>
    <el-button type="info" plain>Info</el-button>
    <el-button type="warning" plain>Warning</el-button>
    <el-button type="danger" plain>Danger</el-button>
  </el-row>
  <el-row class="mb-4">
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
  </el-row>
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

<style lang="scss" scoped></style>
