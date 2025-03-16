import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import unusedImports from "eslint-plugin-unused-imports";
import airbnbBase from "eslint-config-airbnb-base";
import airbnbBaseTypescript from "eslint-config-airbnb-base/rules/typescript";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node
      },
      plugins: {
        "@typescript-eslint": tseslint,
        "unused-imports": unusedImports,
        react: pluginReact
      },
      rules: {
        ...airbnbBase.rules,
        ...airbnbBaseTypescript.rules,
        "no-unused-vars": "off",
        "unused-imports/no-unused-vars": [
          "warn",
          {
            vars: "all",
            varsIgnorePattern: "^_",
            args: "after-used",
            argsIgnorePattern: "^_",
            caugthErrorsIgnorePattern: "^_"
          }
        ]
      }
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"]
        }
      },
    }
  }
];