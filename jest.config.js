module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  "collectCoverageFrom": [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/vendor/**"
  ],
  "testMatch": ['**/tests/**/*.spec.{j,t}s?(x)']
}
