const dotenv = require('dotenv');

module.exports = (filterPrefix = 'SAPPER_APP_', targetPrefix = 'process.env.', excluded = [], dotEnvOptions) => {
    dotenv.config(dotEnvOptions);
    const SAPPER_APP_ENV_VARS = {};
    for (let key in process.env) {
        if (key.includes(filterPrefix) && !excluded.includes(key)) SAPPER_APP_ENV_VARS[targetPrefix + key] = ("'" + process.env[key] + "'");
    }
    return SAPPER_APP_ENV_VARS;
};
