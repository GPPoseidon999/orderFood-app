<template>
  <div class="row">
    <div class="col-md-8 col sm-12">
      <!-- 新建美食 -->
      <app-new-food></app-new-food>
    </div>
    <div class="col-md-4 col-sm-12">
      <!-- 美食展示 -->
      <h3 class="text-muted my-5">美食菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>美食</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItem" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
            <td><button @click="deleteData(item)" class="btn btn-outline-danger btn-sm">&times;</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import newFood from "../components/newFood.vue";
export default {
  data() {
    return {
        // getMenuItem: []
    };
  },
  computed:{
    getMenuItem:{
      //在vuex中获取数据
      get(){
        // return this.$store.state.menuItems
         return this.$store.getters.getMenuItems
      },
      set(){

      }
    }
  },
  components: {
    "app-new-food": newFood
  },
  created() {
    fetch("https://wd5436035796wuzosa.wilddogio.com/menu.json")
      .then(res => {
        return res.json();
      })
      .then(data => {
        // console.log(data)
        let menuArray = [];
        for (let key in data) {
          data[key].id = key;
          menuArray.push(data[key]);
        }
        //数据同步
        this.$store.commit('setMenuItems',menuArray)
        // this.getMenuItem = menuArray;
      });
  },
  methods: {
    deleteData(item) {
      fetch(
        "https://wd5436035796wuzosa.wilddogio.com/menu/" + item.id + "/.json",
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json"
          }
        }
      )
        .then(res => res.json())
        // .then(data => this.$router.push({name:'menulink'}))
         .then(data => this.$store.commit('removeMenuItems',item))
        .catch(error => console.log(error));
    }
  }
 

  //离开组件路由
  // beforeRouteLeave:(to, from, next) => {
  //   if(confirm("确定离开吗？")==true){
  //     next()
  //   }else{
  //     next(false)
  //   }

  // }
};
</script>
