<template>
    <div id="home">
        <headTop></headTop>
        <div class="content">
            <div class="banner">
                <el-carousel height="600px">
                    <el-carousel-item v-for="item in 4" :key="item">
                        <img src="http://www.xandone.pub/FmZzFx7cG3vzfpBA0MlmA1l5e9eB" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="tag-navigation">
                <tagList></tagList>
                <div class="arrangement">
                    <el-popover placement="top-start" trigger="hover" popper-class="wrap">
                        <span class="tip">网格</span>
                        <template #reference>
                            <el-icon class="ic" :size="80" @click="showGrid(true)" :class="isGrid?'active':'unactive'">
                                <Grid />
                            </el-icon>
                        </template>
                    </el-popover>
                    <el-popover placement="top-start" trigger="hover">
                        <span class="tip">列表</span>
                        <template #reference>
                            <el-icon class="ic" :size="80" @click="showGrid(false)" :class="isGrid?'unactive':'active'">
                                <List />
                            </el-icon>
                        </template>
                    </el-popover>

                </div>
            </div>

            <div class="item-root" v-if="isGrid">
                <assetItem v-for="(item,index) in datas" :bean="item" v-bind:key="index"></assetItem>
            </div>

            <div class="item-list-root" v-if="!isGrid">
                <assetListItem v-for="(item,index) in datas" :bean="item" v-bind:key="index"></assetListItem>
            </div>
        </div>
    </div>
</template>


<script>
    import assetItem from '../components/assetItem.vue'
    import assetListItem from '../components/asssetItemList.vue'
    import tagList from '../components/tagList.vue'
    import headTop from '../components/headTop.vue'
    export default {

        components: {
            assetItem,
            assetListItem,
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
        margin: 0 250px;

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

        .arrangement {
            display: flex;

            .wrap {
                background: aquamarine !important;
                background-color: aquamarine !important
            }

            .ic {
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
        font-size: 22px;
    }
</style>