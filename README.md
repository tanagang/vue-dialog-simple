 基于vue开箱即用的全局弹窗组件，小巧灵活易用，包括loading，toast，confirm，alert  
 下图gif可能有卡顿，[图片原地址](https://file.40017.cn/tcyp/tz/dialog.gif)  
 
```diff
+ 若适用就来个star鼓励下吧^_^
```
  
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
                this.$showLoading('加载中')//默认“加载中”
            },
            loadingHide(){
                this.$hideLoading()
            }
        }
    }
    </script>
```

### Toast参数
| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| text | toast | `String` | 提示内容 |
| duration | 1.5 | `number` | 显示的时长 |
| callback | none | `Function` | toast消失后的回调 |  

```diff
+如果不需要回调的情况下可以简写：this.$toast('请输入用户名')
```
### confirm参数
| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| title | none | `String` | 提示的标题 |
| text | none | `String` | 提示的内容 |
| titleColor | #333 | `String` | title标题颜色 |
| textColor | #999 | `String` | text文本颜色 |
| sureText | 确定 | `String` | 确定按钮文本 |
| cancelText | 取消 | `String` | 取消按钮文本 |
| sureColor | #333 | `String` | 确定按钮颜色 |
| cancelColor | #999 | `String` | 取消按钮颜色 |
| callback | none | `Function` | 确定的回调 | 
| cancel | none | `Function` | 取消的回调 | 

### alert参数
| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| title | none | `String` | 提示的标题 |
| text | none | `String` | 提示的内容 |
| titleColor | #333 | `String` | title标题颜色 |
| textColor | #999 | `String` | text文本颜色 |
| sureText | 确定 | `String` | 确定按钮文本 |
| sureColor | #F9940E | `String` | 确定按钮颜色 |
| callback | none | `Function` | 确定的回调 | 

### loading参数 
 this.$showLoading('xxx')  
 
 this.$hideLoading()  
  
***
github链接
[链接名称](https://github.com/tanagag/vue-dialog-simple)
