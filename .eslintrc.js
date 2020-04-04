module.exports = {
  // "env": {
  //   "node": true,
  //   "es6": true
  // },
  // "settings": {
  //   "react": {
  //     "version": "16.12"
  //   }
  // },
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
  extends: [
    require.resolve('@umijs/fabric/dist/eslint'),
    // 'airbnb',
    // "prettier",
    // "plugin:react/recommended",
    // "plugin:import/typescript",
    // "prettier/react"
  ],
  parser: '@typescript-eslint/parser',
  // "plugins": ["react", "babel", "@typescript-eslint"],
  rules: {
    // "import/extensions": 0,
    // "import/no-cycle": 0,
    // "import/no-extraneous-dependencies": 0,
    // "import/no-unresolved": 0,
    // "import/no-extraneous-dependencies": [
    //   "error",
    //   {
    //     "devDependencies": [
    //       "site/**",
    //       "tests/**",
    //       "scripts/**",
    //       "**/*.test.js",
    //       "**/__tests__/*",
    //       "*.config.js",
    //       "**/*.md",
    //     ],
    //   },
    // ],
    'import/no-extraneous-dependencies': 0,
    '@typescript-eslint/no-unused-vars': 1,
    'react/self-closing-comp': 1,
    'react/jsx-curly-brace-presence': 0,
    'no-shadow': 1,
    'react/prefer-stateless-function': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/alt-text': 0,
    'no-console': 1,
    'react/react-in-jsx-scope': 0,
    'arrow-body-style': 0,
    // "no-plusplus": 0,
    // "import/order": 1
  },
};
