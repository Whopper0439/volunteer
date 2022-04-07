<template>
  <div class="app">
    <!-- <h2>{{ $store.state.name }}</h2> -->

    <!-- <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  props: {
    name: {
      type: String
    }
  },
  components: {}
})
</script>

<style lang="less">
.app {
  height: 100%;
}
</style>
