<template>
            <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                <div class="layout-logo-left">
                    <img src="../../public/logo.jpg">
                </div>
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        导航一
                    </template>
                    <Menu-item name="1-1">选项 1</Menu-item>
                    <Menu-item name="1-2">选项 2</Menu-item>
                    <Menu-item name="1-3">选项 3</Menu-item>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        导航二
                    </template>
                    <Menu-item name="2-1">选项 1</Menu-item>
                    <Menu-item name="2-2">选项 2</Menu-item>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        导航三
                    </template>
                    <Menu-item name="3-1">选项 1</Menu-item>
                    <Menu-item name="3-2">选项 2</Menu-item>
                </Submenu>
            </Menu>




    <!--<Menu-->
            <!--ref="side_menu"-->
            <!--:active-name="activeMenuName"-->
            <!--:open-names="openMenuName"-->
            <!--theme="light"-->
            <!--width="230px"-->
            <!--:class="menuitemClasses"-->
            <!--@on-select="choosedMenu"-->
            <!--v-if="!isCollapsed">-->
        <!--<template v-for="(menu,menu_index) in menus">-->
            <!--<Submenu :name="menu.name" v-if="menu.children" :key="menu_index">-->
                <!--<template slot="title">-->
                    <!--<Icon :size="20" :type="menu.icon"></Icon>-->
                    <!--<span>{{menu.title}}</span>-->
                <!--</template>-->
                <!--<MenuItem :name="child.name" v-for="(child ,child_index) in menu.children" :key="child_index">-->
                    <!--<Icon :size="20" :type="child.icon"></Icon>-->
                    <!--<span>{{child.title}}</span>-->
                <!--</MenuItem>-->
            <!--</Submenu>-->
            <!--<MenuItem :name="menu.name" v-if="!menu.children && menu.showInMenus" :key="menu_index">-->
                <!--<Icon :size="20" :type="menu.icon" :key="menu_index"></Icon>-->
                <!--<span>{{menu.title}}</span>-->
            <!--</MenuItem>-->
        <!--</template>-->
    <!--</Menu>-->
</template>

<script>
    export default {
        name: "leftPage"
    }
</script>

<style scoped>
    .layout-logo-left{
        width: 100%;
        height: 60px;
        /*background: #5b6270;*/
        border-radius: 3px;
        /*margin: 15px auto;*/
    }
</style>