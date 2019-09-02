module.exports = {
  root: true,

  env: {
    node: true
  },

  globals: {
    $: true
  },

  extends: ["plugin:vue/essential", "@vue/prettier"],

  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "warn"
  },

  parserOptions: {
    parser: "babel-eslint"
  },

  overrides: [
    {
      files: ["**/__tests__/*.{j,t}s?(x)"],
      env: {
        jest: true
      }
    }
  ]
};
