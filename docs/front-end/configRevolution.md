# 多环境配置化演进
控制台配置化经历了从无到代码全配置，代码全配置到逻辑配置这两个阶段。

## Stage 1 —— 页面级别配置
> 云服务器创建页选择项很多，20个环境几乎都各不相同。产品和技术拍脑袋一想：“以后这些配置，开关，白名单都给产品控制吧，技术还是专心做技术”。创建页就走上了全配置的路线。

每个环境会获取两份配置，一份是基础配置Base，另一份是该环境下的配置。请求根据`service`, `cloudType`, `region`, `operateType` 和 `version` 来唯一确定一份配置。
例如云硬盘的创建页，请求 `service=NCV&cloudType=default&region=default&operateType=type&version=20181220` 获取基础配置。请求 `service=NCV&cloudType=public&region=cn-east-1&operateType=type&version=20181220` 来获取公有云cn-east-1环境下的配置。这两份配置文件合并得到完整配置。

如下是配置文件示例。
```json
{
	"model": {
		"ChargeType": 1,
	},
	"uiSchema": {
		"tag": "div",
		"children": [
			{
                "tag": "u-form",
                "children": [
                    {
                        "label": {
                            "$lang": "global.chargeType.label"
                        },
                        "name": "ChargeType",
                        "ref": "ChargeType",
                        "children": [
                            {
                                "tag": "u-charge-type-radios"
                            }
                        ]
                    }
                ]
			}
		]
	},
	"grayDependencies": [
		{
			"$ref": "ChargeType",
			"prop": "exist",
			"depend": [
				{
					"gray.ownChargeType": 1
				}
			]
		}
	]
}
```

将一份由`model`, `uiSchema`, `grayDependencies`组成的json文件转换成创建页的代码。

- 模板渲染：通过 [Vue render](https://cn.vuejs.org/v2/guide/render-function.html) 将UISchema递归渲染。
- 动态数据绑定：语法糖 `':chargeType': () => this.isDec ? 1 : 0` 放到watch里。
- grayDependencies依赖处理：处理完语法糖后放到watch里。

### 缺陷
- 学习门槛高。依赖条件解析有自己的语法糖，组件之间有隐藏的联系（默认u-radios的子组件是u-radio, model名字自动绑定为相关组件的value值）。
- 难以调试。
- 方案迁移代码改动大：原先template里的逻辑全要改掉，分成一份份配置。
- 可维护性差：前端增加了配置，但相关的运营平台没有配套功能，配置只能在本地修改后一个个复制到线上，喜提鼠标手。
- 开发体验差：模板结构不清晰，增减标项需要修改多个地方。这个功能被发成了包，但是不够成熟，导致业务更新前要发包再开发测试（这个问题不是配置化方案的问题，而是测试不完善的时候先别发包）。

### 配套插件开发
> 配置更新在运营平台，但是我们提的新需求优先级并不高。我们只能人工拷贝，比对，粘贴。有时候实在等不及了只好把自己提的需求开发掉，残酷的是有时候自己开发完了还不定能上线。

详见[opconfig开发]()TODO

最后，产品还是没法在运营平台进行配置，工作量并未实现拆分。
随着业务越来越繁琐，当前的配置缺并没有给开发带来任何便利。但在配置化抽离的时候产生了新的思路。

## Stage 2 —— 全平台配置化
> 其实配置信息并不只是在创建页用，其他页面甚至其他模块都需要共享某些信息。我们并不指望只修改线上配置文件完成某个迭代任务，这种功能应该由运营平台开发，运营维护，前后端调用。因此，可以使用内容配置而不是代码配置。

### 环境
目前有20个线上环境，3个线下环境，1个开发环境。一共24个环境。

:question: 除了base+当前环境的配置，还有别的抽象方式吗？<br/>
- 代码层面：纵向划分为Global全局配置和模块配置。模块配置优先级高于全局配置。
- 逻辑层面：横向根据 `regionId`, `distributorName`, `userType`, `cloudType`, `accountType`, `host` 定义环境配置优先级。配置优先级高的覆盖低的。这样做的一大好处是可以区分逻辑环境，不仅是物理环境了。比如，要把专属云的计费项关闭，修改物理环境配置需要把十几个专属云的配置。而逻辑环境只需要修改 `专属云` 这一个配置。五元组的表达方式如下：
``` js
dec: '*/*/[12]/*/*/*', // 逻辑环境 - 专属云
ruizhi: 'cn-east-1/ruizhi/*/public/*/*', // 物理环境 - 睿智
jian: 'cn-east-1/jian/*/public/*/*', // 物理环境 - 吉安
```
在五元组中 `*` 越多的配置优先级越低。


:question: 如何根据五元组对配置文件优先级排序？
A2: 过滤出符合当前path的五元组，再根据 `*` 号个数排序。
```js
[...].filter((key) => new RegExp('^' + nameList[key].replace(/\*/g, '(.*?)') + '$').test(path));
```
在考拉私有云中，排序结果是：
![configKaola](./assets/configKaola.png)
优先级由 base 到 kaola 递增。

# 总结
技术和业务场景是分不开的。在云计算的业务场景中，**关于可用区和VPC等概念的需求在对业务不了解的情况下是无法提出合理的配置划分方案的，作为前端开发需要了解业务才可以更好的从业务出发，在技术角度优化项目**。geek一时爽，维护火葬场。技术架构演进是为了更好的保证质量，不能买椟还珠呀~
