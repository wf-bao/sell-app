<template>
  <div class="App">
      <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Button } from 'vant';
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class App extends Vue {}
</script>

<style lang="scss">
.App {
  // width: 100%;
  height: 100%;
  background-color: #fff;
}
html{
  background-color: pink;
}
</style>