module.exports = function (grunt) {
    grunt.initConfig({
       browserify: {
          js: {
             src: ["../javascripts/main.js"],
             dest: "../dist/app.js"
          },
          options: {
             browserifyOptions: {
                paths: [
                   "./node_modules"
                ]
             }
          }
       },
       watch: {
          javascripts: {
             files: ["javascripts/**/*.js", "!node_modules/**?*.js"],
             tasks: ["eslint","browserify"]
          },
          browserify: {
             files: ["../javascripts/*.js"],
             tasks: ["browserify"]
          }
       },
       eslint: {
        src: ["../javascripts/*.js", "!node_modules/**?*.js"]
      },
    });

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.registerTask("default", ["eslint", "browserify", "watch"]);
 };