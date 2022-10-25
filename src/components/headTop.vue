<template>
    <div class="navi">
        <div class="web-tag">
            <a href="/" class="webname">
                <img src="../assets/logo.svg" alt="" class="logo"> 资源共享
            </a>
            <div class="search">
                <el-icon class="search-ic" :size="18">
                    <Search />
                </el-icon>
                <input @keyup.enter="submit22" class="search-input" v-model="input" placeholder="搜索关键字" type="text"
                    maxlength="20" />
            </div>
        </div>

        <div class="top-item">
            <div class="item">
                <el-icon class="ic" :size="18">
                    <HomeFilled />
                </el-icon>
                <span>首&nbsp;页</span>
            </div>
            <el-icon class="btn edit" @click="go2Publish" :size="16">
                <Edit />
            </el-icon>
            <div class="login-root" v-if="!store.isLogin">
                <span class="login" @click="loginClick">登&nbsp;录</span>
                <span class="login" @click="registClick">注&nbsp;册</span>
            </div>

            <el-dropdown @command="dealCommand">
                <div><img src="http://www.xandone.pub/1666335396091" alt="" class="user-head" v-if="store.isLogin">
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item command="1">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

        </div>

        <!-- 登录 -->
        <el-dialog v-model="loginDialog" title="登录" width="400px" :before-close="handleClose">
            <el-input class="el-login" v-model="usermail" placeholder="请输入邮箱">
                <template #prepend>账户</template>
            </el-input>
            <el-input class="el-login" v-model="userpsw" placeholder="请输入密码">
                <template #prepend>密码</template>
            </el-input>

            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="loginDialog = false">取消</el-button>
                    <el-button type="primary" @click="login">登录</el-button>
                </span>
            </template>
        </el-dialog>

        <!-- 注册 -->
        <el-dialog v-model="registDialog" title="注册" width="400px" :before-close="handleClose">
            <el-input class="el-login" v-model="usermail" placeholder="请输入邮箱">
                <template #prepend>账户</template>
            </el-input>
            <el-input class="el-login" v-model="userpsw" placeholder="请输入密码">
                <template #prepend>密码</template>
            </el-input>

            <el-input class="el-login" v-model="visiteCode" placeholder="请输入邀请码">
                <template #prepend>邀请码</template>
            </el-input>

            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="registDialog = false">取消</el-button>
                    <el-button type="primary" @click="register">注册</el-button>
                </span>
            </template>
        </el-dialog>

        <!-- 退出登录 -->
        <el-dialog v-model="unLoginDialog" title="退出" width="400px" :before-close="handleClose">
            <span>是否退出登录？</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="unLoginDialog = false">取消</el-button>
                    <el-button type="primary" @click="unLogin">退出</el-button>
                </span>
            </template>
        </el-dialog>
    </div>

</template>


