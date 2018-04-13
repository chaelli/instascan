require('babel-polyfill');
require('webrtc-adapter');

var Instascan = {
  Scanner: require('./src/scanner')
};

module.exports = Instascan;
