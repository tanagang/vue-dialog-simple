import LoadingComponent from './pages/Loading.vue'
import ToastComponent from './pages/Toast.vue'
import ConfirmComponent from './pages/Confirm.vue'
import AlertComponent from './pages/Alert.vue'
import './css/style.css';
var Loading = {
	install: function (Vue, opt) {
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

		var toastTpl = Vue.extend(LoadingComponent) // 创建vue构造器
		var $vm = new toastTpl(); //实例化vue实例
		document.body.appendChild($vm.$mount().$el);
		Vue.prototype.$showLoading = function (options) { //在Vue原型上添加方法，以全局调用
			if (typeof options === 'string') { // 对参数进行判断
				Object.assign($vm, opt) // 合并参数与实例
				$vm.text = options // 传入props
			} else {
				Object.assign($vm, opt, options) // 合并参数与实例
			}
			$vm.show = true // 显示
		}
		Vue.prototype.$hideLoading = function () {
			$vm.show = false // 隐藏
		}
	}
}
//this.$toast({text:'aaa',duration:2000,callback:function(){alert('我是回调函数')}})调用方法
var Toast = {
	install: function (Vue, opt) {
		var toastTpl = Vue.extend(ToastComponent) // 创建vue构造器
		var $vm = new toastTpl(); //实例化vue实例
		document.body.appendChild($vm.$mount().$el);
		Vue.prototype.$toast = function (options) {
			if (typeof options === 'string') { // 对参数进行判断
				Object.assign($vm, opt)
				$vm.text = options // 传入props
			} else {
				Object.assign($vm, opt, options) // 合并参数与实例
			}
			$vm.show = true
		}
	}
}
//使用方法：this.$comfirm({text:'aaa',duration:2000,callback:function(){alert('我是回调函数')}})
var Confirm = {
	install: function (Vue, opt) {
		var comfirmTpl = Vue.extend(ConfirmComponent) // 创建vue构造器
		var $vm = new comfirmTpl(); //实例化vue实例
		document.body.appendChild($vm.$mount().$el);
		// 阻止遮罩滑动
		document.querySelector('#vueConfirm').addEventListener('touchmove', function (e) {
			e.stopPropagation()
			e.preventDefault()
		})
		Vue.prototype.$confirm = function (options) {
			if (typeof options === 'string') { // 对参数进行判断
				Object.assign($vm, opt)
				$vm.text = options // 传入props
			} else {
				Object.assign($vm, opt, options) // 合并参数与实例
			}
			$vm.show = true;
		}
		Vue.prototype.$confirmHide = function (options) {
			$vm.show = false
		}
	}
}
//使用方法：this.$comfirm({text:'aaa',duration:2000,callback:function(){alert('我是回调函数')}})
var Alert = {
	install: function (Vue, opt) { //opt是main.js中use中的参数
		var comfirmTpl = Vue.extend(AlertComponent) // 创建vue构造器
		var $vm = new comfirmTpl(); //实例化vue实例
		document.body.appendChild($vm.$mount().$el);
		// 阻止遮罩滑动
		document.querySelector('#vueAlert').addEventListener('touchmove', function (e) {
			e.stopPropagation()
			e.preventDefault()
		})
		Vue.prototype.$alert = function (options) {
			if (typeof options === 'string') { // 对参数进行判断
				Object.assign($vm, opt)
				$vm.text = options // 传入props
			} else {
				Object.assign($vm, opt, options) // 合并参数与实例
			}
			$vm.show = true;
		}
	}
}

export {
	Loading,
	Toast,
	Confirm,
	Alert
}