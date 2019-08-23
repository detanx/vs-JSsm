/*
 * @Author: xudong.tang(Detanx)
 * @Date: 2019-08-15 14:44:24
 * @LastEditors: xudong.tang(Detanx)
 * @LastEditTime: 2019-08-23 14:10:13
 * @Email: detanxit@163.com;detanxit163@gmail.com
 * @Description: 常用的一些方法
 */
const extend = () => {
    // ********-- 节流 --********
    function throttle(fn, delay = 500) {
        let flag = true;
        return function (...args) {
            if (!flag) return;
            flag = false;
            setTimeout(() => {
                fn.apply(this, args);
                flag = true;
            }, delay);
        };
    }

    // ********-- 防抖 --********
    function debounce (fn, delay = 500)  {
        let timer = null
        return function (...args) {
            if (timer) {
                clearTimeout(timer)
            }
            timer = setTimeout(() => {
                fn(...args)
            }, delay)

        }
    }

    // ********-- 柯里化 --********
    function _selfCurry  (fn, args = []) {
        const fnLen = fn.length
        return function () {
            // newArgs = args.concat(Array.prototype.slice.call(arguments))
            // newArgs = args.concat([],[...arguments])
            const newArgs = [...args, ...arguments]
            const newArgsLen = newArgs.length
            if (newArgsLen < fnLen) {
                return _selfCurry.call(this, fn, newArgs)
                // return _selfCurry.apply(this,[fn,newArgs])
            }
            return fn.call(this, ...newArgs)
            // return fn.apply(this, newArgs)

        }
    }

    // ********-- 斐波拉契数列 --********
    function febonacci (n) {
        if (n < 1) throw new Error('Param is error')
        if (n === 1 || n === 2) return 1
        return febonacci(n - 1) + febonacci(n - 2)
    }

    // ********-- 记忆函数 --********
    function memory (fn) {
        let obj = {}
        return function (n) {
            if (obj[n] === undefined) obj[n] = fn(n)
            return obj[n]
        }
    }

    // ********-- 金额千位分隔符 --********
    function moneyFormat (num)  {
        if (Object.prototype.toString.call(num) !== '[object Number]') {
            throw new SyntaxError('Param not a number')
        }
        num = parseFloat(num.toFixed(3));
        let [integer, decimal] = String.prototype.split.call(num, '.');
        integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
        return integer + '.' + (decimal ? decimal : '');
    }
    // ********-- 敏感符号转义 --********
    function escape  (str) {
        const type = {
            '"': '&quot;',
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;'
        }
        return str.replace(/["<>&]/g, char => {
            return type[char]
        })
    }
    return {
        moneyFormat,
        _selfCurry,
        throttle,
        debounce,
        febonacci,
        memory,
        escape
    }
}
module.exports = extend()