module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 9,
        "sourceType": "module"
    },
    "rules": {
        "eqeqeq":2,
        "no-console":2,
        "quotes":[
            "error", //// 第一个参数为是否启用规则
            "single", //尽可能使用单引号
            {// 规则配置
                "avoidEscape": true 
            }
        ]
    }
};
