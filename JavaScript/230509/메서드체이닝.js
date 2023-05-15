let txt = 'abcde1abc12abb'

console.log(txt.split('abcde', '').replace('abc', '+'))

console.log(txt.split('abcde', 'abc', 'abb')