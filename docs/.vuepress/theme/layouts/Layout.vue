<script setup>
import ParentLayout from "@vuepress/theme-default/lib/client/layouts/Layout.vue";
</script>

<template>
  <ParentLayout>
    <template #page-bottom>
      <div class="my-footer">
        <span class="announcement"
          >&copy; 2022 <a href="//blog.skymkmk.com" target="_blank">天空sky°</a>、<a
            href="//space.bilibili.com/23315579"
            target="_blank"
            >根瘤菌rkzj</a
          >、<a href="//github.com/I-love-study" target="_blank">I Love Study</a
          >，本文档采用<a
            href="//creativecommons.org/licenses/by-nc-nd/4.0/deed.zh"
            target="_blank"
            >署名-非商业性使用-禁止演绎 4.0 国际<img
              src="../icons/cc.svg"
              alt="创意共享"
              style="
                height: 1.2em;
                width: 1.2em;
                margin-left: 0.2em;
                vertical-align: text-bottom;
              " /><img
              src="../icons/by.svg"
              alt="署名"
              style="
                height: 1.2em;
                width: 1.2em;
                margin-left: 0.2em;
                vertical-align: text-bottom;
              " /><img
              src="../icons/nc.svg"
              alt="非商业性使用"
              style="
                height: 1.2em;
                width: 1.2em;
                margin-left: 0.2em;
                vertical-align: text-bottom;
              " /><img
              src="../icons/nd.svg"
              alt="禁止演绎"
              style="
                height: 1.2em;
                width: 1.2em;
                margin: 0 0.2em;
                vertical-align: text-bottom;
              " /></a
          >协议授权，另有声明的除外。</span
        >
      </div>
      <div class="my-footer">
        <span class="announcement"
          ><a href="//beian.miit.gov.cn" target="_self">津ICP备2021003534号-2</a></span
        >
        <span class="announcement"
          ><a
            href="//www.beian.gov.cn/portal/registerSystemInfo?recordcode=34019102000913"
            target="_self"
            ><img
              src="../icons/beian.webp"
              alt="公安备案"
              style="margin: 0 0.2em; vertical-align: text-bottom"
            />皖公网安备 34019102000913号</a
          ></span
        >
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
  margin: 0 2em;
}
.announcement {
  display: inline-block;
  line-height: 2em;
  margin: 0.2em;
}
</style>
