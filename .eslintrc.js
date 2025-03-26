// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "prettier", "plugin:import/typescript"],
  plugins: ["prettier", "unused-imports"],
  ignorePatterns: ["/dist/*"],
  rules: {
    "unused-imports/no-unused-imports": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {},
      node: {
        paths: ["app", "components"],
        extensions: [".ts", ".tsx"],
      },
    },
  },
};
