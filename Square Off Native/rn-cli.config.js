module.exports = {
  getTransformModulePath() {
    return require.resolve("react-native-typescript-transformer");
  },
  getSourceExts() {
    return ["ts", "tsx"];
  }
};

const {
  BrazilMetroBundlerConfig
} = require("@amzn/brazil-metro-bundler-config");

new BrazilMetroBundlerConfig()
  .workspaceWatcher({ inMetroConfig: true })
  .start();
