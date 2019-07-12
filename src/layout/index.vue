<template>
  <div>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="10%"><Sidebar-item /></el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
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

.el-aside {
  background-color: #FFFFFF;
  color: #333;
  text-align: center;
  /* line-height: 200px; */
  float: left;
  width: 10%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  float: left;
  width: 90%;
}
.el-container {
  overflow: hidden;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
