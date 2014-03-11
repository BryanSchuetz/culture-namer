module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      //Shell configuration
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
  //Required plugins
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');
  //What task to run at the default "grunt"
  grunt.registerTask('default', ['watch']);
};
