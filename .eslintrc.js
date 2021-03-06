module.exports = {
  root: true,
  extends: ['airbnb', 'plugin:flowtype/recommended'],
  ecmaVersion: 6,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true
  },
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  rules: {
    'operator-linebreak': [ 2, 'before' ],
    'react/jsx-no-bind': 0,
    'react/prefer-stateless-function': 0,
    'func-style': [2, 'expression'],
    'no-use-before-define': 0,
    'no-unused-vars': [2, { 'ignoreRestSiblings': true }],
    'max-len' : [2, {
      code : 100,
      tabWidth : 2,
      ignorePattern : '^import',
      ignoreUrls : true
    }],
    'no-underscore-dangle': [ 2, { allowAfterThis: true }],
    'no-mixed-operators': [2, { allowSamePrecedence: true }],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-direct-mutation-state': 2,
    'react/no-unused-prop-types': [2, {skipShapeProps: true }],
    'react/sort-comp': 0,
    'react/prop-types': 0,

    'no-void': 0,

    // Disable new-cap in favor of babel/new-cap
    'new-cap': 0,
    'babel/new-cap': 2,
    'no-plusplus': [2, { 'allowForLoopAfterthoughts': true }],

    // In process
    'react/forbid-prop-types': 0,
    'class-methods-use-this': 0,
    'react/require-default-props': 1,

    // Second pass
    "comma-dangle": 0,
    "jsx-a11y/img-has-alt": 0,
    'jsx-a11y/iframe-has-title': 0,
    'jsx-a11y/alt-text': 0,
    "no-return-await": 0,
    "no-useless-escape": 0,
    "react/jsx-wrap-multilines": 0,
    "react/no-array-index-key": 0,
    "react/require-default-props": 0,

    'import/no-named-as-default': 0,

    'jsx-a11y/no-autofocus': 0,
    'max-len': 0,
    'import/prefer-default-export': 0,
  },
  settings: {
    'import/resolver': {
      'webpack': {
        'config': 'webpack.config.babel.js',
      },
    },
    'import/core-modules': [ 'config', 'typekit' ],
    'flowtype': {
      'onlyFilesWithFlowAnnotation': false,
    },
  },
  plugins: [
    'babel',
    'react',
    'import',
    'flowtype',
  ],
};
