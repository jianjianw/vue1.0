<template>
    <Menu    width="auto"
            :active-name="activeMenuName"
            :open-names="openMenuName"
            theme="dark"
            @on-select="choosedMenu">
        <template v-for="(menu,menu_index) in menus">
            <Submenu :name="menu.name" v-if="menu.children" :key="menu_index">
                <template slot="title">
                    <Icon :size="20" :type="menu.icon"></Icon>
                    <span>{{menu.title}}</span>
                </template>
                <MenuItem :name="child.name" v-for="(child ,child_index) in menu.children" :key="child_index" :to="child.href">
                    <Icon :size="20" :type="child.icon"></Icon>
                    <span>{{child.title}}</span>
                </MenuItem>
            </Submenu>
            <MenuItem :name="menu.name" v-if="!menu.children && menu.showInMenus" :key="menu_index">
                <Icon :size="20" :type="menu.icon" :key="menu_index"></Icon>
                <span>{{menu.title}}</span>
            </MenuItem>
        </template>
    </Menu>
</template>

<script>
    export default {
        name: "leftPage",
        data(){
            return {
                menus:[
                    {
                        title:'首页',
                        num:1,
                        name:'admin',
                        icon:'ios-home',
                        href:'/home',
                        closable:false,
                        showInTags:true,
                        showInMenus:true,
                        choosed:true
                    },
                    {
                        title:'考试管理',
                        name:'members-agents',
                        icon:'ios-musical-notes',
                        children:[
                            {
                                title:'制定比赛计划',
                                name:'memberManage',
                                href:'/plan',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'安排考试',
                                name:'memberLevels',
                                href:'/plan',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'新增考试',
                                name:'memberRemit',
                                href:'/plan',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            }
                        ]
                    },
                    {
                        title:'系统管理',
                        name:'system-manage',
                        icon:'ios-cog',
                        children:[
                            {
                                title:'权限分配',
                                name:'backwater-setting',
                                href:'/system',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'用户管理',
                                name:'userDistribution',
                                href:'/system',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'IP白名单管理',
                                name:'whiteList',
                                href:'/system',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'日志管理',
                                name:'log',
                                href:'/system',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            }
                        ]
                    },

                    {
                        title:'成绩报表',
                        name:'report-manage',
                        icon:'ios-stats',
                        children:[
                            {
                                title:'统计报表',
                                name:'about22',
                                href:'/report',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'记录查询',
                                name:'about23',
                                href:'/report',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'成绩录入',
                                name:'about24',
                                href:'/report',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },

                        ]
                    },

                    {
                        title:'教师管理',
                        name:'activity-center',
                        icon:'md-man',
                        children:[
                            {
                                title:'个人信息',
                                name:'about29',
                                href:'/teacher',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'添加教师',
                                name:'about30',
                                href:'/teacher',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                        ]
                    },
                    {
                        title:'学生管理',
                        name:'notice-manage',
                        icon:'ios-people',
                        children:[
                            {
                                title:'考试通知',
                                name:'system-notice',
                                href:'/student',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            }
                        ]
                    }
                ]
            }
        },
        methods:{
             choosedMenu(name){
                alert(name)
                this.axios.get("http://localhost:8081/dev/admin/find").then(body => {
                    this.menus = body.data;
                    alert(this.menus);
                })
             }

        }
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