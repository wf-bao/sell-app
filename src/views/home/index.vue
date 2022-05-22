<template>
  <div class="home">
    <!-- 头部 -->
    <div class="header df">
      <img class="ava" :src="shopData.avatar" />
      <div class="info df fdc jcsa f1">
        <h3>{{ shopData.name }}</h3>
        <div class="time">
          {{ shopData.description }}/{{ shopData.deliveryTime }}分钟送达
        </div>
        <div class="supports">
          {{ shopData.supports[0] }} {{ shopData.supports[1] }}
        </div>
      </div>
      <!-- 背景 -->
      <div class="musk"></div>
      <img class="musk-img" :src="shopData.avatar" />
      <!-- 广告 -->
      <van-notice-bar
        color="#fff"
        left-icon="volume-o"
        :text="shopData.bulletin"
      />
    </div>
    <!-- 内容 -->
    <div class="content">
      <!-- 导航栏 -->
      <!-- 点击跳转，等同于vue-router的to跳转 -->
      <van-tabs v-model="active">
        <van-tab
          v-for="item in navList"
          :key="item.path"
          :title="item.title"
          :to="item.path"
        ></van-tab>
      </van-tabs>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
//辅助
import { mapActions, mapState } from "vuex";

//导航数据类型的约束
interface INav {
  title: string;
  path: string;
}

@Component({
  // 数据
  computed: {
    ...mapState(["shopData"]),
  },
  // 方法
  methods: {
    ...mapActions(["get_shop_data"]),
  },
})
export default class Index extends Vue {
  // 导航栏数据
  navList: Array<INav> = [
    { title: "商品", path: "/home/goods" },
    { title: "评价", path: "/home/comment" },
    { title: "商家", path: "/home/shops" },
  ];
  //导航索引
  active: number = 1;
  //占位
  get_shop_data: any;
  //生命周期
  created() {
    this.get_shop_data();
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  .header {
    height: 200px;
    background-color: aqua;
    overflow: hidden;
    position: relative;
    padding: 20px;
    .ava {
      width: 120px;
      height: 120px;
      border-radius: 10px;
      position: relative;
      z-index: 8;
    }
    .musk {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      z-index: 1;
    }
    .musk-img {
      position: absolute;
      top: -20px;
      left: -20px;
      width: 120%;
      z-index: 0;
      filter: blur(3px);
    }
    .info {
      height: 120px;
      margin-left: 20px;
      position: relative;
      z-index: 9;
      color: white;
      h3 {
        font-size: 18px;
      }
      .time {
        font-size: 16px;
      }
      .supports {
        font-size: 16px;
        word-break: keep-all;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .content {
    height: 100%;
    background-color: hotpink;
  }
}
.van-notice-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background: rgba(0, 0, 0, 0.3);
}
::v-deep .van-tab--active{
  color: orange;
}
::v-deep .van-tabs__line{
  background-color:orange;
}
</style>