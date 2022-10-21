<template>
    <div id="publish-root">
        <div class="edit-area">

            <div class="el-save">
                <el-input v-model="inputTitle" placeholder="标题" class="el-title" />
                <span class="save-btn" @click="saveAssets">保存</span>
            </div>

            <div class="select-type">
                <span>选择类别:</span>
                <div>
                    <el-radio-group v-model="radioType">
                        <el-radio-button label=1>影视</el-radio-button>
                        <el-radio-button label=2>游戏</el-radio-button>
                        <el-radio-button label=3>书籍</el-radio-button>
                        <el-radio-button label=4>图片</el-radio-button>
                        <el-radio-button label=5>工具</el-radio-button>
                    </el-radio-group>
                </div>
            </div>

            <div class="cover-img">
                <span>封面图片:</span>
                <el-upload action="http://up-z2.qiniup.com" :limit="1" list-type="picture-card"
                    :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :on-success="handleUpSuccess"
                    :data="qnParam" :before-upload="handleBeforeUp">
                    <el-icon>
                        <Plus />
                    </el-icon>
                </el-upload>
                <el-dialog v-model="coverVisible">
                    <img w-full :src="coverImgUrl" alt="Preview Image" />
                </el-dialog>
            </div>

        </div>
        <!-- 编辑器 -->
        <div>
            <Toolbar :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode"
                style="border-bottom: 1px solid #ccc" />
            <Editor :defaultConfig="editorConfig" :mode="mode" v-model="contentHtml"
                style="height: 500px; overflow-y: hidden" @onCreated="handleCreated" @onChange="handleChange"
                @onDestroyed="handleDestroyed" @onFocus="handleFocus" @onBlur="handleBlur" @customAlert="customAlert"
                @customPaste="customPaste" />
        </div>

    </div>
</template>

<script>
    import '@wangeditor/editor/dist/css/style.css';
    import {
        inject
    } from 'vue'
    import {
        ElMessage
    } from 'element-plus'
    import {
        onBeforeUnmount,
        ref,
        shallowRef,
        onMounted,
        reactive,
        getCurrentInstance
    } from 'vue';
    import {
        Editor,
        Toolbar
    } from '@wangeditor/editor-for-vue';

    export default {
        components: {
            Editor,
            Toolbar
        },
        data() {
            return {
                selectBean: null,
                currentDate: null,
            }
        },

        setup() {
            // 编辑器实例，必须用 shallowRef，重要！
            const editorRef = shallowRef();

            // 内容 HTML
            const inputTitle = ref('');
            const content = ref('');
            const contentHtml = ref('');
            const radioType = ref(1);
            const coverImgUrl = ref('');
            const coverVisible = ref(false);
            const qiniu_token = ref('');
            const qnParam = reactive({
                token: "",
                key: ""
            });


            const toolbarConfig = {};
            const editorConfig = {
                placeholder: '请输入内容...'
            };


            onMounted(() => {
                getQiniu();
            });

            // 组件销毁时，也及时销毁编辑器，重要！
            onBeforeUnmount(() => {
                const editor = editorRef.value;
                if (editor == null) return;

                editor.destroy();
            });

            // 编辑器回调函数
            const handleCreated = (editor) => {
                // console.log('created', editor);
                editorRef.value = editor; // 记录 editor 实例，重要！
            };
            const handleChange = (editor) => {
                // console.log('change:', editor.getHtml());
                // console.log('change:', editor.getText());
                content.value = editor.getText();
            };
            const handleDestroyed = (editor) => {
                // console.log('destroyed', editor);
            };
            const handleFocus = (editor) => {
                // console.log('focus', editor);
            };
            const handleBlur = (editor) => {
                // console.log('blur', editor);
            };
            const customAlert = (info, type) => {
                alert(`【自定义提示】${type} - ${info}`);
            };
            const customPaste = (editor, event, callback) => {
                // console.log('ClipboardEvent 粘贴事件对象', event);

                // 自定义插入内容
                // editor.insertText('xxx');

                // 返回值（注意，vue 事件的返回值，不能用 return）
                // callback(false); // 返回 false ，阻止默认粘贴行为
                callback(true) // 返回 true ，继续默认的粘贴行为
            };

            const insertText = () => {
                const editor = editorRef.value;
                if (editor == null) return;

                editor.insertText('hello world');
            };

            const printHtml = () => {
                const editor = editorRef.value;
                if (editor == null) return;
                // console.log(editor.getHtml());
            };

            const disable = () => {
                const editor = editorRef.value;
                if (editor == null) return;
                editor.disable()
            };


            const currentInstance = getCurrentInstance();
            const {
                $axios
            } = currentInstance.appContext.config.globalProperties

            /**
             * 发布资源
             */
            function saveAssets() {
                if (!inputTitle.value) {
                    showError('请输入标题');
                    return;
                }
                console.log($axios)
                $axios.axios.post(`asset/add`, {
                        userId: 123,
                        title: inputTitle.value,
                        content: getEtText(),
                        contentHtml: contentHtml.value,
                        type: Number(radioType.value),
                        coverImg: coverImgUrl.value,
                        assetUrl: '',
                        assetCode: ''
                    })
                    .then((response) => {
                        const result = response.data;
                        if (result && result.code === 200) {
                            // this.resetForm();
                            showSuccess('发表成功!');
                        } else {
                            showError('发布失败，服务器异常');
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            };

            function getEtText() {
                return content.value.replace(/&nbsp;/gi, '');
            };

            function getQiniu() {
                $axios.axios
                    .get('/qiniu/getToken')
                    .then((result) => {
                        qiniu_token.value = result.data.msg;
                        qnParam.token = qiniu_token.value;
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            };

            function showSuccess(msg) {
                ElMessage.success(msg)
            };

            function showError(msg) {
                ElMessage.error(msg)
            };

            function handleBeforeUp(file) {
                qnParam.key = String(new Date().getTime());
                console.log('qnParam.key=' + qnParam.key);
            };

            function handleUpSuccess(response) {
                coverImgUrl.value = "http://www.xandone.pub/" + response.key;
                console.log('coverImgUrl.value=' + coverImgUrl.value)
            };

            function handlePictureCardPreview(file) {
                coverVisible.value = true;
            };


            return {
                editorRef,
                mode: 'default',
                content,
                contentHtml,
                toolbarConfig,
                editorConfig,
                handleCreated,
                handleChange,
                handleDestroyed,
                handleFocus,
                handleBlur,
                customAlert,
                customPaste,
                insertText,
                printHtml,
                disable,
                saveAssets,
                inputTitle,
                radioType,
                qiniu_token,
                qnParam,
                handleBeforeUp,
                handleUpSuccess,
                handlePictureCardPreview,
            };
        },
    };
</script>


<style lang="scss" scoped>
    #publish-root {
        height: 100%;
    }

    .el-save {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .el-title {
        height: 45px;
        width: 80%;
    }

    .save-btn {
        background-color: #409EFF;
        color: white;
        padding: 6px 20px;
        border-radius: 2px;
        margin-right: 20px;
        cursor: pointer;
    }

    .save-btn:hover {
        opacity: .8;
    }

    .select-type {
        display: flex;
        margin-top: 10px;
        margin-bottom: 10px;
        align-items: center;
        margin-left: 10px;

        span {
            font-size: 15px;
            font-weight: bold;
            margin-right: 10px;
        }
    }

    .cover-img {
        padding-top: 10px;
        padding-bottom: 10px;
        display: flex;
        align-items: center;
        margin-left: 10px;

        span {
            font-size: 15px;
            font-weight: bold;
            margin-right: 10px;
        }
    }
</style>