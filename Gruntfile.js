module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  // Default task.
  grunt.registerTask('default', ['jshint','build']);
  grunt.registerTask('vendor', ['concat:vendorjs', 'concat:vendorcss']);
  grunt.registerTask('build:css', ['compass:dist']);
  grunt.registerTask('build:js', ['jshint', 'concat:js']);
  grunt.registerTask('build:html', ['ngtemplates']);
  grunt.registerTask('build', ['clean:public', 'jshint', 'concat:index', 'build:css', 'build:js', 'build:html', 'vendor']);

   // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/* <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n ' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' License : <%= pkg.license %> \n' +
      ' */\n',
    src: {
      js: ['client/**/*.js'],
      html: ['client/app/**/*.html'],
      scss: ['client/**/*.scss']
    },
    clean:{
      public : ["public"]
    },
    concat:{
      index: {
        src: ['client/index.html'],
        dest: 'public/index.html',
        options: {
          process: true
        }
      },
      js: {
        src: ['<%= src.js %>'],
        dest: 'public/js/app.js',
        options: {
          process: true
        }
      },
      vendorjs:{
        src: [
          'bower_components/angular/angular.min.js',
          'bower_components/lodash/dist/lodash.min.js',
          'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js'
        ],
        dest: 'public/js/vendor.js'
      },
      vendorcss:{
        src: [
          'bower_components/bootstrap/dist/css/bootstrap.min.css'
        ],
        dest: 'public/css/vendor.css'
      }
    },
    jshint:{
      files:['gruntFile.js', '<%= src.js %>'],
      options:{
        globalstrict: true,
        curly:true,
        eqeqeq:true,
        immed:true,
        latedef:true,
        newcap:true,
        noarg:true,
        sub:true,
        boss:true,
        eqnull:true,
        globals:{
          "angular"  : true,
          "console"  : true,
          "document" : true
        }
      }
    },
    compass : {
      dist : {
        options : {
          sassDir : "server/styles",
          cssDir : "public/css",
          environment : "production"
        }
      }
    },
    watch: {
      app: {
        files: ['<%= src.js %>'],
        tasks: ['build:js']
      },
      css: {
        files: ['<%= src.scss %>'],
        tasks: ['build:css']
      },
      index: {
        files: ['src/index.html'],
        tasks: ['concat:index']
      },
      html: {
        files: ['<%= src.html %>'],
        tasks: ['build:html']
      }
    },
    ngtemplates: {
      app: {
        cwd  : 'client/app',
        src  : '**/*.html',
        dest : 'public/js/app.templates.js'
      }
    }
  });
};