<template>
  <div class="about">
    <el-container>
      <el-header>
        <h3>uni-admin</h3>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="rgb(68, 61, 61)"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/about/index">首页</el-menu-item>
          <el-menu-item index="/about/shop">商品</el-menu-item>
          <el-menu-item index="1">订单</el-menu-item>
          <el-submenu index="2">
            <template slot="title">{{$store.state.name}}</template>
            <el-menu-item index="2-1">设置</el-menu-item>
            <el-menu-item><p @click="del">退出</p></el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
      <el-main>
      <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex:"/about/index"
    }
  },
  methods: {
    del(){
      // this.$axios.post("http://ceshi5.dishait.cn/admin/logout").then(res=>{
      //   console.log(res)
      // })
      sessionStorage.removeItem("token")
      this.$router.push('/')
      this.$message.success("退出成功")
    }
  },
};
</script>

<style lang="scss" scoped>
.about {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .el-container {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    .el-header {
      width: 100%;
      height: 5%;
      padding: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: rgb(68, 61, 61);
      h3{
        color: #fff;
      }
    }
    .el-main {
      width: 100%;
      flex: 1;
      padding: 0;
    }
  }
}
</style>
