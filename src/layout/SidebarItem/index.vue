<template>
  <div class="menu">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        :unique-opened="false"
        mode="vertical"
        @open="handleOpen"
        @close="handleClose"
      >
        <Sidebar-item v-for="(item, index) in permission_routes" :key="index" :item="item" :base-path="item.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>
<script>
import SidebarItem from './SidebarItem'
import { mapGetters } from 'vuex'
import variables from '@/style/variables.scss'
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
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    }
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
    },
    variables() {
      return variables
    }
  }
}
</script>
<style lang='less' scoped>
</style>
