# JavaScript 方法库
## github地址
```
https://github.com/detanx/js-self-methods
```
## vscode插件
1. 安装vscode中插件搜索框输入**js-self-methods**
2. 安装完毕后按**F1**(Win:ctrl+shift+p、Mac:command+shift+p)
3. 输入"**method**"可以查看方法列表.
4. 或者**输入关键词**, 比如**"防抖"**.

### 节流
```javascript
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
```

### 防抖
```javascript
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
```

### 柯里化
```javascript
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
```

### 斐波拉契数列
```javascript
function febonacci (n) {
        if (n < 1) throw new Error('Param is error')
        if (n === 1 || n === 2) return 1
        return febonacci(n - 1) + febonacci(n - 2)
    }
```

### 记忆函数
```javascript
function memory (fn) {
        let obj = {}
        return function (n) {
            if (obj[n] === undefined) obj[n] = fn(n)
            return obj[n]
        }
    }
```

### 金额千位分隔符
```javascript
function moneyFormat (num)  {
        if (Object.prototype.toString.call(num) !== '[object Number]') {
            throw new SyntaxError('Param not a number')
        }
        num = parseFloat(num.toFixed(3));
        let [integer, decimal] = String.prototype.split.call(num, '.');
        integer = integer.replace(/\d(?=(\d{3})+$)/g, '$&,');
        return integer + '.' + (decimal ? decimal : '');
    }
```

### 敏感符号转义
```javascript
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
```
