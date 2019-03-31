基于vue开箱即用的全局弹窗组件，小巧灵活易用，包括loading，toast，confirm
### 使用方法
```js
    首先安装：npm install vue-dialog-simple -S
    //main.js
    import {Loading,Toast,Confirm} from 'vue-dialog-simple'
    Vue.use(Loading)
    Vue.use(Toast)
    Vue.use(Confirm)
    //template
    <template>
        ...
    </template>
    <script>
    export default {
        mounted(){
            this.$loading.show('努力加载中')//loading显示，默认参数'加载中'
            this.$loading.hide()//loading消失

            this.$toast({
                text:'请输入用户名',//显示toast的信息
                duration:'2000'//持续时间
            })

            this.$confirm({
                title:'提示',//标题
                text:'确定取消吗',//内容
                sureText:'确定',//默认
                cancelText:'取消',//默认
                //defaultText:'知道了',//此值若存在，相当于Alert功能，sureText和cancelText将无效
                color:'#f60',//确定按钮的颜色
                callback:function(){//回调函数
                    alert('点击了确定')
                },
                cancel:function(){
                    alert('您取消了操作')
                }
            })
        },
    }
    </script>
```
***
github链接
[链接名称](https://github.com/tanagag/npm-publish/tree/master/vue-dialog-simple)
