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
  z-index: 8;
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
  background: rgba(40, 40, 40, 0.72);
  line-height: 1.6;
  max-width: 70%;
  min-width: 80px;
  color: #fff;
  font-size: 14px;
  padding: 8px 24px;
  text-align: center;
  margin-top: -50px;
  border-radius: 4px;
}
.slide-enter-active,
.slide-leave-active {
  -webkit-transition: all 0.1s ease;
  transition: all 0.1s ease;
}
.slide-enter,
.slide-leave-to {
  -webkit-transform: translateY(-2px);
  transform: translateY(-2px);
  opacity: 0;
}
</style>
