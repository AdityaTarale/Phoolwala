module.exports = {
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react-native/all',
    '@react-native-community',
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:import/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      modules: true,
      jsx: true
    },
    ecmaVersion: 6,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
    'react-native',
    'eslint-plugin-prettier',
    'eslint-plugin-react',
    'import',
    'unused-imports',
    'simple-import-sort'
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'none',
        singleQuote: true,
        jsxSingleQuote: false,
        printWidth: 100,
        semi: true,
        bracketSpacing: true
      }
    ],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'no-console': [
      'error',
      {
        allow: ['warn', 'error']
      }
    ],
    'global-require': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-native/no-raw-text': 0,
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-single-element-style-arrays': 2,
    'no-unsafe-optional-chaining': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'never',
      {
        ignorePackages: true,
        pattern: {
          js: 'never',
          jsx: 'never',
          json: 'always'
        }
      }
    ],
    'import/no-unresolved': [
      2,
      {
        caseSensitive: false
      }
    ],
    'react/prefer-stateless-function': [0],
    'react/function-component-definition': [
      0,
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: ['function-declaration', 'arrow-function']
      }
    ],
    // allow .js files to contain JSX code
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx']
      }
    ],
    'no-use-before-define': 'off',
    // ignore errors for the react-navigation package
    'react/prop-types': [
      'error',
      {
        ignore: ['navigation', 'navigation.navigate']
      }
    ],
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true
      }
    ],
    'react/jsx-props-no-spreading': 'off',
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
        packageDir: './'
      }
    ],
    'import/no-cycle': [0],
    'react/jsx-indent': [0],
    'react/sort-comp': [0],
    'react/destructuring-assignment': [0],
    'react/no-unescaped-entities': [
      'error',
      {
        forbid: ['>', '}']
      }
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: false
      }
    ],
    'react/no-access-state-in-setstate': 0,
    'class-methods-use-this': 0,
    'jsx-quotes': ['error', 'prefer-double'],
    camelcase: 'off',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],
    semi: ['error', 'always'],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error'
  },
  overrides: [
    // override "simple-import-sort" config
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `react` related packages come first.
              ['^react', '^@?\\w'],
              // Internal packages.
              ['^(@|components)(/.*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.?(css)$']
            ]
          }
        ]
      }
    }
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      alias: {
        map: [
          ['@navigation', './src/navigation'],
          ['@screens', './src/screens'],
          ['@redux', './src/redux'],
          ['@action', './src/redux/action'],
          ['@utils', './src/utils'],
          ['@icons', './assets/constants/icons'],
          ['@images', './assets/constants/images'],
          ['@components', './src/components'],
          ['@shared', './src/components/shared'],
          ['@theme', './src/theme']
        ]
      }
    }
  }
};
