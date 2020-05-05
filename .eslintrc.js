module.exports = {
  env: {
    "browser": true,
    "es6": true,
    "node": true
  },
  extends: [
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint"
  ],
  parserOptions: {
    "parser": "@typescript-eslint/parser"
  },
  plugins: [
    "nuxt",
    "@typescript-eslint"
  ],
  parser: "vue-eslint-parser",
  rules: {
    "class-methods-use-this": "off",
    "import/no-unresolved": "off",
    "lines-between-class-members": "off",
    "no-param-reassign": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-restricted-globals": "off",
    "nuxt/no-cjs-in-config": "off",
    "import/extensions": "off",
    "@typescript-eslint/interface-name-prefix": [
      "error",
      {
        "prefixWithI": "always"
      }
    ]
  }
}
