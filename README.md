# danger-plugin-eslint

[![Build Status](https://travis-ci.org/danpalmer/danger-plugin-eslint.svg?branch=master)](https://travis-ci.org/danpalmer/danger-plugin-eslint) [![npm version](https://badge.fury.io/js/danger-plugin-eslint.svg)](https://badge.fury.io/js/danger-plugin-eslint) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> Eslint your code with Danger

## Usage

Install:

```sh
yarn add danger-plugin-eslint --dev
```

At a glance:

```js
// dangerfile.js
import eslint from "danger-plugin-eslint";

eslint();
```

This fork of danger-plugin-eslint automatically comments inline on linter violations.

Slightly more advanced users may be interested in providing the `PluginOptions`. Among other things, this allows you to inject your own logic to be run for every lint message.

Some use cases include:

- customizing the formatting of the lint-error-message (since this comments inline in your source, this might be useful!)
- building your own workflow where PRs shouldn't always fail due to the lint errors if the PR is labeled: WIP, for example!

```ts
eslint(undefined, {
  onLintMessage: ({ filePath, line, hasFixesOrSuggestions, linterMessage, formattedMessage, suggestedReporter }) => {
    if (prIsWIP() && suggestedReporter === error) {
      warn(formattedMessage, filePath, line);
    } else {
      suggestedReporter(formattedMessage, filePath, line);
    }
  },
});
```

## Changelog

See the GitHub [release history](https://github.com/fbartho/danger-plugin-eslint/releases).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
