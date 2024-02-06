// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

if (process.env.STORYBOOK_ENABLED) {
  config.resolver.sourceExts = ["storybook.tsx", ...config.resolver.sourceExts];
}

config.resolver.resolverMainFields.unshift("sbmodern");

module.exports = config;
