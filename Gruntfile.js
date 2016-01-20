'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    html2js: {
      dist: {
        src: ['src/tmpl/angular/**/*.html'],
        dest: 'tmp/templates.js'
      }
    },
    uglify: {
      build: {
        files: {
          'build/js/diggi.min.js': [
            'node_modules/angular/angular.js',
            'node_modules/angular-route/angular-route.js',
            'tmp/templates.js',
            'src/js/angular/routers/*.js',
            'src/js/angular/controllers/*.js',
            'src/js/angular/services/*.js',
            'src/js/angular/directives/*.js',
            'src/js/angular/app.js'
          ]
        },
        options: {
          mangle: false
        }
      }
    },
    copy: {
      html: { files: [{expand: true, cwd: 'src/tmpl', src: ['*'], dest: 'build/', filter: 'isFile'}] }
    },
    connect: {
      server: {
        options: {
          hostname:'*',
          port: 4000, base: './build' }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      html: {
        files: ['src/tmpl/*'],
        tasks: ['buildhtml']
      },
      javascript: {
        files: ['src/js/**/*'],
        tasks: ['build']
      },
      templates: {
        files: ['src/tmpl/angular/**/*.html'],
        tasks: ['buildjs']
      }
    }
  });

  grunt.registerTask('buildjs', ['html2js:dist', 'uglify']);
  grunt.registerTask('buildhtml', ['copy:html']);

  grunt.registerTask('run', ['connect', 'watch']);
  grunt.registerTask('build', ['buildjs', 'buildhtml']);
  grunt.registerTask('default', ['build']);
};

