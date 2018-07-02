<template>
<div class="home-container">
  
       <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64"
  text-color="#fff">
        <el-menu-item index="1" @click="IsOpenMenu">展开菜单</el-menu-item>
        <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">退出登录</a></el-menu-item>
       </el-menu>
   
   
    <el-row style="height:100%;width:100%;">
        <el-col :span='w1' style="min-height: 100%; background-color: #324057;">
           <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#324057"
  text-color="#fff" router>
                <el-menu-item index="show">
                    <i class="el-icon-menu"></i>
                    <span slot="title" style="">进入首页</span>
                </el-menu-item>
                <el-submenu index="2">
                   
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span slot="title">用户管理</span>
                    </template>
                    <el-menu-item-group>
                   
                        <el-menu-item index="user">用户列表</el-menu-item>
                        <el-menu-item index="userspread">用户分布</el-menu-item>

                    </el-menu-item-group>
                  
                   
                </el-submenu>
               
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-document"></i>
                        <span slot="title">订单管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="order">订单列表</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-view"></i>
                        <span slot="title">商家管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="shop">商家列表</el-menu-item>
                        <el-menu-item index="1-2">商家信息</el-menu-item>
                        <el-menu-item index="addgood">添加商品</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-goods"></i>
                        <span slot="title">商品管理</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="good">商品列表</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

                <el-submenu index="6">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span slot="title">系统设置</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="setsystem">管理员设置</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>

            </el-menu>
        </el-col>
        <el-col :span='w2' style="height: 100%;overflow: auto;">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </el-col>
    </el-row> 
   
</div>
   
    
    
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .home-container{
      width:100%;
      height:100vh;
  }
  .home-container-header{
      height:8%;
      width:100%;
    
  }
  .home-container-section{
      height:92%;
      display: flex;
      flex-direction: row;
  }
  .home-container-section-silder{
      width:20%;
      height:100%;
      background:#545c64;
  }
  .home-container-section-main{
      width:80%;
      height:100%;
     
  }
 .el-menu-demo{
     justify-content: flex-end;
 }
</style>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        activeIndex: '1',
        tableData: Array(20).fill(item),
        isCollapse: false,
        w1:3,
        w2:21
      }
    },
     methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key, keyPath){
        console.log(key, keyPath);
      },
      IsOpenMenu(){
          this.isCollapse=!this.isCollapse;
          if(this.isCollapse){
              this.w1=1;
              this.w2=23
          }else{
              this.w1=3;
              this.w2=21
          }
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  };
</script>

<style lang="less" scoped>
.el-table th{
    text-align: center !important;
}
</style>
