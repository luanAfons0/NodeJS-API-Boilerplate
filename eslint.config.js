const standard = require('eslint-config-standard')

module.exports = [
    standard,
    {
        // Your overrides here
        extends: ['prettier'],
        ignores: ['**/node_modules/*'],
    },
]
