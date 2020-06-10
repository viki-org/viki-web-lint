// Viki eslint config
module.exports = {
  extends: ['standard', 'plugin:prettier/recommended'],
  rules: {
    'react/jsx-uses-vars': 2,
    'react/jsx-uses-react': 2,
    'react/react-in-jsx-scope': 2,
    'space-before-function-paren': [0],
    'standard/object-curly-even-spacing': [2, 'either'],
    'standard/array-bracket-even-spacing': [2, 'either'],
    'standard/computed-property-even-spacing': [2, 'even'],
    'standard/no-callback-literal': [2, ['cb', 'callback']],
    'comma-dangle': ['error', 'always-multiline'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': 'warn',
  },
  parser: 'babel-eslint',
  plugins: ['eslint-plugin-standard', 'react', 'react-hooks'],
}
