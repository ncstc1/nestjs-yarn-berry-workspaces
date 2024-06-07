module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ts",]
      }
    }
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    semi: ['error', 'always', { omitLastInOneLineBlock: true }],
    'import/prefer-default-export': 'off',
    'no-trailing-spaces': 'error',
    'max-len': ['error', 132],
    'padded-blocks': 'off',
    'prettier/prettier': 'off',
    'no-console': 'off',
    'object-curly-newline': 'off',
    'arrow-body-style': 'off',
    'class-methods-use-this': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
    'import/prefer-default-export': 'off',
    'no-undef': 'error',
    'no-buffer-constructor': 'off',
    'no-spaced-func': 'off',
    'global-require': 'off',
    'lines-around-directive': 'off',
    'no-restricted-modules': 'off',
    'no-path-concat': 'off',
    'no-new-require': 'off',
    'no-mixed-requires': 'off',
    'handle-callback-err': 'off',
    'no-catch-shadow': 'off',
    'no-negated-in-lhs': 'off',
    'lines-between-class-members': 'off',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'no-plusplus': 'off',
    'operator-linebreak': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
      }
    ],
  },
  root: true,
  env: {
    node: true,
    es6: true,
    jest: true,
  },
};
