module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', 'json', '.ios.js', '.android.js'],
        alias: {
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@redux': './src/redux',
          '@action': './src/redux/action',
          '@utils': './src/utils',
          '@icons': './assets/constants/icons',
          '@images': './assets/constants/images.js',
          '@components': './src/components',
          '@shared': './src/components/shared',
          '@theme': './src/theme'
        }
      }
    ],
    'react-native-reanimated/plugin'
  ]
};
