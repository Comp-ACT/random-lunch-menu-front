module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'airbnb'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/button-has-type': 'off',
  },
};
