module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  "collectCoverageFrom": [
    "src/**/*.{js,jsx,vue}",
    "!**/node_modules/**",
    "!src/plugins/*",
    "!src/**/index.js",
    "!src/*",
    "!**/vendor/**"
  ],
  "testMatch": ['**/tests/**/*.spec.{j,t}s?(x)']
}
