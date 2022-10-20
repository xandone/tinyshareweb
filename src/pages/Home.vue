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

            <div class="item-root" v-if="isGrid">
                <assetItem v-for="(item,index) in datas" :bean="item" v-bind:key="index"></assetItem>
            </div>

            <div class="item-list-root" v-if="!isGrid">
                <assetListItem2 v-for="(item,index) in datas" :bean="item" v-bind:key="index"></assetListItem2>
            </div>
        </div>
    </div>
</template>


<script>
    import assetItem from '../components/assetItem.vue'
    import assetListItem from '../components/asssetItemList.vue'
    import assetListItem2 from '../components/asssetItemList2.vue'
    import tagList from '../components/tagList.vue'
    import headTop from '../components/headTop.vue'
    export default {

        components: {
            assetItem,
            assetListItem,
            assetListItem2,
            tagList,
            headTop,
        },

        data() {

            return {
                datas: [1, 2, 3, 4, 5, 6, 7],
                isGrid: true
            }
        },
        created() {

        },

        methods: {
            getAllAssets() {

            },
            showGrid(isShowGrid) {
                console.log(isShowGrid)
                this.isGrid = isShowGrid
            }
        }
    }
</script>

<style lang="scss" scoped>
    #home {}

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
</style>