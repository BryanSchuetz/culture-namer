module.exports = function(grunt) {
    //All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      //Shell onfiguration
      jekyllBuild: {
        command: 'jekyll build'
      }
    },
    watch: {
      //Watch configuration
      options: {
          interrupt: true,
          atBegin: true,
          livereload: true
      },
      files: [
      'index.html',
      '_includes/*.html',
      '_layouts/*.html',
      '_posts/*.md',
      '_config.yml',
      'index.html',
      'assets/css/main.scss',
      'assets/_sass/*.scss',
      '_data/*.yml',
      '*.md'
      ],
      tasks: ['shell:jekyllBuild']
    }
  });
  //Where we tell Grunt we plan to use this plug-in
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //Where we tell Grunt what to do when we type "grunt"
  grunt.registerTask('default', ['shell']);
};
