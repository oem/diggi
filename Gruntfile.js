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

    sass: {
      build: {
        files: { 'build/css/diggi.css': 'src/css/main.scss' }
      }
    },

    cssmin: {
      build: {
        src: ['build/css/diggi.css'],
        dest: 'build/css/diggi.css'
      }
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
      css: {
        files: ['src/css/**/*'],
        tasks: ['buildcss']
      },
      javascript: {
        files: ['src/js/**/*'],
        tasks: ['buildjs']
      },
      templates: {
        files: ['src/tmpl/angular/**/*.html'],
        tasks: ['buildjs']
      }
    },
    clean: ["build", "tmp"]
  });

  grunt.registerTask('buildjs', ['html2js:dist', 'uglify']);
  grunt.registerTask('buildhtml', ['copy:html']);
  grunt.registerTask('buildcss', ['sass', 'cssmin']);

  grunt.registerTask('run', ['connect', 'watch']);
  grunt.registerTask('build', ['clean', 'buildjs', 'buildhtml', 'buildcss']);
  grunt.registerTask('default', ['build']);
};

