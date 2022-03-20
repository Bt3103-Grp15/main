<template>
    <div class="logo">
        <h2>WExplorer</h2>
    </div>

    <nav id="header">
    <h2>
        <ul class="nav-list">
            <li class="active">
                <span><router-link to='/'>Destination</router-link></span>
                <ul class="son-list">
                    <li>Indiv Attraction Pager</li>
                </ul>
            </li>
            <li>
                <span><router-link to='/blog'>Blog</router-link></span>
                <ul class="son-list">
                    <li>Blog List Page</li>
                    <li>Indiv Blog Page</li>
                </ul>
            </li>
            <li>
                <span>Other</span>
                <ul class="son-list">
                    <li><router-link to='/profile'>Profile</router-link></li>
                    <li><router-link to='/createBlog'>Create Blogs</router-link></li>
                    <li>Indiv Route Page</li>
                </ul>
            </li>
        </ul>
    </h2>
    </nav>


</template>

<script>
export default {
    name: "Header"

}
</script>

<style lang="less" scoped>

.logo {
    width: 376px;
    font-weight: bold;
    font-size: 28px;
    height: 105px;
    display: flex;
    align-items: center;
    padding-left: 30px;
}
.nav-list{
    display: flex;
    li {
        width: 238px;
        height: 50px;
        font-size: 24px;
        text-align: center;
        cursor: pointer;
        line-height: 50px;
        color: rgb(133,133,133);
        border-top: 4px solid #f2f2f2;
        position: relative;
        &.active {
        color: #000;
        border-top: 4px solid #000;
        }
        &:hover {
            border-top: 4px solid #000;
            .son-list  {
            display: block;
            }
        }
    }
}   

.son-list {
    position: absolute;
    left: 50%;
    background: #fff;
    display: none;
    transform: translateX(-50%);
    &:hover  {
        display: block;
    }
    li {
        border-top: 4px solid #fff ;
        padding: 10px !important;
        min-width: 238px;
        width: auto;
        height: auto;
        // word-break: keep-all;
        white-space:nowrap;
        &:hover  {
            border-top: 4px solid #000 !important;
        }
    }  
} 
 

</style>