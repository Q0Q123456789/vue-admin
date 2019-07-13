<template>
  <div class="menu">
    <el-scrollbar height="100%">
      <el-menu
        default-active="1-1-1"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <Sidebar-item />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'
export default {
  name: 'MenuPage',
  components: {
    SidebarItem
  },
  data() {
    return {
      isCollapse: false
    }
  },
  computed: {
    ...mapGetters([
      'permission_routes'
    ])
  },
  watch: {},
  created() {
    console.log(this.permission_routes)
  },
  mounted() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang='less' scoped>
</style>
