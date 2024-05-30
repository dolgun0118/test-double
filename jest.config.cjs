// jest.config.js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  // setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.[tj]sx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["text-encoding"],
  moduleNameMapper: {
    d3: "<rootDir>/node_modules/d3/dist/d3.js",
  },
};
