// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Habilita a transformação de SVG
config.transformer = {
  ...config.transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

// Adiciona a extensão SVG
config.resolver.assetExts = config.resolver.assetExts.filter(
  (ext) => ext !== "svg"
);
config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  "svg",
  // Inclua outras extensões personalizadas se necessário
];

if (process.env.STORYBOOK_ENABLED) {
  config.resolver.sourceExts = ["storybook.tsx", ...config.resolver.sourceExts];
}

config.resolver.resolverMainFields.unshift("sbmodern");

module.exports = config;
