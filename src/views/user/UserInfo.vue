<template>
    <div>
        <div class="layout-logo-left">
            <table>
                <tr>
                    <th><Input search enter-button="Search" placeholder="Enter something..."/></th>
                    <th>&nbsp &nbsp &nbsp &nbsp</th>
                    <th><Button type="primary" icon="md-add" @click="insertUser()">新增用户</Button></th>
                </tr>
            </table>
        </div>

        <Table border :columns="columns12" :data="data6">
            <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row, index }" slot="action">
                <Button type="primary" size="small" style="margin-right: 5px" @click="updateUser(index)">修改</Button>
                <Button type="error" size="small" @click="remove(index)">删除</Button>
            </template>
        </Table>
        <Page :total="page.total"
              page-size=5
              :current="page.index"
              @on-change="changePage"
              show-total
              show-size
              show-elevator></Page>



</div>
</template>

<script>
    export default {

        name: "UserInfo",
        data(){
           return {
               //数据项目
               users:[],
               dataArr:[],
               columns12: [
                   {
                       title: 'Name',
                       slot: 'name'
                   },
                   {
                       title: 'Age',
                       key: 'age'
                   },
                   {
                       title: 'City',
                       key: 'city'
                   },
                   {
                       title: 'Mail',
                       key: 'mail'
                   },
                   {
                       title: 'Action',
                       slot: 'action',
                       width: 150,
                       align: 'center'
                   }
               ],
               data6: [
                   {
                       name: 'John Brown',
                       age: 18,
                       city: 'New York No. 1 Lake Park',
                       mail:'John Brown1234@163.com'
                   },
                   {
                       name: 'Jim Green',
                       age: 24,
                       city: 'London No. 1 Lake Park',
                       mail:'12345@163.com'

                   },
                   {
                       name: 'Joe Black',
                       age: 30,
                       city: 'Sydney No. 1 Lake Park',
                       mail:'JoeBlack@163.com'
                   },
                   {
                       name: 'Jon Snow',
                       age: 26,
                       city: 'Ottawa No. 2 Lake Park',
                       mail:'JonSnow@163.com'
                   },
                   {
                       name: 'test01',
                       age: 26,
                       city: 'Ottawa No. 2 Lake Park',
                       mail:'test01@163.com'
                   },
                   {
                       name: 'test02',
                       age: 26,
                       city: 'Ottawa No. 2 Lake Park',
                       mail:'test02@163.com'
                   }
               ],
               page:{
                   index:1,
                   size:5,
                   total:0
               },
               modal1: false
           }
        },
        // mounted(){
        //     this.axios.get("http://jsonplaceholder.typicode.com/users").then(body => {
        //         this.dataArr = body.data;
        //         this.page.total = this.dataArr.length;
        //
        //     })
        // },
        methods:{
            changePage(value){ //改变页数
                //发送ajax请求数据
                this.pageIndex = value;
                var _start = ( this.pageIndex - 1 ) * this.page.size;
                alert(_start);
                var _end = this.pageIndex * this.page.size;
                alert(_end)
                this.dataArr = this.dataArr .slice(_start,_end);
            },
            insertUser(){
                this.$router.push({ path:'/user/insert'})
            },

            updateUser (index) {
                var user = this.data6[index];
                //修改数据，携带参数跳转到修改页面
                this.$router.push({ name:'UserUpdate',params:{user:user}})
            },
            remove (index) {
                var flag=confirm("确定要删除吗？")
                if(flag){
                    //发送ajax请求删除数据
                    this.data6.splice(index, 1);
                }
            }

        }


    }
</script>

<style scoped>

    .layout-logo-left{
        width: 300px;
        height: 60px;
        left: 20px;
    }

</style>