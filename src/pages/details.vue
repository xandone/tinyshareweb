<template>
    <div id="details-root">
        <h2><span class="title">1.标题</span></h2>

        <el-card shadow="hover" class="content">
            <div>
                {{assetDetails.title}}
            </div>
        </el-card>

        <h2><span class="title ">2.介绍</span></h2>

        <el-card shadow="hover" class="content">
            <div v-html="assetDetails.contentHtml">
            </div>
        </el-card>
        <!-- 
        <h2><span class="title download">3.下载地址</span></h2>

        <el-card shadow="hover">
            <div class="extract-code">
                <a href="https://www.baidu.com/" target="_blank" class="wangpan">网盘下载</a>
                <span class="code">提取码:&nbsp;1234</span>
            </div>
        </el-card> -->

    </div>
</template>

<script>
    import {
        getCurrentInstance
    } from 'vue'
    export default {
        data() {
            return {
                $axios: null,
                assetId: this.$route.params.id,
                assetDetails: {}
            }
        },
        created() {
            const currentInstance = getCurrentInstance();
            const {
                $axios
            } = currentInstance.appContext.config.globalProperties
            this.$axios = $axios
            this.getArtDetails()
        },
        methods: {
            getArtDetails() {
                this.$axios.axios.get(`/asset/details`, {
                        params: {
                            assetId: this.assetId
                        }
                    })
                    .then((response) => {
                        const result = response.data;
                        const item = result.data[0];
                        this.assetDetails = item;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
        },
    }
</script>


<style lang="scss" scoped>
    @import "../assets/home.scss";

    #details-root {
        width: $home_width_value;
        margin: 0 auto;
    }

    h2 {
        margin-top: 20px;
    }

    .title {
        font-size: 20px;
        color: #8492a6;
    }

    .content {
        margin: 20px 0;
    }

    .wangpan {
        color: #20a0ff;
    }

    .extract-code {

        font-size: 16px;

        .code {
            color: #555;
            margin-left: 30px;
        }
    }
</style>