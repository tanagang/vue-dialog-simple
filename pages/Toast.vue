<template>
  <div>
    <div class="mask" v-show="false"></div>
    <transition name="slide">
      <div class="wrap" v-show="show">
        <div class="loading">
          <i>{{text}}</i>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
//this.$toast({text:'abc',callback:function(){alert('我是回调函数')}});调用示例
export default {
  props: {
    show: {
      // 是否显示此toast
      type: Boolean,
      default: false
    },
    text: {
      // 提醒文字
      type: String,
      default: "toast"
    },
    duration: {
      type: Number,
      default: 1500
    },
    callback: {
      type: Function,
      default() {
        return function() {};
      }
    }
  },
  watch: {
    show() {
      if (!this.show) {
        this.duration = 1500;
        this.callback = function() {};
      } else {
        this.autoClose();
      }
    }
  },
  mounted() {
    this.autoClose();
  },
  methods: {
    autoClose() {
      var clr = setTimeout(() => {
        this.show = false;
        this.callback();
        clearTimeout(clr);
      }, this.duration);
    }
  }
};
</script>
<style scoped>
.mask {
  position: fixed;
  left: 0;
  top: 0;
  background: transparent;
  width: 100%;
  height: 100%;
}
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: table;
	width: 100%;
	height:100%;
}
.loading {
  margin: 0 auto;
}
.loading i {
  font-style: normal;
  font-weight: normal;
  position: fixed;
  left: 50%;
  top: 45%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  display: block;
	background: rgba(40, 40, 40, 0.8);
	max-width: 600px;
	width:65%;
  color: #fff;
  font-size: 14px;
  padding: 5px 16px;
  text-align: center;
  text-shadow: 2px 2px 1px #000;
  border-radius: 5px;
}
.slide-enter-active,
.slide-leave-active {
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
}
.slide-enter,
.slide-leave-to {
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px);
  opacity: 0;
}
</style>