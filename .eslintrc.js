module.exports = {
    "env": {
        "browser": true,
        "amd": true,
        "node": true

    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        semi: ["error", "always"],
        "no-var": "error",
        "prefer-const": "error"
    }
};
