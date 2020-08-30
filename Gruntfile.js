module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      ts: {
          default: {
              tsconfig: './tsconfig.json'
          }
      },
      watch: {
          default: {
              files: ["src/ts/**/*", "src/d.ts/**/*", "index.htm", "index.css", "i.bmp"],
              tasks: ['ts:default'],
              options: {
                  livereload: true
              }
          }
      },
      connect: {
          server: {
              options: {
                  livereload: true
              }
          }
      },
      clean: {
          all: ["build", "dist", "dist.zip", "js13k.zip"]
      },
      'closure-compiler': {
          es2018: {
              closurePath: 'libbuild/closure-compiler-v20200719',
              js: 'build/out.js',
              jsOutputFile: 'dist/out.min.js',
              maxBuffer: 500,
              reportFile: 'closure.txt',
              options: {
                  compilation_level: 'ADVANCED_OPTIMIZATIONS',
                  language_in: 'ECMASCRIPT_2018',
                  language_out: 'ECMASCRIPT_2018',
                  externs: 'src/externs/externs.js'
              }
          },
          es5: {
              closurePath: 'libbuild/closure-compiler-v20200719',
              js: 'build/out.js',
              jsOutputFile: 'dist/out.min.js',
              maxBuffer: 500,
              reportFile: 'closure.txt',
              options: {
                  compilation_level: 'ADVANCED_OPTIMIZATIONS',
                  language_in: 'ECMASCRIPT_2018',
                  language_out: 'ECMASCRIPT5',
                  externs: 'src/externs/externs.js'
              }
          }
      },
      cssmin: {
        options: {
        },
        target: {
            files: {
            'dist/index.css': ['dist/index.css']
            }
        }
      },
      htmlmin: {
        dist: {
          options: {
            removeComments: true,
            collapseWhitespace: true
          },
          files: {
            'dist/index.htm': 'dist/index.htm'
          }
        }
      },
      inline: {
          dist: {
              src: 'dist/index.htm',
              dest: 'dist/index.htm'
          }
      },
      replace: {
          html: {
              src: ['dist/index.htm'],
              overwrite: true,
              replacements: [{
                  from: /build\/out\.js/g,
                  to:"out.min.js"
              }, { // gut the HTML entirely!
                  from: "</body></html>",
                  to: ""
              }, {
                  from: "<html>",
                  to: ""
              }, {
                  from: "<body>",
                  to: ""
              }]
          },
          js: {
              src: ['dist/out.min.js'],
              overwrite: true,
              replacements: [{
                  from: "'use strict';",
                  to:""
              }, {
                  from: "\n",
                  to: ""
              }, {
                  from: "void 0",
                  to: "null"
              }, {
                  from: "const ",
                  to: "let "
              }/*, {
                  from: "var ",
                  to: "let "
              }*//*, {
                  from: /\[(\d+)\]\:/,
                  to: "${1}:"
              }*/]
          },
      },
      copy: {
          html: {
              files: [
                  {expand: true, src: ['i.bmp'], dest: 'dist/'},
                  {expand: true, src: ['index.htm'], dest: 'dist/'},
                  {expand: true, src: ['index.css'], dest: 'dist/'}
              ]
          }
      },
      devUpdate: {
          main: {
              options: {
                  //task options go here
                  updateType: 'force',
                  reportUpdated: true
              }
          }
      }
  });

  // clean
  grunt.loadNpmTasks('grunt-contrib-clean');
  // load the plugin that provides the closure compiler
  grunt.loadNpmTasks('grunt-closure-compiler');
  // Load the plugin that provides the "TS" task.
  grunt.loadNpmTasks('grunt-ts');
  // copy
  grunt.loadNpmTasks('grunt-contrib-copy');
  // replace text in file
  grunt.loadNpmTasks('grunt-text-replace');
  // update version
  grunt.loadNpmTasks('grunt-dev-update');
  // inline js
  grunt.loadNpmTasks('grunt-inline');
  // live reload
  grunt.loadNpmTasks('grunt-contrib-watch');
  // server for live reload
  grunt.loadNpmTasks('grunt-contrib-connect');
  // copying html
  grunt.loadNpmTasks('grunt-contrib-copy');
  // minifying css
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // minifying html
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('reset', ['clean:all']);
  grunt.registerTask('prod', ['ts']);
  grunt.registerTask('dist', ['prod', 'closure-compiler:es2018', 'copy','cssmin','replace:html', 'replace:js', 'inline', 'htmlmin']);
  grunt.registerTask('default', ['prod', 'connect', 'watch']);

};