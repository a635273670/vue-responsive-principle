
function VnNode(realdom,template){
    this.realDom = realdom;
    this.childNodes = [];
    this.template = template
}

export default  function creatVnNode(el){
    let tempalete;
    if(el.nodeType === Node.TEXT_NODE){
        tempalete = el.nodeValue;// 如果它是一个文本节点，用它的文本作为模板
     }else{
         tempalete = "";
     }
    let childnodes = el.childNodes;
    let vnNode = new VnNode(el,tempalete);
    for (let index = 0; index < childnodes.length; index++) {
        const element = childnodes[index];
         var childVNode = creatVnNode(element);
         vnNode.childNodes.push(childVNode);
    }
    return vnNode;
}