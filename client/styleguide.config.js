const path = require('path');

module.exports = {
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/StyleGuideWrapper'),
  },

  styles: {
    StyleGuide: {},
    Playground: {
      preview: {
        position: 'static',
        // transform: 'translate3d(0, 0, 0)',
        outline: '1px solid #661',
        zIndex: '100000000',
      },
    },
  },
};
