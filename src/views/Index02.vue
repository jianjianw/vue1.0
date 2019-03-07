<template>
    <div class="layout">
        <Row type="flex">
            <i-col span="5" class="layout-menu-left">
                <left-page/>
            </i-col>
            <i-col span="19">


                <div class="layout-breadcrumb">
                    <Row type="flex">
                        <i-col span="4.5">
                            <Breadcrumb>
                                <Breadcrumb-item href="www.baidu.com">首页</Breadcrumb-item>
                                <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                                <Breadcrumb-item>某应用</Breadcrumb-item>
                            </Breadcrumb>
                        </i-col>
                    </Row>
                </div>

                <div class="layout-content">
                    <Tabs type="card" closable>
                        <Tab-pane label="标签一">
                            <H1>标签一的内容</H1>
                        </Tab-pane>
                        <Tab-pane label="标签二">标签二的内容</Tab-pane>
                        <Tab-pane label="标签三">标签三的内容</Tab-pane>
                    </Tabs>
                </div>
                <div class="layout-copy">
                    0-2020 &copy; Dev
                </div>
                <!--<div class="layout-header">-->

                <!--</div>-->

            </i-col>
        </Row>
    </div>
</template>
<script>
    import LeftPage from '@/components/LeftPage'
    export default {
        components:{
            LeftPage
        },

        data(){
            return{
                isCollapsed: false,
                // ------------------------------  菜单操作开始  --------------------------------
                title:'首页',
                activeMenuName:'admin',
                openMenuName:[],

                tagBodyLeft: 0,
                rightOffset: 40,
                outerPadding: 4,
                contextMenuLeft: 0,
                contextMenuTop: 0,
                visible: false,

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
                        title:'会员与代理商',
                        name:'members-agents',
                        icon:'ios-people',
                        children:[
                            {
                                title:'会员管理',
                                name:'memberManage',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'会员等级管理',
                                name:'memberLevels',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'会员汇入',
                                name:'memberRemit',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'代理商管理',
                                name:'agentManage',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'代理商申请审核',
                                name:'agent-audit',
                                href:'/home',
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
                                title:'返水设置',
                                name:'backwater-setting',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'佣金设置',
                                name:'commissionSetting',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'子账号管理',
                                name:'subAccount',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'线上入款账户管理',
                                name:'onlinePayAccount',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'第三方集成支付渠道',
                                name:'thirdPartyPayment',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'用户分销管理',
                                name:'userDistribution',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'IP白名单管理',
                                name:'whiteList',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'日志管理',
                                name:'log',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            }
                        ]
                    },
                    {
                        title:'财务管理',
                        name:'accounting-manage',
                        icon:'ios-cash',
                        children:[
                            {
                                title:'公司入款审核',
                                name:'companyPayment',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'线上支付看板',
                                name:'paymentBoard',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'取款申请审核',
                                name:'withdrawalAudit',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'交易记录查询',
                                name:'transactionRecord',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'返水计算',
                                name:'returnWaterCal',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'用户分销计算',
                                name:'distributionCal',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'佣金计算',
                                name:'commissionCal',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'人工抹账',
                                name:'wipeAccounts',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            }
                        ]
                    },
                    {
                        title:'各式报表',
                        name:'report-manage',
                        icon:'ios-stats',
                        children:[
                            {
                                title:'统计报表',
                                name:'about22',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'投注记录查询',
                                name:'about23',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'娱乐城转账记录',
                                name:'about24',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'总存取款汇出',
                                name:'about25',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                        ]
                    },
                    {
                        title:'前端管理设置',
                        name:'frontend-setting',
                        icon:'logo-html5',
                        children:[
                            {
                                title:'Banner设置',
                                name:'about26',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'顶部Icon设置',
                                name:'about27',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'底部Icon设置',
                                name:'about28',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            }
                        ]
                    },
                    {
                        title:'游戏平台管理',
                        name:'game-platform-manage',
                        icon:'ios-game-controller-b',
                        children:[
                            {
                                title:'游戏平台管理',
                                name:'platform-manage',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'游戏管理',
                                name:'game-manage',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            }
                        ]
                    },
                    {
                        title:'活动中心',
                        name:'activity-center',
                        icon:'ios-cafe',
                        children:[
                            {
                                title:'活动设置',
                                name:'about29',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                            {
                                title:'活动模板设置',
                                name:'about30',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            },
                        ]
                    },
                    {
                        title:'公告管理',
                        name:'notice-manage',
                        icon:'md-volume-mute',
                        children:[
                            {
                                title:'系统公告',
                                name:'system-notice',
                                href:'/home',
                                closable:true,
                                showInTags:false,
                                showInMenus:true,
                                choosed:false
                            }
                        ]
                    },
                ]
                // ------------------------------  菜单操作结束  --------------------------------
            }
        },
        name:"index02"
        <!--
            <Menu
        ref="side_menu"
    :active-name="activeMenuName"
    :open-names="openMenuName"
    theme="light"
    width="230px"
    :class="menuitemClasses"
                    @on-select="choosedMenu"
    v-if="!isCollapsed">
        <template v-for="(menu,menu_index) in menus">
        <Submenu :name="menu.name" v-if="menu.children" :key="menu_index">
        <template slot="title">
        <Icon :size="20" :type="menu.icon"></Icon>
        <span>{{menu.title}}</span>
    </template>
    <MenuItem :name="child.name" v-for="(child ,child_index) in menu.children" :key="child_index">
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

        -->
    }
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 800px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }

    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }

</style>