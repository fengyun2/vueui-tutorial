<template>
    <div class="content">
        <div class="container">
            我是index页面呀
            {{ app.title | reverse }}
            {{ app.created_at | timeToNow}}

            <div v-if="app.content | isEmpty">我是空的content</div>
            <div v-else>
              我是content的
            </div>

            <div v-if="app.pic || isImage">
            我是合法的图片

            <img :src="app.pic | SpliceCDNUrl '200' '150' '86' 'scale'" alt="">

            </div>
            <div v-else>
              我是不合法的图片
            </div>
        </div>
    </div>
</template>
<script>
import xss from 'xss'
export default {
    data() {
        return {
          app: {
            title: 'lyapp',
            content: false,
            created_at: '2016-07-02',
            pic: 'http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg'
          }
        }
    },
    ready() {
      const _self = this
      SpliceCDNUrl('http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg', null, '20', null, undefined)

      // var html = xss(`<style>alert("xss");</style>`);
      // console.log(html);
    }
}
</script>
<style scoped></style>
