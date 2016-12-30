import Vue from 'vue'
import Tree from './vueTree.vue'
new Vue({
    data(){
        return {
            treeData:[{
                constent: '1',
                flag:true,
                children: [
                    {
                        constent: '1,1',
                        flag:true,
                        children: [
                            {
                                constent: '1,1,1'
                            },
                            {
                                constent: '1,1,2',
                                flag:true,
                                children: [
                                    {
                                        constent: '1,1,2,1'
                                    },
                                    {
                                        constent: '1,1,2,2'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        constent: '1,2'
                    },
                    {
                        constent: '1,3'
                    }
                ]
            }, {
                constent: '2',
                flag:true,
                children: [
                    {
                        constent: '2,1'
                    },
                    {
                        constent: '2,2'
                    }
                ]
            }, {
                constent: '3'
            }]
        }
    },
    template: `
        <tree :model="treeData"></tree>
          `,
    components: {
        'tree': Tree
    },
}).$mount('#app')