<template>
  <div class="home">
    <div>
      <h3>uni-admin</h3>
      <el-form :model="numberValidateForm">
        <el-form-item prop="username">
          <el-input
            type="text"
            prefix-icon="el-icon-user-solid"
            v-model.number="numberValidateForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="text"
            prefix-icon="el-icon-lock"
            v-model.number="numberValidateForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login()">登录</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberValidateForm: {
        username: "admin",
        password: "admin",
      },
    };
  },
  methods: {
    login() {
      if(this.numberValidateForm.username==''||this.numberValidateForm.password==''){
        return this.$message.warning("用户名或密码不能为空")
      }
      this.$axios
        .post("http://ceshi5.dishait.cn/admin/login", this.numberValidateForm)
        .then((res) => {
          console.log(res);
          if (res.data.data.status == 1) {
            sessionStorage.setItem("token", res.data.data.token);
            this.$router.push("/about");
            this.$store.state.name=res.data.data.username
            this.$message.success("登陆成功");
          } else {
            this.$message.erroe("登陆失败");
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    width: 300px;
    height: 200px;
    background-color: rgb(101, 89, 212);
    padding: 20px 10px;
    h3 {
      text-align: center;
      padding: 0 0 8px 0;
      color: #fff;
    }
    .el-form-item {
      text-align: right;
    }
  }
}
</style>
