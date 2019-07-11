<template>
  <div class="menu">
    <el-scrollbar height="100%">
      <el-menu
        default-active="1-1-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
      <Sidebar-item></Sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import SidebarItem from './SidebarItem'
export default {
  name: 'menu',
  data () {
    return {
      isCollapse: false
    }
  },
  components: {
    SidebarItem
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang='less' scoped>
</style>
