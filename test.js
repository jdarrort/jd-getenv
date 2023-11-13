const EnvGet = require("./index");

var ENV_TEST= {
    "NUM1" : "123",
    "NUM2" : "",
    "NUM3" : "0",
    "NUM4" : "a",
    "STR1" : "abc",
    "STR2" : "",
    "STR5" : "0",
    "STR3" : 3,
}
process.env = {...ENV_TEST};
console.log(process.env);
console.log(EnvGet.int("NUM1"));
console.log(EnvGet.int("NUM2", "default"));
console.log(EnvGet.int("NUM3"));
console.log(EnvGet.int("NUM4","default"));
console.log(EnvGet.string("NUM4","default_num4"));
console.log(EnvGet.string("STR1","default_str1"));
console.log(EnvGet.string("STR2"));
console.log(EnvGet.string("STR3","default_str3"));
console.log(EnvGet.string("STR4","default_str4"));
console.log(EnvGet.string("STR5","default_str5"));
// console.log(EnvGet.string("STR22"));
