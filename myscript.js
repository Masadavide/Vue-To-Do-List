let app = new Vue({
    el: '#app',
    data:{
        array:"",
        hidden: false,
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
                text: 'Pelare patate',
                done: false,
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
        },
        rimuovi: function(indice){
            this.toDo.splice(indice, 1)
        },
        sbarra: function(indice){
            this.toDo[indice].done = !this.toDo[indice].done;
            /*  if(this.toDo[indice].done == true){
                return this.toDo[indice].done = false
            }else{
                return this.toDo[indice].done = true
            } */
        },
    },
})