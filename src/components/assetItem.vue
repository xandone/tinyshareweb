<template>
    <div class="card-bg">
        <div class="w-raduis-bg anim  content-root" @mouseenter="handleEnter" @mouseleave="handleLeave">
            <img class="card-img" src="http://www.xandone.pub/FmZzFx7cG3vzfpBA0MlmA1l5e9eB" alt="">
            <div class="card-descip">
                <div class="date"><span>2022-11-12</span> <span>[影视]</span></div>
                <h2>
                    <router-link :to="'/details/'+bean" target="_blank" class="title">
                        是多少分水电费水电费水电费
                    </router-link>
                </h2>
                <span class="descip">是多少分水电费水电费水电费水电费水电费水电费水电费</span>

                <div class="user-ic">
                    <el-icon :size="16">
                        <User />
                    </el-icon>
                    <span>xandone</span>
                </div>
            </div>

            <!-- 收藏 -->
            <el-tooltip effect="dark" content="收藏" placement="top-start">
                <el-icon class="colletion" v-if="showCollection" :size="16" @click="collet">
                    <CollectionTag />
                </el-icon>
            </el-tooltip>

        </div>

    </div>
</template>

<script>
    import {
        store
    } from '../store.js'
    export default {
        props: {
            bean: {
                type: Object
            }
        },
        data() {
            return {
                showCollection: false,
                store,
            }
        },
        methods: {
            handleEnter(e) {
                this.showCollection = !this.showCollection;
            },
            handleLeave(e) {
                this.showCollection = !this.showCollection;
            },
            collet() {
                console.log('this=' + this.store.count)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .card-bg {
        margin: 10px 10px;
        width: calc((100% - 120px) / 5);
        position: relative;
    }


    .content-root {
        position: relative;

        .colletion {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: #aaa;
            padding: 8px;
            border-radius: 50%;
            color: white;
        }
    }

    .anim {
        transition: all .5s ease;
    }

    .anim:hover {
        transform: translateY(-10px);
    }

    .card-img {
        width: 100%;
        height: 200px;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    }

    .card-descip {
        display: flex;
        flex-direction: column;
        padding: 0 20px 10px 20px;
        color: #99a9bf;


        .date {
            display: flex;
            align-items: center;
            justify-content: space-between;

            span:first-child {
                font-size: 14px;
            }

            span:last-child {
                font-size: 14px;
            }
        }

        .title {
            display: inline-block;
            margin: 10px 0;
            font-size: 16px;
        }

        .descip {
            font-size: 14px;
        }

        .user-ic {
            display: flex;
            flex-direction: row;
            color: #67C23A;
            align-items: center;
            margin-top: 10px;

            span {
                margin-left: 6px;
                font-size: 14px;
            }
        }
    }
</style>