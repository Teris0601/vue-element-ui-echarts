<template>
 <div>
      <el-row style="padding:20px;border-bottom:1px solid #bdbdbd;">
        <el-col :span="4">
          <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input21">
        </el-input>
        </el-col>
        <el-col :span="2" style="height:40px;background:green;line-height:40rpx;margin-left:10px;border-radius:6px;">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link" style="width:100%;height:100%;line-height:40px;color:#fff;">
              全部<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu size="medium"  split-button type="primary" slot="dropdown">
              <el-dropdown-item>全部</el-dropdown-item>
              <el-dropdown-item>未付款</el-dropdown-item>
              <el-dropdown-item>已付款</el-dropdown-item>
              <el-dropdown-item>待发货</el-dropdown-item>
              <el-dropdown-item>待评价</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>

  
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="创建时间"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="订单编号"
      width="300">
      <template slot-scope="scope">
         <span style="margin-left: 10px">{{  scope.row.order_num }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="商品名称"
      width="180">
      <template slot-scope="scope">
         <span style="margin-left: 10px">{{  scope.row.order_name }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="订单总价"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.order_total }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="订单状态"
      width="240">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.order_status}}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">详情</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>

    
  </el-table>

  <el-dialog title="订单详情" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
<el-row style="margin-top:10px;">
   <el-col :span="4">
       <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
       </el-pagination>
   </el-col>
</el-row>

</div>
</template>

<script>
  export default {
    data() {
        var a={
            date: '2018-06-30',
            order_num:'4533223212211112133123323231',
            order_total:'1982',
            order_name:'美味可口的泰国大芒果',
            order_status:'已付款',
            order_apple_name:'小明'
        };
        var arr=[];
        arr.length=13;
        var b=arr.fill(a);
        
      return {
        tableData: b,
        dialogFormVisible: false,
        form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
        },
        formLabelWidth: '120px',
        input21:''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
         this.dialogFormVisible = true;
       
      },
      handleDelete(index, row) {
        console.log(index, row);
          const h = this.$createElement;
        this.$msgbox({
          title: '消息',
          message: h('p', null, [
            h('span', null, '确定删除 '),
            h('i', { style: 'color: teal' }, '该用户')
          ]),
          showCancelButton: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      
      },
     
    }
  }
</script>

<style>
 .el-table th{
     text-align:center !important;
 }
</style>
