module.exports = {
  name: "nest-chat",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/nest-chat/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
