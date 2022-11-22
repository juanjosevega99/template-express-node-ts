module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  cacheDirectory: '.tmp/jestCache'
};

// module.exports = {
//   globals: {
//     "ts-jest": {
//       tsconfig: "tsconfig.json",
//     },
//   },
//   moduleFileExtensions: ["ts", "js"],
//   transform: {
//     "^.+\\.(ts|tsx)$": "ts-jest",
//   },
//   testMatch: ["**/test/**/*.spec.(ts|js)"],
//   testEnvironment: "node",
// };