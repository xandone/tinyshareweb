<template>
    <div id="card-list-root" @mouseenter="handleEnter" @mouseleave="handleLeave">
        <el-card shadow="Always" :body-style="{padding:'10px'}">
            <div class="content">
                <div class="title">
                    <span>[{{bean.typeName}}]</span>
                    <h2>
                        <router-link :to="'/details/'+bean.assetId" class="title">
                            {{bean.title}}
                        </router-link>
                    </h2>
                </div>
                <div class="user-date">
                    <div class="user-ic">
                        <el-icon :size="16">
                            <User />
                        </el-icon>
                        <span>xandone</span>
                    </div>
                    <div> <span class="date">{{bean.postTime}}</span></div>
                </div>
            </div>
        </el-card>
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
    }

    .content {
        margin: 10px;
        display: flex;
        flex-direction: row;
        position: relative;
        justify-content: space-between;


        .title {
            display: flex;
            align-items: center;

            span {
                font-size: 14px;
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
</style>