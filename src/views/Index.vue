<template>
   <div>
       <p>{{message}}</p>
       <Layout>
           <Sider hide-trigger>Sider</Sider>
           <Layout>
               <Header>Header</Header>
               <Content>Content</Content>
               <Footer>Footer</Footer>
           </Layout>
       </Layout>
   </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                message:"zhe shi yi ge index"
            }
        },
        mounted(){
            this.axios.get("http://jsonplaceholder.typicode.com/users").then(body => {
                this.message = body.data;
            })
            // this.axios.get("http://localhost:8081/dev/admin/find").then(body => {
            //     this.message = body.toString();
            //
            // })

        }
    }
</script>

<style scoped>

</style>