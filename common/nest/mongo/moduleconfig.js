// Fill-in the specific values and save this file without the -template

// As this is not in the compilation area, use vanilla JS instead of TS
module.exports = function() {
  return {
    mongo: {
      uri: 'mongodb://localhost:27017/',
      database: 'test',
    },
  };
};
