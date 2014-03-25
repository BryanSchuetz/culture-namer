module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      //Shell configuration
      jekyllBuild: {
        command: 'jekyll build --config _altconfig.yml'
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
      '_includes/_jsmods/*.js',
      '_layouts/*.html',
      '_posts/*.md',
      '_config.yml',
      'index.html',
      'assets/css/site.scss',
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
