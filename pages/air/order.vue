<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <!-- 订单表单 -->
      <OrderForm />
      <!-- <OrderForm @setInfoData="setInfoData" /> -->

      <!-- 侧边栏 -->
      <OrderAside :data="$store.state.air.infoData" />
    </el-row>
  </div>
</template>

<script>
import OrderForm from "@/components/air/orderForm.vue";
import OrderAside from "@/components/air/orderAside";
export default {
  components: {
    OrderForm,
    OrderAside
  },
  methods: {
    // 给子组件使用的，返回机票订单的信息
    // setInfoData(data){
    //     this.infoData = data;
    // }
  }
};
</script>

<style lang="less" scoped>
.container {
  width: 1000px;
  margin: 20px auto;
}

/*aside*/
.aside {
  width: 350px;
  height: fit-content;
  border: 1px #ddd solid;
}
</style>