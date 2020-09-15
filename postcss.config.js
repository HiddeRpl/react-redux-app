module.exports = {
  plugins: {
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 1%', 'safari >= 9', 'ie >= 9'],
    },
    'autoprefixer': {},
    'cssnano': {},
  },
};
