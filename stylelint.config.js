module.exports = {
  plugins: ["stylelint-prettier"],
  extends: "stylelint-config-recommended-scss",
  rules: {
    "prettier/prettier": true,
    "block-no-empty": null,
    "unit-whitelist": ["em", "rem", "px", "%", "vh", "vw", "s"],
    "selector-pseudo-element-no-unknown": [
      true,
      {
        ignorePseudoElements: ["v-deep"]
      }
    ],
    "media-feature-name-no-unknown": [
      true,
      {
        ignoreMediaFeatureNames: ["display-mode"]
      }
    ]
  }
}
