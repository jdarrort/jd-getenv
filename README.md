# jd-getenv
usage 
```javascript
//With env 
// NODE_ENV : "production"
// MY_ENV_VAR : "hello"
// MY_INT_ENV_VAR : "123"
// MY_JSON_ENV_VAR : "{\"aproperty\" : 12345}"
// MY_NEGATIVEINT_ENV_VAR : "-1"

const EnvGet = require('jd-getenv`);
let t;
t = EnvGet.string("NODE_ENV");
// returns 'production'
t = EnvGet.string("MY_ENV_VAR", "My Default Value if not found");
// returns 'hello'
t = EnvGet.string("MY_ENV_VAR2", "DefaultValue");
// returns 'DefaultValue'
t = EnvGet.int("MY_INT_ENV_VAR", 10);
// returns '123'
t = EnvGet.positiveInt("MY_INT_ENV_VAR", 10);
// returns '123'
t = EnvGet.json("MY_JSON_ENV_VAR", {some : "jsonObject"} );
// returns {aproperty : 12345}

// Following will return exception : 
t = EnvGet.int("NODE_ENV"); // "production"  not int
t = EnvGet.json("NODE_ENV");  // "production"  not json
t = EnvGet.json("MY_INT_ENV_VAR");
t = EnvGet.json("MY_NEGATIVEINT_ENV_VAR");

```

`EnvGet.{type}( env_var_name, default_value)` : 
- `{type}` : one of  {int/positiveInt/json/string}, to check type of the env var
- `env_var_name` : name of the environment variable to be get/checked
- `default_value` : Value to be used if environment variable not set.
- returns the parsed value according to `{type}`, or, if not found the `default_value` if passed.

Throw an error if 
- `env_var_name` not found and no `default_value`
- `env_var_name` found but not compatible

Remark : 
- No check of type validity of the `default_value`
- json type expects a valid object , ie string starting with `{` or `[`
- 