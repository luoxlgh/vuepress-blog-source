# TypeScript 初探

如何定义 TypeScript 呢？面向对象的语言？

面向对象有三大特性：
- 继承
- 多态
- 封装

TypeScript 官网介绍是 JavaScript 的超集。并不认为其达到了面向对象的语言的程度，high-level language 比较合适。

TypeScript 有明显的优点：
- start at javascript, in the ecosystem. （完美兼容现在 JavaScript 的所有生态）
- 类型检查很深度


- Type annotation: TypeScript 会进行类型检查。对 `test.ts` 文件运行 `tsc test.ts` 命令时，无论是否有报错，都会生成对应的 `test.js` 文件。转成 js 文件后，对于类型注解的报错还是可以运行。
- Interface: 从编译后的文件来看，`Interface` 只用作编译判断，生成的js文件中没有这个痕迹。
- Class: 编译后生成一个类的函数。

```ts{1,8,13}
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M.", "User");
```
编译后：
``` js
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
```

## 数据类型
### 原始数据类型
boolean, number, string, undefined, null。基本类型与构造器类型有区别：
``` ts{3}
let b: boolean = true;
let b2: boolean = Boolean(true);
let b1: Boolean = new Boolean(true);
```
### 空值
- undefined | null: `let u: undefined = undefined;let n: null = null;`
- void 表示空，常用与函数返回值。用于变量的时候只能将该变量赋值为 `undefined` 或者 `null`。`undefined` 或者 `null` 可以被赋值给任何类型的变量。

### any
未声明类型的变量或者声明为 `any` 类型的变量可以被赋值为任意类型的值。
``` ts
let s: any = 'test';
s = 1; // 不会报错
```

### 类型推论
类型会被设置为初始设置的值。**这里与未声明类型的变量有区别，下例中的 s 类型为 any，s1 类型推断为 string**
```ts
let s;
s = 'test';
s = 1;

let s1 = 'test';
s1 = 1; // error: Type 'number' is not assignable to type 'string'
```
### 联合类型
类型可为多种。当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法。<br/>目前感觉使用联合类型有些麻烦（接口定义可以使用），如果是面向强类型的编程最好是不要用吧。
### 类型断言
将类型指定为联合类型中的某一种。用于避免联合类型导致的报错。
```ts{7}
function getLength(something: string | number): number {
    if (something.length) { // error: Property 'length' does not exist on type 'number'.
        return something.length;
    }
}
function getLength(something: string | number): number {
    if (<string>something.length) {
        return something.length;
    }
}
```
类型断言不允许将类型断言为联合类型中没有的类型。

## 接口
定义一个接口。[参考](https://github.com/xcatliu/typescript-tutorial/blob/master/basics/type-of-object-interfaces.md)

## 声明
声明的语法为：`declare const test = `
### 声明文件
文件后缀为 `.d.ts`。会解析改文件类型，作为声明。社区已为我们声明好了一些公共库（如 jQuery），可在[该链接](https://microsoft.github.io/TypeSearch/)搜索。
