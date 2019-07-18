<template>
  <div>
    <div class="app-wrapper openSidebar">
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <Sidebar-item class="sidebar-container" />
        <el-main class=" hasTagsView main-container ">
          <div class="app-main">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>
<script>
import Header from './header'
import SidebarItem from './SidebarItem'
export default {
  components: {
    Header,
    SidebarItem
  },
  data() {
    return {}
  }
}
</script>
<style>
.el-header,
.el-footer {
  background-color: #FFFFFF;
  color: #333;
  text-align: center;
  line-height: 60px;
}
</style>
