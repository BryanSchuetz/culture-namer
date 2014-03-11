module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['shell']);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            }
        },
        watch: {
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
            tasks: ['shell:jekyllBuild'],
            options: {
                interrupt: true,
                atBegin: true,
                livereload: true
            }
        }
    });
};
