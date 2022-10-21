<template>
    <div id="card-list-root" @mouseenter="handleEnter" @mouseleave="handleLeave">
        <el-card shadow="Always" :body-style="{padding:'10px'}">
            <div class="shadow-root">
                <img :src="bean.coverImg" alt="" class="card-img">
                <div class="content">
                    <div class="title">
                        <span>{{bean.typeName}}</span>
                        <h2><a href="">是多少分水电费水电费水电费</a></h2>
                    </div>
                    <div class="user-des-date">
                        <div class="des"><span>{{bean.conetent}}</span></div>
                        <div class="user-date">
                            <div class="user-ic">
                                <el-icon :size="16">
                                    <User />
                                </el-icon>
                                <span>xandone</span>
                            </div>
                            <div> <span class="date">{{bean.date}}</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </el-card>


        <!-- 收藏 -->
        <el-tooltip effect="dark" content="收藏" placement="top-start">
            <el-icon class="colletion" :size="14" v-if="showCollection">
                <CollectionTag />
            </el-icon>
        </el-tooltip>
    </div>
</template>

<script>
    export default {
        props: {
            bean: {}
        },
        data() {
            return {
                showCollection: false,
            }
        },
        methods: {
            handleEnter(e) {
                this.showCollection = !this.showCollection;
            },
            handleLeave(e) {
                this.showCollection = !this.showCollection;
            }
        }
    }
</script>


<style lang="scss" scoped>
    #card-list-root {
        // margin-bottom: 10px;
        position: relative;
    }

    #card-list-root:hover {
        transition: all 0.3s linear;
        transform: translateX(10px)
    }

    .shadow-root {
        display: flex;
        // margin-bottom: 10px;

        .card-img {
            width: 150px;
            height: 100px;
        }


    }

    .content {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        position: relative;

        .title {
            display: flex;
            align-items: center;

            span {
                font-size: 12px;
                color: #99a9bf;
            }

            h2 {
                display: inline-block;
                margin-left: 6px;
            }

            a {
                margin-right: 10px;
                font-size: 16px;
            }
        }

        .user-des-date {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .des {
                span {
                    color: #99a9bf;
                    font-size: 14px;
                }
            }
        }

        .user-date {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        .user-ic {
            display: flex;
            flex-direction: row;
            color: #67C23A;
            align-items: center;

            span {
                margin-left: 6px;
                font-size: 14px;
            }
        }

        .date {
            color: #99a9bf;
            margin-left: 20px;
            font-size: 12px;
        }

    }

    .colletion {
        position: absolute;
        top: 12px;
        left: 12px;
        background-color: #aaa;
        padding: 8px;
        border-radius: 50%;
        color: white;
    }

    .colletion-tip {
        font-size: 12px;
    }
</style>