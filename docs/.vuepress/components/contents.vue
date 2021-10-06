<template>
  <div class="container">
    <el-button
      plain
      class="button"
      icon="el-icon-s-operation"
      @click="showContents"
      v-if="isShow==false"
    >目录</el-button>

    <el-card shadow="hover" v-if="isShow" class="tocCard">
      <i class="el-icon-close" @click="showContents"></i>
      <TOC :include-level="[2, 4]" />
    </el-card>
  </div>
</template>
<script>
export default {
  name: "contents",
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    showContents() {
      this.isShow = !this.isShow
    }
  }
}
</script>
<style scoped>
.container {
  position: fixed;
  right: 100px;
  top: 58.5px;
  width: auto;
  padding: 0px 5px;
  text-align: left;
  z-index: 4;
  /* border-left: 1px solid rgba(0, 127, 255, 0.2); */
  /* box-shadow: -1px 0 2px 0.5px rgba(0, 127, 255, 0.2); */
  /* 透明度：全透明 */
  /* opacity: 0.5; */
}
.button {
  font-size: 14px;
  right: 10px;
  position: fixed;
  z-index: 1;
}

.tocCard {
  height: 700px;
  overflow-y: scroll;
  /* right: 1px; */
  position: fixed;
  right: 10px;
  width: auto;
}
.el-icon-close {
  font-size: 22px;
  position: fixed;
  right: 2.5%;
}
/* @media screen and (max-width: 1360px) {
  .toc {
    display: none;
  }
} */
</style>