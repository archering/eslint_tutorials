

module.exports = {
    globals:{
        //ESLint 会检测未声明的变量，并发出警告，但是有些变量是我们引入的库声明的，这里就需要提前在配置中声明。
        // 声明 jQuery 对象为全局变量
        "$": false, // true表示该变量为 writeable，而 false 表示 readonly
        "window":true,
        "requirejs":false
    },
    env:{
        //在 globals 中一个个的进行声明未免有点繁琐，这个时候就需要使用到 env ，这是对一个环境定义的一组全局变量的预设
        "node":true,
        "amd":true,
        "commonjs":true
        //在这里设置了 amd：true 相当于在globals设置了
        // "amd":{"define":false , "require":false}
    },
    //extends:"eslint:recommended",
    extends:[//扩展就是直接使用别人已经写好的 lint 规则扩展一般支持三种类型

        "eslint:recommended", //eslint: 开头的是 ESLint 官方的扩展，一共有两个：eslint:recommended 、eslint:all
        //"plugin:react/recommend",//plugin: 开头的是扩展是插件类
        //"eslint-config-standard"
        //最后一种扩展来自 npm 包，官方规定 npm 包的扩展必须以 eslint-config- 开头，使用时可以省略这个头，上面案例中 eslint-config-standard 可以直接简写成 standard
    ],
    /*** 
    如果你觉得自己的配置十分满意，也可以将自己的 lint 配置发布到 npm，
    只要将包名命名为 eslint-config-xxx 即可，
    同时，需要在 package.json 的 peerDependencies 字段中声明你依赖的 ESLint 的版本号。
    **/
    rules:{
        //ESLint 附带有大量的规则  每一个规则都可以设置三个值：“off”或者0 关闭
        //"warn" 1  警告
        //"error" 2 开启  禁止这种写法的代码出现 会报错
        'no-console':0,
        "eqeqeq":"warn"
    }
}