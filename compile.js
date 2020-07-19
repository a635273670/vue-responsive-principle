/**
 * 从模板中取出所有占位符
 * @param {*} template
 */
function getChat(template){
    var result = template.match(/{{[^}]+}}/g);
    if(!result){
        return []
    }
    return result
}
/**
 * 替换模板中的占位符
 * @param {*} temp
 * @param {*} specialChar
 * @param {*} obj
 */
function myreplace(temp,specialChar,obj){
    let prop = specialChar.replace("{{", "").replace("}}", "");
    let props = prop.split(".");
    let val = getVal(obj,props);
    return   temp.replace(specialChar,val)
}
//得到环境中的值
function getVal(envObj,props){
    let value = envObj;
    for (let index = 0; index < props.length; index++) {
        const val = props[index];
        value = value[val]
    }
    return value
}

/**
 * 编译模板
 * @param {*} temp 模板字符串
 * @param {*} obj 环境对象
 */
export default  function (temp,obj){
    // let temp = 'asssas{{sss.val}}';
    // let obj = {
    //     sss: {
    //         val:"里面的"
    //     }
    // }
    let arrayVal = getChat(temp);
    for (let index = 0; index < arrayVal.length; index++) {
        const element = arrayVal[index];
        temp = myreplace(temp,element,obj)
    }
    return temp
}