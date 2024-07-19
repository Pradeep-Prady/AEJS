// jest.config.cjs

module.exports = {
  // Jest configuration options
  testMatch: ['**/*.test.js'], // Example test file pattern
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // Use Babel for JavaScript files
  },
};
