module.exports = {
    roots: [ "<rootDir>/src" ],
    testMatch: [ "<rootDir>/src/tests/**/*.test.js" ],
    transform: {
        "^.+\\.(js|jsx)$": "babel-jest",
      },
    setupFiles: [ "<rootDir>/enzyme.setup.js" ],
    testEnvironment: "jsdom",
    bail: true,
    verbose: true,
    errorOnDeprecated: false
  }