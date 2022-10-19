<template>
    <div id="details-root">
        <h2><span class="title">1.发送到发送到快乐番薯打卡了福建省来得及</span></h2>

        <h2><span class="title ">2.介绍</span></h2>

        <el-card shadow="hover">
            <div class="content">数据绑定的一个常见需求场景是操纵元素的 CSS class 列表和内联样式。因为 class 和 style 都是 attribute，我们可以和其他 attribute
                一样使用 v-bind
                将它们和动态的字符串绑定。但是，在处理比较复杂的绑定时，通过拼接生成字符串是麻烦且易出错的。因此，Vue 专门为 class 和 style 的 v-bind
                用法提供了特殊的功能增强。除了字符串外，表达式的值也可以是对象或数组。
            </div>
        </el-card>

        <h2><span class="title download">3.下载地址</span></h2>

        <el-card shadow="hover">
            <div class="extract-code">
                <a href="https://www.baidu.com/" target="_blank" class="wangpan">网盘下载</a>
                <span class="code">提取码:&nbsp;1234</span>
            </div>
        </el-card>



    </div>
</template>


<style lang="scss" scoped>
    @import "../assets/home.scss";

    #details-root {
        width: $home_width_value;
        margin: 0 auto;
    }

    h2 {
        margin-top: 50px;
    }

    .title {
        font-size: 36px;
        color: #8492a6;
    }

    .wangpan {
        color: #20a0ff;
    }

    .extract-code {

        .code {
            color: #555;
            margin-left: 30px;
        }
    }
</style>