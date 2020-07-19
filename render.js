import compire from "./compile.js"

export default  function render(VNnode,enObj){
    if(VNnode.template){
        //得到编译结果
       let newtext =  compire(VNnode.template,enObj);
        if(VNnode.realDom.nodeValue === newtext){
            //nothing todo
        }else{
            VNnode.realDom.nodeValue = newtext;
        }
    }else{
        //遍历子节点
        for (let index = 0; index < VNnode.childNodes.length; index++) {
            const val =  VNnode.childNodes[index];
            render(val,enObj)
        }
    }
}