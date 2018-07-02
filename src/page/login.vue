<template>
  <div class="login-con">
     <div class="login-container">
        <transition name="form-fade" mode="in-out">
        <section class="form_contianer" v-show="showLogin">
		  	<div class="manage_tip">
		  		<p>鲜花商城管理系统</p>
		  	</div>
        <div style="width:70%; margin-left:15%;margin-top:30px;">
            <el-form :label-position="labelPosition" :model="formLoginAlign"  ref="formLoginAlign">
                <el-form-item>
                    <el-input v-model="formLoginAlign.username" placeholder="登录名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="formLoginAlign.password" placeholder="密码" style="background:#f5f5f5"></el-input>
                </el-form-item>
                 <el-form-item>
                    <el-button type="primary" :loading="false" @click="submitForm('formLoginAlign')" class="login-btn">登录</el-button>
                </el-form-item>
        </el-form>
       </div>
       </section>
     </transition>
    </div>
</div>
</template>


<script>
export default {
    data() {
      return {
        showLogin:true,
        labelPosition: 'left',
        formLoginAlign: {
          username: '',
          password: '',
        }
      };
    },
    created(){
        this.ckeckJs();
    },
    methods:{
         
           async submitForm(formLoginAlign) {
                this.$router.push({
                    name:'show'
                })
				// var _this=this;
				// this.$refs[formLoginAlign].validate(async (valid) => {
				
				// 	if (valid) {
				// 		console.log(this.formLoginAlign);
				// 		var name=this.formLoginAlign.username,
				// 			pwd=this.formLoginAlign.password;
                //         var getData={"username":name,"password":pwd};
                //         console.log(getData);
				// 		//const res = await login({user_name: this.loginForm.username, password: this.loginForm.password})
				// 		_this.$http.post('index',getData)
				// 		.then(res=>{
				// 			console.log(res.data)
				// 			if(res.data.code==4){
				// 			  this.$message({
		        //                 type: 'success',
		        //                  message: res.data.msg
		        //               });
				// 		 	this.$router.push('home')
				// 			}else{
				// 				this.$message({
		        //                 type: 'success',
		        //                  message: res.data.msg
		        //               });
				// 			}
				// 			})
							
				// 		.catch(err=>{console.log(err)});
						
				// 	} else {
				// 		this.$notify.error({
				// 			title: '错误',
				// 			message: '请输入正确的用户名密码',
				// 			offset: 100
				// 		});
				// 		return false;
				// 	}
				// });
			},
       
           ckeckJs(){
               console.log(1)
                // let promiseDemo = new Promise((resolve, reject) => {
                //     console.log(2)
                //     setTimeout(() => {
                //         let random = Math.random()
                //         if (random >= 0.2) {
                //             resolve('success')
                //             console.log(3)
                //         } else {
                //             reject('failed')
                //             console.log(3)
                //         }   
                //     }, 1000)
                // })

                // async function test() {
                //     console.log(4)
                //     let result = await promiseDemo
                //     return result
                // }

                // test().then(result => {
                //     console.log(5)
                // }).catch((result) => {
                //     console.log(5)
                // })
                setTimeout(()=>{
                    console.log(3);
                },1000)
                console.log(6)

           }
         
    }
}
</script>



<style lang="less" scoped>
   .login-con{
       width:100%;
       height:100vh;
       background:url('../assets/img/timg.jpg') no-repeat;
       background-size: cover;
       background-position: center;
   }
  .login-container{
      width:400px;
      height:300px;
      position: fixed;
      top:50%;
      left:50%;
      transform: translateX(-50%) translateY(-50%);
      background:#fff;
      border-radius: 6px;
  }
  .login-btn{
      width:100%;
  }
  .manage_tip{
      font-size: 30px;
  }
  .form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
</style>



