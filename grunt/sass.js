const sass = require('sass');

module.exports = function(grunt) {
  return {
    main: {
      options: {
        implementation: sass,
        sourcemap: "none",
      },
      files: {
        'build/css/intlTelInput.css': 'src/css/intlTelInput.scss'
      }
    },
    demo: {
      options: {
        implementation: sass,
        sourcemap: "none",
      },
      files: {
        'build/css/demo.css': 'src/css/demo.scss'
      }
    }
  };
};
