const bytedancer: IBytedancer = {
    jobId: 9303245,
    name:'Lin',
    sex:'man',
    age:28,
    hobby:'swimming',
}

interface IBytedancer{
    /*只读属性：约束属性不可在对象初始化外赋值 */
    readonly jobId: number;
    name: string;
    sex: 'man' | 'woman' | 'other';
    age: number;
    /* 可选属性：定义该属性可以不存在 */
    hobby?: string;
    /* 任意属性：约束所有对象属性都必须是该属性的子类型 */
    [key: string]: any;
}

/* 报错：无法分配到"jobId",因为它是只读属性 */
bytedancer.jobId = 12345;
/* 成功：任意属性标注下可以添加任意属性 */
bytedancer.plateform = 'data';

const bytedancer2: IBytedancer = {
    jobId: 89757,
    sex: 'woman',
    age: 18,
}