<template>
    <div id="home">
        <headTop></headTop>
        <div class="content">
            <!-- <div class="banner">
                <el-carousel height="300px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <img src="http://www.xandone.pub/FmZzFx7cG3vzfpBA0MlmA1l5e9eB" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div> -->

            <!-- 导航 -->
            <div class="tag-navigation">
                <tagList></tagList>
                <!-- 网格，列表 -->
                <div class="arrangement">
                    <el-tooltip effect="dark" content="网格" placement="top-start">
                        <el-icon class="ic" :size="18" @click="showGrid(true)" :class="isGrid?'active':'unactive'">
                            <Grid />
                        </el-icon>
                    </el-tooltip>

                    <el-tooltip effect="dark" content="列表" placement="top-start">
                        <el-icon class="ic" :size="18" @click="showGrid(false)" :class="isGrid?'unactive':'active'">
                            <List />
                        </el-icon>
                    </el-tooltip>
                </div>
            </div>

            <div v-if="!isNodata">
                <div class="item-root" v-if="isGrid">
                    <assetItem v-for="(item,index) in assetDatas" :bean="item" v-bind:key="index"></assetItem>
                </div>

                <div class="item-list-root" v-if="!isGrid">
                    <assetListItem2 v-for="(item,index) in assetDatas" :bean="item" v-bind:key="index"></assetListItem2>
                </div>

                <div class="Pagination">
                    <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                        :current-page="currentPage" :page-size="10" layout=" prev, pager, next" :total="count">
                    </el-pagination>
                </div>

            </div>
            <nodata v-if="isNodata" />
        </div>
    </div>
</template>


<script>
    import assetItem from '../components/assetItem.vue'
    import assetListItem from '../components/asssetItemList.vue'
    import assetListItem2 from '../components/asssetItemList2.vue'
    import tagList from '../components/tagList.vue'
    import headTop from '../components/headTop.vue'
    import nodata from '../components/nodata.vue';

    import {
        getCurrentInstance
    } from 'vue'

    export default {

        components: {
            assetItem,
            assetListItem,
            assetListItem2,
            tagList,
            headTop,
            nodata,
        },

        data() {
            return {
                $axios: null,
                isGrid: true,

                assetDatas: [],
                page: 1,
                row: 10,
                count: 0,
                type: 0,
                currentPage: 1,
                isNodata: false,
            }
        },
        created() {
            const currentInstance = getCurrentInstance();
            const {
                $axios
            } = currentInstance.appContext.config.globalProperties
            this.$axios = $axios
            this.getAllAssets()
        },

        methods: {
            getAllAssets() {
                let params = {
                    page: this.page,
                    row: this.row,
                    type: this.type
                };
                this.$axios.axios.get(`/asset/assetlist`, {
                    params
                }).then((response) => {
                    const joker = response.data;
                    this.count = joker.total;
                    this.assetDatas = joker.data;
                    this.isNodata = this.count === 0;
                }).catch((error) => {
                    console.log(error);
                });

            },

            getListByType(type) {
                this.type = type;
                this.getAllAssets();
            },

            showGrid(isShowGrid) {
                console.log(isShowGrid)
                this.isGrid = isShowGrid
            },

            searchList(input) {
                let params = {
                    page: this.page,
                    row: this.row,
                    type: this.type,
                    title: input
                };
                this.$axios.axios.get(`/asset/searchlist`, {
                    params
                }).then((response) => {
                    const joker = response.data;
                    this.count = joker.total;
                    this.assetDatas = joker.data;
                    this.isNodata = this.count === 0;
                }).catch((error) => {
                    console.log(error);
                });
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },

            handleCurrentChange(val) {
                this.currentPage = val;
                this.page = val;
                this.getAllAssets();
            },
        }
    }
</script>

<style lang="scss" scoped>
    #home {
        height: 100%;
    }

    .banner {
        // width: 100%;

        img {
            width: 100%;
        }
    }

    .content {
        margin: 0 10%;

        .item-root {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }

        .item-list-root {}
    }

    .tag-navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;

        .arrangement {
            display: flex;

            .ic {
                padding: 12px;
                cursor: pointer;
                border-radius: 50%;
            }

            .active {
                background-color: #ddd;
            }

            .unactive {
                background-color: transparent;
            }
        }
    }


    .tip {
        font-size: 14px;
    }

    .Pagination {
        margin: 20px;
        padding-bottom: 50px;
    }

    .el-pagination.is-background .el-pager li:not(.disabled).active {
        background-color: #409EFF;
        color: white;
    }
</style>