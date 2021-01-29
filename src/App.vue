<template>
  <div id="app">
    <el-table
      :data="list_paging"
      style="width: 100%">
      <el-table-column
        prop="userId"
        label="userId"
        width="180">
      </el-table-column>
      <el-table-column
        prop="id"
        label="id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="title">
      </el-table-column>
        <el-table-column
        prop="body"
        label="body">
      </el-table-column>
    </el-table>
    
 
    <el-pagination background layout="prev, pager, next" @current-change="set_page" :page-size="limit" :total="totalData">
    </el-pagination>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import {mapState, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    this.$store.dispatch("loadData");
  },
  computed: {
    ...mapState(["totalData","page","limit"]),
    ...mapGetters(['list_paging'])
    
  },
  methods:{
    set_page(page){
        this.$store.commit('set_page',page)
    }
  }
};

</script>

<style>

table {
  border-collapse: collapse;
}
</style>
