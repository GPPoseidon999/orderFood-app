<template>
  <div class="row home-f">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>欢迎使用外卖点餐系统</h1>
        <h2>这里有你非常喜欢的食物</h2>
          <button @click="goToMenu" class="btn btn-success">Let's order!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goToMenu() {
      //跳转到上一次浏览的页面
      // this.$router.go(-1);

      //指定跳转的地址
      // this.$router.replace('/menu')

      //指定跳转路由的名字(name属性)下
      // this.$router.replace({name:'menulink'})

      //通过push进行跳转
      // this.$router.push('/menu')
      this.$router.push({ name: "menulink" });
    }
  }
};
</script>

<style scoped>
#home {
  background: url("../assets/images/home.jpg") no-repeat;
  background-size: 100%;
  height: 85vh;
  padding: 10%;
}
h1,
h2 {
  margin: 6%;
}

.home-f {
  margin: 0;
}

.background {
  background: #eee;
  opacity: 0.9;
  max-width: 70vw;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
}
</style>

