<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../assets/images/login.svg" alt="">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="username">用户名</label>
                <input
                type="text"
                class="form-control"
                v-model="username"
                >
              </div>
              <div class="form-group">
                <label for="password">密码</label>
                <input
                type="password"
                class="form-control"
                v-model="password"
                >
              </div>

              <button type="submit" class="btn btn-block btn-success">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
   //进入组件路由
  beforeRouteEnter:(to, from, next) => {
    next(vm=>{
      vm.$store.dispatch("setUser",null)
    })
  },
  methods: {
    onSubmit() {
      axios.get("/users.json").then(res => {
        const data = res.data;
        const users = [];
        for (let key in data) {
          const user = data[key];
          users.push(user);
        }
        // console.log(users)
        //实现过滤
        let result = users.filter(user => {
          return (
            user.username === this.username && user.password === this.password
          );
        });
        //判断result大于0
        if(result!=null&&result.length>0){
          console.log(result[0].username)
           this.$store.dispatch("setUser",result[0].username)
          this.$router.push({name:'homelink'})

        }else{
          alert('账号密码错误')
          this.$store.dispatch("setUser",null)
        }
      });
    }
  }
};
</script>

