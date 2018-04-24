<template>
  <form >
    <h3 class="text-muted my-5">添加新的美食</h3>
    <div class="form-group row">
      <label class="col-sm-1">美食</label>
      <div class="col-sm-11">
          <input type="text" class="form-control" v-model="newFood.name">
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">描述</label>
      <div class="col-sm-11">
          <textarea rows="5" class="form-control" v-model="newFood.description"></textarea>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-1">价格</label>
      <div class="col-sm-11">
          <input type="text" class="form-control" v-model="newFood.price">
      </div>
    </div>
    <div class="form-group row">
      <button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newFood: {}
    };
  },
  methods: {
    addMenuItem() {
      let data = {
        name: this.newFood.name,
        description: this.newFood.description,
        price: this.newFood.price
      };

      // fetch("https://wd5436035796wuzosa.wilddogio.com/menu.json", {
      //   method: "POST",
      //   headers: {
      //     "Content-type": "application/json"
      //   },
      //   body: JSON.stringify(data)
      // })
      //   .then(res => res.json())
      //   .then(data => this.$router.push({name:"menulink"}))
      //   .catch(error => console.log(error));

      // this.$axios.post("menu.json",data).then(res=>this.$router.push({name:'menulink'}))

      //将数据同步到vuex中
       this.$axios.post("menu.json",data).then(res=>this.$store.commit('pushToMenuItems',data))
    }
  }
};
</script>
