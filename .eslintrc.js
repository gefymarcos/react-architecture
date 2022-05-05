module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  extends: ["airbnb", "plugin:prettier/recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    extraFileExtensions: [".scss"]
  },
  plugins: ["react", "react-hooks", "jsx-a11y", "import", "@typescript-eslint"],
  settings: {
    react: {
      version: "detect"
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      },
      typescript: {
        alwaysTryTypes: true
      }
    }
  },
  rules: {
    "no-unused-vars": "off",
    "no-underscore-dangle": "off",
    "no-use-before-define": "off",
    "no-magic-numbers": "off",
    "no-shadow": "off",
    "no-plusplus": "off",
    "default-param-last": "off",
    "class-methods-use-this": "off",
    "no-console": ["error", { allow: ["warn", "error", "info", "debug"] }],
    "no-irregular-whitespace": "off",
    "no-unused-expressions": ["error", { allowTernary: true }],
    "arrow-parens": ["error", "as-needed"],
    "arrow-body-style": [
      "error",
      "as-needed",
      { requireReturnForObjectLiteral: true }
    ],
    "comma-dangle": ["error", "never"],
    quotes: ["off"],
    "max-len": ["off"],
    indent: ["off"],
    camelcase: ["off"],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/quotes": ["error", "double", "avoid-escape"],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/no-magic-numbers": [
      "error",
      {
        ignore: [-1, 0, 1, 2],
        ignoreEnums: true,
        ignoreReadonlyClassProperties: true
      }
    ],
    "import/extensions": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "error",
    "import/no-extraneous-dependencies": "off",
    "import/no-webpack-loader-syntax": "off",
    "react/jsx-fragments": ["off", "syntax"],
    "react/destructuring-assignment": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/jsx-filename-extension": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-access-state-in-setstate": "off",
    "react/require-default-props": "off",
    "react/no-danger": "off",
    "react/static-property-placement": "off",
    "react/no-array-index-key": "off"
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off"
      }
    }
  ]
};
