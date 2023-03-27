export default{
    data(){
        return{
                user: [
                    
                ],
                listar:''
            }
    },
    methods:{
        agregarLista(){
         this.user.push({nombre:this.listar})
         this.listar=''
             
        },
        agregarFinalList(){
            this.user.unshift({nombre:this.listar1})
            this.listar1=''
        },

        eliminarPrimero(){
          this.user.shift()
        },

        eliminarUltimo(){
            this.user.pop()
          },
          eliminarCualquiera(numero){
              this.user.splice(numero,1);
          },
    },

}




