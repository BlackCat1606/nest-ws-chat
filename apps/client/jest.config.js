module.exports = {
  name: "nest-chat",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/client/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
