<template>
    <div class="nodata-root">
        <img src="../assets/nodata.svg" alt="">
        <span>暂无数据</span>
    </div>
</template>
<script type="text/javascript">
</script>
<style lang="scss">
    .nodata-root {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: center;

        img {
            width: 100px;
            margin-top: 80px;
        }

        span {
            font-size: 16px;
            color: #999;
            margin-top: 6px;
        }
    }
</style>