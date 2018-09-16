// 输出今天的日期，以YYYY-MM-DD 方式，比如今天是2020年3月31日，则输出2020-03-31

var d = new Date();

var year = d.getFullYear();

var month = d.getMonth() + 1;

month = month < 10 ? '0' + month : month;

var day = d.getDate();

day = day < 10 ? '0' + day : day;

alert (year + '-' + month + '-' + day);
