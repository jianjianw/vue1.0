<template>
    <div class="layout">
        <Row type="flex">
            <i-col span="5" class="layout-menu-left">
                <left-page v-on:eventName="updateTag($event)"/>
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
                    <!--<Tabs type="card" closable>-->
                        <!--<Tab-pane label="标签一">-->
                            <!--<H1>标签一的内容</H1>-->
                            <!--{{message}}-->
                        <!--</Tab-pane>-->
                        <!--<Tab-pane label="标签二">-->
                            <!--{{tagName}}-->
                        <!--</Tab-pane>-->
                        <!--<Tab-pane label="标签三">标签三的内容</Tab-pane>-->
                    <!--</Tabs>-->

                    <Tabs type="card" closable @on-tab-remove="handleTabRemove" >
                        <Tab-pane :label="tag" v-for="tag in tags" :key="tag" :name="tag"
                                   icon="logo-windows">
                            <!--<H1>{{tag}}</H1>-->
                            <!--{{message}}-->
                            nimei
                        </Tab-pane>
                    </Tabs>
                </div>
                <div class="layout-copy">
                   <foot/>
                </div>
                <!--<div class="layout-header">-->
                <!--</div>-->

            </i-col>
        </Row>
    </div>
</template>
<script>
    import LeftPage from '@/components/LeftPage'
    import Foot from "@/components/Foot";
    export default {
        components:{
            LeftPage,Foot
        },
        name:"index02",
        data(){
            return {
                message:"",
                tags:[]
            }
        },
        mounted(){
            this.axios.get("http://jsonplaceholder.typicode.com/users").then(body => {
                this.message = body.data;
            })
        },
        methods:{
            updateTag(tagName){
                for (var i=0;i<this.tags.length;i++)
                {
                    if(this.tags[i] == tagName){
                        return;
                    }
                }
                this.tags.push(tagName)
            },
            handleTabRemove (name) {
                alert(name);
                // this.tags
                // this['tab' + name] = false;
            }

        }
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