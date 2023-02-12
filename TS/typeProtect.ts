interface IA { a:1, a1:2 }

interface IB { b:1, b1:2 }

function log(arg: IA | IB) {
    /* 报错：类型"IA | IB"上不存在属性"a",类型"IB"上不存在属性"a" */
    /* 结论：访问联合类型时，出于程序安全考虑，仅能访问联合类型的交集部分 */
    if(arg.a){
        console.log(arg.a1)
    }else{
        console.log(arg.b1);
    }
}

//实现函数reverse
//其可将数组或字符串进行反转
function reverse(target:string | Array<any>){
    /* typeof类型保护 */
    if(typeof target === 'string'){
        return target.split('').reverse().join('');
    }
    /* instance类型保护 */
    if(target instanceof Object){
        return target.reverse();
    }
}
