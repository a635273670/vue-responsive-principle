

/**
 * 拷贝一个属性到目标对象，并让该属性具有响应式
 * @param {*} originalObj
 * @param {*} targetObj
 * @param {*} prop
 * @param {*} callback
 */
function cloneProp(originalObj,targetObj,prop,callback){
    if(prop instanceof Object){
        let caheObj = {};
        //递归调用  让新对象响应
        createResponsive(originalObj[prop], caheObj, callback);
        Object.defineProperty(targetObj,prop,{
            get: function () {
                
                return caheObj;
            },
            set(val){
                originalObj[prop] = val;
                if(val instanceof Object){
                     // 赋值了一个新的对象
                     caheObj = {};
                    //递归调用  让新对象响应
                     createResponsive(val, newObj, callback);
                }else {//如果赋值是原始类型
                    caheObj = val;
                }
                callback && callback();
            }
        })
    }else{
        Object.defineProperty(targetObj,prop,{
            get(){
                //会发出通知
                console.log("gets")
                return originalObj[prop]
            },
            set(val){
                console.log('有属性被改动')
                if(originalObj[prop] !== val){
                    originalObj[prop] = val;
                    callback &&  callback();
                }
            },
        })
    }
}

 /**
 * 将原始对象 originalObj 的所有属性，复制到另一个对象 targetObj 上
 * 并且，让targetObj所有的属性都具有响应式
 * @param {*} originalObj
 * @param {*} targetObj
 * @param {*} callback
 */
export default function createResponsive(originalObj, targetObj, callback) {
    for (const prop in originalObj) {
      cloneProp(originalObj, targetObj, prop, callback);
    }
  }

