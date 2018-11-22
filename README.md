# viki-web-lint

Viki sass and js shared linting configs

## install

package.json
```
  "scripts": {
    ...
    "lint:js": "eslint <jsdirectory>",
    "lint:js:fix": "eslint <jsdirectory> --fix",
    "lint:scss" : "sass-lint '<scssdirectory>/**/*.scss' -v -q --format compact",
    "lint:scss:fix" : "sass-lint '<scssdirectory>/**/*.scss' --fix",
    ...
  },
  "devDependencies": {
     ...
     "eslint-config-viki-web-lint": "git+ssh://git@github.com/viki-org/viki-web-lint.git#<commit-ish>"
     ...
  }
```

## for javacript
.eslintrc.js
```
module.exports = {
  "extends": ["viki-web-lint"]
};
```

## for scss

package.json
```
"sasslintConfig": "node_modules/eslint-config-viki-web-lint/sass-lint.yml",
```
