module.exports = {
  name: 'currency-convertor',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/currency-convertor',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
