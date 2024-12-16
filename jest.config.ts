module.exports = {
    preset:'ts-jest',
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",
      "^.+\\.js$": "babel-jest",
    },
    testEnvironment: "jsdom",
    moduleNameMapper: {
      '^react-router-dom$': require.resolve('react-router-dom'),
    },
    transformIgnorePatterns: [
        '/node_modules/(?!redux-persist)/',
      ],
  };