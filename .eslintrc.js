module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ["eslint:recommended"],
  ignorePatterns: ["**/node_modules/**", "!.prettierrc.js"],
  overrides: [
    {
      env: {
        browser: true,
        es6: true,
        node: true,
      },
      extends: [
        "eslint:recommended",
        "plugin:jest/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
      ],
      files: ["**/*.ts", "**/*.tsx"],
      parser: "@typescript-eslint/parser",
      rules: {
        "@typescript-eslint/consistent-type-imports": "error",
        "lines-between-class-members": ["error", "always"],
        "padding-line-between-statements": [
          "error",
          { blankLine: "always", prev: "function", next: "function" },
        ],
        "@typescript-eslint/no-explicit-any": ["off"],
        "react/prop-types": "off",
        "unused-imports/no-unused-imports": "error",
        "@typescript-eslint/no-unused-vars": ["error"],        
        "prettier/prettier": ["error", {}, { usePrettierrc: true }],
        "simple-import-sort/exports": "error",
        "simple-import-sort/imports": "error",
        "sort-keys": ["error", "asc", { caseSensitive: true, natural: false, minKeys: 2 }],
        "sort-keys-fix/sort-keys-fix": "warn",
        "jest/expect-expect": 0,
        "react/function-component-definition": [
          0,
          {
            namedComponents: "function-declaration" | "function-expression" | "arrow-function",
            unnamedComponents: "function-expression" | "arrow-function",
          },
        ],
        "react/no-multi-comp": [0],
      },
      settings: { react: { version: "detect" } },
    },
  ],
  parserOptions: { ecmaVersion: 8 },
  plugins: ["simple-import-sort", "sort-keys-fix", "unused-imports", "jest"],
  root: true,
};
