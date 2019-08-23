/*
 * @Author: xudong.tang(Detanx)
 * @Date: 2019-08-23 11:19:33
 * @LastEditors: xudong.tang(Detanx)
 * @LastEditTime: 2019-08-23 14:21:28
 * @Email: detanxit@163.com;detanxit163@gmail.com
 * @Description: 
 */

const fs = require('fs');
const pkg = require('../package.json');
const methods = require('../src/js/methods.js');

pkg.contributes.commands = [];
pkg.activationEvents = [];
methods.forEach(method => {
    pkg.contributes.commands.push({
        command: `extension.${methods.name}`,
        title: `method: ${method.title}`
    });

    pkg.activationEvents.push(`onCommand:extension.${methods.name}`);
})

fs.writeFileSync('./package.json', JSON.stringify(pkg, null, 4), 'utf8');
console.log('构建成功');