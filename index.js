import vnNode from './vnNode.js';
import render from './render.js';
import responsive from './responsive.js'
// compire();
// window.obj1 = {
//     value:222
// }
// window.newobj = {}
// responsive(obj1,newobj,()=>{
//     console.log("改动")
// })
  
function myVue(enObj){
    this.$el = enObj.el;
    this.$vNode = vnNode(this.$el);
    this.$data = enObj.data;
    render(this.$vNode, this.$data);
    responsive(this.$data,this,()=>{
        render( this.$vNode, this.$data)
    })
}


window.vm = new myVue({
    el:document.querySelector("#app"),
    data:{
            value:222
        }
})

// let el = document.querySelector("#app")
// console.log(vnNode(el))
// let vNode = vnNode(el);
// let obj = {
//     value:222
// }




