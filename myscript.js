let app = new Vue({
    el: '#app',
    data:{
        array:"",
        toDo:[
            {
                text: 'sbarrato',
                done: true,
            },
            {
                text: 'non sbarrato',
                done: false,
            },
            {
                text: '3',
                done: true,
            }
        ]
    },
    methods:{
        fatto: function(indice){
            
            if(this.toDo[indice].done == true){
                return 'sbarrato'
                }
        },
        aggiungi: function(){
            this.toDo.push({
                text:this.array,
                done: false,
            })
            this.array=""
        }
    },
})