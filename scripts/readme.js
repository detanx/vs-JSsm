/*
 * @Author: xudong.tang(Detanx)
 * @Date: 2019-08-23 11:18:07
 * @LastEditors: xudong.tang(Detanx)
 * @LastEditTime: 2019-08-23 14:51:37
 * @Email: detanxit@163.com;detanxit163@gmail.com
 * @Description: 
 */
const fs = require('fs');
const chalk = require('chalk');
const json = require('../src/js/methods');
let content = `# JavaScript 方法库
## github地址
\`\`\`
https://github.com/detanx/js-self-methods
\`\`\`
## vscode插件
1. 安装vscode中插件搜索框输入**js-self-methods**
2. 安装完毕后按**F1**(Win:ctrl+shift+p、Mac:command+shift+p)
3. 输入"**method**"可以查看方法列表.
4. 或者**输入关键词**, 比如**"防抖"**.
`;

json.forEach(({title, fun})=>{
    content+= `\r\n### ${title}\r\n`;
    content+= `\`\`\`javascript\r\n`;
    content+= `${fun}\r\n\`\`\`\r\n`;
});
fs.writeFileSync('./README.md',content,'utf-8');
console.log(chalk.green('readme构建完成'));