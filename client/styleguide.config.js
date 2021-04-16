const path = require('path');

module.exports = {
  ignore: [
    '**/*.spec.js',
    '**/src/components/AddToWatchList.js',
    '**/src/components/Row.js',
    '**/src/components/Banner.js',
    '**/src/components/Menu.js',
    '**/src/components/Overlay.js',
    '**/src/components/FriendRows.js',
    '**/src/components/OverlayMenu.js',
    '**/src/components/ImageContainer.js',
    '**/src/components/Ui/Navigation/Menu.js',
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/StyleGuideWrapper'),
  },

  styles: {
    StyleGuide: {},
    Playground: {
      preview: {
        position: 'static',
        outline: '1px solid black',
        zIndex: '0',
        top: 'auto',
        left: 'auto',
      },
    },
  },
};
