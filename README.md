[![Build Status](https://travis-ci.com/lyne-design-system/lyne-helper-trigger-travis.svg?branch=master)](https://travis-ci.com/lyne-design-system/lyne-helper-trigger-travis) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release) ![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/lyne-design-system/lyne-helper-trigger-travis?label=release)

# Lyne Helper Trigger Travis

Trigger a build on TravisCI via Travis API v3.

## Installation

Install the Helper with the following command:
```bash
npm install --save lyne-helper-trigger-travis
```

## Usage

Require the module:

```
const triggerTravis = require('lyne-helper-trigger-travis');
```

Build up your config:

```
const config = {
  branchName: 'BRANCH_NAME',
  message: 'MESSAGE',
  travisToken: 'TRAVIS_TOKEN',
  travisUrl: 'TRAVIS_URL'
};
```

The module has a single method which returns a promise. You can use it as follows:

```
triggerTravis(config)
  .then((data) => {
    if (data) {
      console.log(data);
    }
  })
  .catch((err) => {
    console.log(err);
  });
```

### Config

`branchName`: the branch on which the job should trigger

`message`: the message which acts as the commit message for the build

`travisToken`: the access token from your travis account

`travisUrl`: the url to the travis project.

#### travisUrl
The Schema is as follows: https://api.travis-ci.com/repo/{slug|id}/requests.

If you use travis.com, please use https://api.travis-ci.com/repo/{slug|id}/requests.

Example for a project on travis.com with the user name `lyne-design-system` and the repo name `lyne-design-tokens`: https://api.travis-ci.com/repo/lyne-design-system%2Flyne-design-tokens/requests

## Development

### Conventional Commits

Please follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification to make sure we can automatically determine the next release version if necessary.

### Deployment

The package is automatically versioned and published to npm after successfull build on travis.
