基于vue开箱即用的全局弹窗组件，小巧灵活易用，包括loading，toast，confirm，alert  
下图gif可能有卡顿，[图片原地址](https://file.40017.cn/tcyp/tz/dialog.gif)  

  ![](https://file.40017.cn/tcyp/tz/dialog.gif)
### 使用方法.
```js
    首先在项目中安装：npm install vue-dialog-simple -S
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
        methods:{
            toast(){
                this.$toast({
                    text:'请输入用户名',
                    callback:()=>{
                        console.log('哈哈，我是toast后的回调')
                    }
                })
                //如果不需要回调的情况下可以简写：this.$toast('请输入用户名')
            },
            confirm(){
                this.$confirm({
                    title:'友情提示',
                    text:'你确定此操作吗',
                    titleColor:'#333',//重置title颜色(默认)
                    textColor:'#999',//重置text颜色(默认)
                    sureText:'确定',//(默认)
                    cancelText:'取消',//(默认)
                    sureColor:'#f60',//重置sureText颜色(默认)
                    cancelColor:'#999',//重置cancelText颜色(默认)
                    callback:()=>{
                        console.log('你点击了confirm的确定')
                    },
                    cancel:()=>{
                        console.log('你点击了confirm的取消')
                    }
                })
            },
            alert(){
                this.$alert({
                    title:'友情提示',
                    text:'你确定此操作吗',
                    titleColor:'#333',//重置title颜色(默认)
                    textColor:'#999',//重置text颜色(默认)
                    sureText:'确定',//(默认)
                    sureColor:'#f60',//(默认)
                    callback:()=>{
                        console.log('你点击了alert的确定')
                    }
                })
            },
            loadingShow(){
                this.$loading.show('加载中')//默认“加载中”
            },
            loadingHide(){
                this.$loading.hide()
            }
        }
    }
    </script>
```
***
github链接
[链接名称](https://github.com/tanagag/vue-dialog-simple)
