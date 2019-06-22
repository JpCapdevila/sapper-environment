const dotenv = require('dotenv');
let memoizedVariables;

exports.prepareVariables = (filterPrefix = 'SAPPER_APP_', targetPrefix = 'process.env.', dotEnvOptions) => {
    if (memoizedVariables) return memoizedVariables;
    dotenv.config(dotEnvOptions);
    const SAPPER_APP_ENV_VARS = {};
    for (let key in process.env) {
        if (key.includes(filterPrefix)) SAPPER_APP_ENV_VARS[targetPrefix + key] = ("'" + process.env[key] + "'");
    }
    return (memoizedVariables = SAPPER_APP_ENV_VARS);
};

