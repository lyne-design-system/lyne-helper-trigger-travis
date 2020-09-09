const axios = require('axios');

const configKeys = {
  branchName: 'branchName',
  message: 'message',
  travisToken: 'travisToken',
  travisUrl: 'travisUrl'
};

const isValidConfig = (config) => {
  const keys = Object.keys(config);

  const commit = keys.includes(configKeys.message);
  const url = keys.includes(configKeys.travisUrl);
  const token = keys.includes(configKeys.travisToken);
  const branch = keys.includes(configKeys.branchName);

  if (!config || !commit || !url || !token || !branch) {
    return false;
  }

  return true;
};

const triggerTravis = async (config) => {

  if (!isValidConfig(config)) {
    throw new Error('Please provide a valid configuration.');
  }

  const message = config[configKeys.message];
  const url = config[configKeys.travisUrl];
  const token = config[configKeys.travisToken];
  const branch = config[configKeys.branchName];

  const requestHeaders = {
    'Accept': 'application/json',
    'Authorization': `token ${token}`,
    'Content-Type': 'application/json',
    'Travis-API-Version': '3'
  };

  const requestBody = {
    request: {
      branch,
      message
    }
  };

  const requestConfig = {
    data: requestBody,
    headers: requestHeaders,
    method: 'POST',
    url
  };

  try {
    await axios.request(requestConfig);

    return true;
  } catch (e) {
    throw new Error(`Request Error -- ${e.response.data.error_type}: ${e.response.data.error_message}`);
  }
};

module.exports = triggerTravis;
