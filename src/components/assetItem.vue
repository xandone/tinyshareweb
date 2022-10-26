<template>
    <div class="card-bg">
        <div class="w-raduis-bg anim  content-root" @mouseenter="handleEnter" @mouseleave="handleLeave">
            <img class="card-img" :src="bean.coverImg" alt="" @click="go2Details">
            <div class="card-descip">
                <div class="date"><span>{{bean.postTime}}</span> <span>[{{bean.typeName}}]</span></div>
                <h2 class="title">
                    <router-link :to="'/details/'+bean.assetId">
                        {{bean.title}}
                    </router-link>
                </h2>
                <div class="descip">
                    <span>{{bean.content}}</span>
                </div>

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

    import {
        ElMessage
    } from 'element-plus'

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
                if (!this.store.isLogin) {
                    this.showWarn('请先登录')
                } else {
                    this.showWarn('功能开发中..')
                }
            },
            go2Details() {
                this.$router.push({
                    name: 'details',
                    params: {
                        id: this.bean.assetId
                    }
                })
            },
            showWarn(msg) {
                ElMessage.warning(msg)
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
        cursor: pointer;
    }


    .card-descip {
        display: flex;
        flex-direction: column;
        padding: 0 10px 10px 10px;
        color: #99a9bf;


        .date {
            display: flex;
            align-items: center;
            justify-content: space-between;

            span:first-child {
                font-size: 13px;
            }

            span:last-child {
                font-size: 13px;
            }
        }

        .title {
            margin: 10px 0;
            font-size: 16px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            display: inline-block;
            text-align: left;
        }

        .descip {
            text-align: left;
            width: 100%;
            height: 50px;
            line-height: 25px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;

            span {
                font-size: 13px;
                width: 100%;
                word-break: break-all;
            }
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