class EnvChecker {
    constructor() { }
    get(envvar) {
        if (envvar) return process.env[envvar];
        else return null;
    }
    int(envvar, _default) {
        let value = this.get(envvar);
        try {
            if ((value === undefined && arguments.length == 1) || !(/^-?\d+$/.test(value))) { throw 1};
            return parseInt(value) ;
        } catch (e) {
            if (_default !== undefined) return _default;
        }
        throw new Error(`EnvChecker : ${envvar} is not an Int, and no default value`);
    }
    positiveInt(envvar, _default) {
        let value = this.get(envvar);
        try {
            if ((value === undefined && arguments.length == 1) || !(/^-?\d+$/.test(value))) { throw 1};
            return parseInt(value) ;
        } catch (e) {
            if (_default !== undefined) return _default;
        }
        throw new Error(`EnvChecker : ${envvar} is not an Int, and no default value`);
    }    
    json(envvar, _default) {
        let val = this.get(envvar);
        try {
            if (val === undefined || !(/^[\[|\{]/.test(val))) { throw 1 };
            return JSON.parse(val);
        } catch (e) {
            if (_default !== undefined) return _default;
        }
        throw new Error(`EnvVarChecker : ${envvar} is not a JSON string, and no default value`);
    }
    
    string(envvar, _default) {
        let val = this.get(envvar);
        if (  val === undefined &&  arguments.length == 1 ) {
            throw new Error(`EnvVarChecker : ${envvar} is not a STRING, and no default value`);
        }
        return  this.get(envvar) || _default;        
    }    
}
module.exports = new EnvChecker();