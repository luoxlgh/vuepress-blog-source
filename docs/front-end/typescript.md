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
