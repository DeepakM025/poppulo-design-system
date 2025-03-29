module.exports = {
    testEnvironment: "jsdom", // Simulates a browser environment
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest", // Transpile TypeScript files
      "^.+\\.(js|jsx)$": "babel-jest", // Transpile JavaScript files
    },
    moduleNameMapper: {
      "\\.(css|scss|sass|less)$": "identity-obj-proxy", // Mock styles
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Global setup
    testPathIgnorePatterns: ["/node_modules/", "/dist/"], // Ignore compiled files
  };
  