# ios平台，RN-接入Swift组件 Demo

包含内容:

1.RN使用Swift组件

2.RN和Swift组件相互通信

RN更新Swift组件状态

Swift更新RN组件状态

RN传递函数和参数到Swift组件

# 启动

## 安装依赖
`npm install`

ios文件下 `pod install`

## 运行
`npm run start`

## 结果
- 上面是RN组件，下面是Swift组件
- Swift组件可以接受来自RN组件传入的参数，（比如传count，RN组件setCount就会更新Swift组件的count）
- Swift组件长按会调用RN组件的回调（调用setCount），这时更新Swift自己的状态
- Swift组件单击，只更新自己状态
- 函数式组件
- 长按RN组件，Swift组件变成RN组件的两倍

![](./result.gif)