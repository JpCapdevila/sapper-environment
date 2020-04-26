const dotenv = require('dotenv');

module.exports = (filterPrefix = 'SAPPER_APP_', targetPrefix = 'process.env.', excluded = [], dotEnvOptions) => {
    const result = dotenv.config(dotEnvOptions);
    if (result.error) {
      throw result.error;
    }
    
    const SAPPER_APP_ENV_VARS = {};
    for (let key in result.parsed) {
        if (key.includes(filterPrefix) && !excluded.includes(key)) SAPPER_APP_ENV_VARS[targetPrefix + key] = ("'" + process.env[key] + "'");
    }
    return SAPPER_APP_ENV_VARS;
};
