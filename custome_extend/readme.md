# 说明

这里是一个自己写的eslintrc.js 文件，要发布到npm 所以把名字改为了 eslint-config-zhangdong

发布的步骤是

1  npm login 

2 npm publish 

注意发布之前 本地先 npm link 测试一下

project 使用的时候

    npm link eslint-config-zhangdong

    "extends": [
        "eslint-config-zhangdong"
    ],

使用完成后  npm unlink


最后注意 package.json 里面的依赖

https://eslint.org/docs/developer-guide/shareable-configs#using-a-shareable-config

    "peerDependencies": {
        "eslint": ">= 5"
    },
