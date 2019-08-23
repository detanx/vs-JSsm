/*
 * @Author: xudong.tang(Detanx)
 * @Date: 2019-08-23 11:13:31
 * @LastEditors: xudong.tang(Detanx)
 * @LastEditTime: 2019-08-23 14:16:43
 * @Email: detanxit@163.com;detanxit163@gmail.com
 * @Description: 
 */
const extend = require('./extend')

module.exports = [
    {
        title: '节流',
        name: 'throttle',
        fun: extend.throttle
    },
    {
        title: '防抖',
        name: 'debounce',
        fun: extend.debounce
    },
    {
        title: '柯里化',
        name: '_selfCurry',
        fun: extend._selfCurry
    },
    {
        title: '斐波拉契数列',
        name: 'febonacci',
        fun: extend.febonacci
    },
    {
        title: '记忆函数',
        name: 'memory',
        fun: extend.memory
    },
    {
        title: '金额千位分隔符',
        name: 'moneyFormat',
        fun: extend.moneyFormat
    },
    {
        title: '敏感符号转义',
        name: 'escape',
        fun: extend.escape
    },
];