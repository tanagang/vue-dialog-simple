

<template>
  <div>
    <div class="mask" v-show="false"></div>
    <transition name="slide">
      <div class="wrap" v-show="show">
        <div class="loading flex">
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
  z-index: 8;
  width: 100%;
  height: 100%;
  display: table;
}
.loading {
  width: 100%;
  height: 100%;
  justify-content: center;
}
.loading i {
  font-style: normal;
  font-weight: normal;
  background: rgba(40, 40, 40, 0.8);
  line-height: 1.6;
  max-width: 70%;
  min-width:100px;
  color: #fff;
  font-size: 14px;
  padding: 8px 24px;
  margin-top:-50px;
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
