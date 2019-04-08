import LoadingComponent from './pages/Loading.vue'
import ToastComponent from './pages/Toast.vue'
import ConfirmComponent from './pages/Confirm.vue'
import './css/style.css';

const Loading = {
	install:function(Vue,options){
		// if(options){
		// 	let arr =  Object.keys(options)
		// 	let arrText = Object.values(options)
		// 	for(var i = 0;i < arr.length; i++){
		// 		LoadingComponent.props[arr[i]].default = arrText[i]
		// 	}
		// }
		//options传参方式
		//import Loading2 from './components/loading/index.js'
		//Vue.use(Loading2,{msg:"测试loading",size:2})

		let toastTpl = Vue.extend(LoadingComponent) // 创建vue构造器
		let $vm = new toastTpl();//实例化vue实例
		document.body.appendChild($vm.$mount().$el);
		Vue.prototype.$loading = {//在Vue原型上添加方法，以全局调用
		  show(options) { // 控制toast显示的方法
		   if (typeof options === 'string') { // 对参数进行判断
		    $vm.text = options // 传入props
		   }
		   else if (typeof options === 'object') {
		    Object.assign($vm, options) // 合并参数与实例
		   }
		   $vm.show = true // 显示toast
		  },
		  hide() { // 控制toast隐藏的方法
		   $vm.show = false
		  }
		}
	}
}
//this.$toast({text:'aaa',duration:2000,callback:function(){alert('我是回调函数')}})调用方法
const Toast = {
	install:function(Vue,options){
		let toastTpl = Vue.extend(ToastComponent) // 创建vue构造器
		let $vm = new toastTpl();//实例化vue实例
		document.body.appendChild($vm.$mount().$el);
		Vue.prototype.$toast = function(options){
		   if (typeof options === 'string') { // 对参数进行判断
		    $vm.text = options // 传入props
		   }
		   else if (typeof options === 'object') {
		    Object.assign($vm, options) // 合并参数与实例
		   }
		   $vm.show = true
		}
		
		// Vue.prototype.$toast = {//在Vue原型上添加方法，以全局调用
		//   show(options) { // 控制toast显示的方法
		//    if (typeof options === 'string') { // 对参数进行判断
		//     $vm.text = options // 传入props
		//    }
		//    else if (typeof options === 'object') {
		//    	console.log(options)
		//     Object.assign($vm, options) // 合并参数与实例
		//    }
		//    $vm.show = true // 显示toast
		//   },
		//   hide() { // 控制toast隐藏的方法
		//    $vm.show = false
		//   }
		// }
	}
}
//使用方法：this.$comfirm({text:'aaa',duration:2000,callback:function(){alert('我是回调函数')}})
const Confirm = {
	install:function(Vue,options){
		let comfirmTpl = Vue.extend(ConfirmComponent) // 创建vue构造器
		let $vm = new comfirmTpl();//实例化vue实例
		document.body.appendChild($vm.$mount().$el);
		// 阻止遮罩滑动
		document.querySelector('#vueConfirm').addEventListener('touchmove', function (e) {
		  e.stopPropagation()
		  e.preventDefault()
		 })
		Vue.prototype.$confirm = function(options){
		   if (typeof options === 'string') { // 对参数进行判断
		    $vm.text = options // 传入props
		   }
		   else if (typeof options === 'object') {
		    Object.assign($vm, options) // 合并参数与实例
		   }
		   $vm.show = true;
		}
		Vue.prototype.$confirmHide = function(options){
		   $vm.show = false
		}

		// Vue.prototype.$toast = {//在Vue原型上添加方法，以全局调用
		//   show(options) { // 控制toast显示的方法
		//    if (typeof options === 'string') { // 对参数进行判断
		//     $vm.text = options // 传入props
		//    }
		//    else if (typeof options === 'object') {
		//    	console.log(options)
		//     Object.assign($vm, options) // 合并参数与实例
		//    }
		//    $vm.show = true // 显示toast
		//   },
		//   hide() { // 控制toast隐藏的方法
		//    $vm.show = false
		//   }
		// }
	}
}


export  {Loading,Toast,Confirm}