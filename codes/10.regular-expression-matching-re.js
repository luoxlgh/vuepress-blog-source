/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isEqual = (s1, s2) => {
    if (s1.length !== s2.length)
        return false;
    for (let i = 0; i < s1.length; ++i) {
        if (s2.charAt(i) !== '.' && s1.charAt(i) !== s2.charAt(i))
            return false;
    }
    return true;
}
var isMatch = function(s, p) {
    if (s === '' && p === '')
        return true;
    if (p === '' && s !== '')
        return false;
    if (s === '') {
        if (/^([a-z\.]\*)*$/.test(p))
            return true;
        return false;
    }
    const index = p.indexOf('*');
    if (index === -1) {
        return isEqual(s, p);
    } else {
        if (index === 1) { // 处理 字符 + *的情况
            let end = -1;
            const nextP = p.slice(2); // 除去当前正则
            while (true && end <s.length) {
                if (end === -1 || s.charAt(end) === p.charAt(0) ||  p.charAt(0) === '.') {
                    if (isMatch(s.slice(end+1), nextP))
                        return true;
                    ++end;
                } else {
                    return false;
                }
            }
            return false;
        } else if (index > 1){
            if (isEqual(s.slice(0, index - 1), p.slice(0, index - 1)))
                return isMatch(s.slice(index - 1), p.slice(index - 1));
            else return false;
        }
    }
};