<script>
    import {
        store
    } from '../store.js'

    import {
        setStore,
        removeStore
    } from '../utils/utils.js'

    import {
        USER_INFO_KEY
    } from '../config/env'

    import {
        ElMessage
    } from 'element-plus'

    import {
        getCurrentInstance
    } from 'vue'

    import md5 from 'js-md5'

    export default {
        data() {
            return {
                input: '',
                loginDialog: false,
                registDialog: false,
                unLoginDialog: false,
                usermail: '',
                userpsw: '',
                visiteCode: '',
                store,
                page: 1,
                row: 10,
                assetDatas: [],
            }
        },

        created() {
            const currentInstance = getCurrentInstance();
            const {
                $axios
            } = currentInstance.appContext.config.globalProperties
            this.$axios = $axios
        },
        methods: {
            submit22() {
                this.$parent.searchList(this.input);
            },
            go2Publish() {
                if (!this.store.isLogin) {
                    this.showError('请先登录');
                    return;
                }
                this.$router.push('/publish')
            },
            loginClick() {
                this.loginDialog = true
            },

            registClick() {
                this.registDialog = true
            },

            unLoginClick() {
                this.unLoginDialog = true
            },

            login() {
                let md5pass = md5(this.userpsw);
                this.$axios.axios.post(`/user/login`,
                        this.$axios.Qs.stringify({
                            "account": this.usermail,
                            "psw": md5pass
                        }))
                    .then((response) => {
                        const user = response.data;
                        if (user.code === 200) {
                            setStore(USER_INFO_KEY, user.data[0]);
                            this.store.isLogin = true;
                            this.loginDialog = false;
                        } else {
                            this.showError(user.msg);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },

            register() {
                let md5pass = md5(this.userpsw);
                this.$axios.axios.post(`/user/register`,
                        this.$axios.Qs.stringify({
                            "account": this.usermail,
                            "psw": md5pass,
                            "visiteCode": this.visiteCode
                        }))
                    .then((response) => {
                        const user = response.data;
                        if (user.code === 200) {
                            setStore(USER_INFO_KEY, user.data[0]);
                            this.store.isLogin = true;
                            this.registDialog = false;
                        } else {
                            this.showError(user.msg);
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },

            unLogin() {
                removeStore(USER_INFO_KEY);
                this.store.isLogin = false;
                this.unLoginDialog = false;
            },

            dealCommand(command) {
                if (command = 1) {
                    this.unLoginClick();
                }
            },

            showError(msg) {
                ElMessage.error(msg)
            }
        }
    }
</script>


<style lang="scss" scoped>
    .navi {
        height: 80px;
        margin: 0 200px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        a:focus,
        a:hover {
            color: #8492a6;
            text-decoration: none;
        }

        .web-tag {
            display: flex;
            flex-direction: row;
        }

        .webname {
            font-size: 36px;
            font-weight: bold;
            font-family: '仿宋';
            line-height: 80px;
            display: flex;
            align-items: center;
        }

        .logo {
            height: 50px;
        }

        .top-item {
            color: #8492a6;
            font-weight: bold;
            display: flex;
            align-items: center;

            .item {
                display: flex;
                align-items: center;
                cursor: pointer;
                position: relative;

                .ic {
                    // margin-right: 2px;
                }


            }

            .item::after {
                content: '';
                position: absolute;
                height: 2px;
                background-color: #409EFF;
                bottom: -10px;
                left: 0;
                right: 0;
                transition: all .3s;
                transform: scaleX(0);

            }

            .item:hover::after {
                transform: scaleX(1);
            }

            .item:hover {
                color: #409EFF;
            }

            span {
                font-size: 16px;
            }

            .btn:hover {
                opacity: .8;
            }

            .login-root {
                padding: 6px 10px;
                border: 1px solid #409EFF;
                border-radius: 6px;
                margin-left: 10px;
            }

            .login {
                color: #409EFF;
                font-size: 14px;
                font-weight: none;
                cursor: pointer;
            }

            .login:first-child {
                padding-right: 5px;
                border-right: 1px solid #409EFF;
            }

            .login:last-child {
                padding-left: 5px;
            }

        }

        .edit {
            padding: 8px 12px;
            background-color: #409EFF;
            color: white;
            margin-left: 10px;
            border-radius: 6px;
            cursor: pointer;
        }


        .search {
            display: flex;
            align-items: center;
            flex-direction: row;
            margin-left: 60px;
            padding: 10px;

            .search-ic {
                padding: 12px;
                color: #409EFF;
                border-radius: 50%;
                background-color: #ddd;
            }
        }

        .search-input {
            height: 50px;
            width: 0;
            background-color: transparent;
            transition: all .3s linear;
            border: 0;
            outline: none;
        }

        .search:hover .search-input {
            width: 400px;
            padding: 0 10px;
        }

        .search:hover .search-ic {
            background-color: #409EFF;
            color: white;
        }

        .search:hover .search-input {
            width: 400px;
            padding: 0 10px;
            border-bottom: 1px solid #409EFF;
        }

        .search-input:focus {
            width: 400px;
            padding: 0 10px;
            border-bottom: 1px solid #409EFF;
        }

        // .search-input:focus+.search-line {
        //     width: 800px;
        // }

    }

    .el-login {
        margin: 0 20px 20px 20px;
    }

    .el-input {
        width: 90%;
        height: 40px;
    }

    .user-head {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 20px;
    }
</style>