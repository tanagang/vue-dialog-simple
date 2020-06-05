<template>
  <div>
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
var clr;
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
      default: 2000
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
        this.duration = 2000;
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
      if (clr) {
        //如果手速过快，即把上一次的timer清除
        clearTimeout(clr);
      }
      clr = setTimeout(() => {
        this.show = false;
        this.callback();
      }, this.duration);
    }
  }
};
</script>
<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  width: 100%;
  margin: auto;
  display: table;
}
.loading {
  width: 100%;
  justify-content: center;
}
.loading i {
  font-style: normal;
  font-weight: normal;
  background: rgba(40, 40, 40, 0.8);
  line-height: 1.6;
  max-width: 85%;
  min-width: 100px;
  color: #fff;
  font-size: 14px;
  padding: 8px 20px;
  text-align: center;
  margin-top: -50px;
  border-radius: 4px;
  word-break:break-all
}
.slide-enter-active,
.slide-leave-active {
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
.slide-enter{
  -webkit-transform: translateY(8px);
  transform: translateY(8px);
  opacity: 0;
}
.slide-leave-to {
  -webkit-transform: translateY(-8px);
  transform: translateY(-8px);
  opacity: 0;
}
</style>
