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
             files: ["../javascripts/**/*.js"],
             tasks: ["browserify"]
          },
          browserify: {
             files: ["../javascripts/*.js"],
             tasks: ["browserify"]
          }
       }
    });

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.registerTask("default", ["browserify", "watch"]);
 };