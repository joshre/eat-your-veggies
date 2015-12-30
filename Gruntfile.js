module.exports = function(grunt) {
    grunt.initConfig({
        conf: {
            js: 'static**/*.js',
            stat: '_static'
        },
        uglify: {
            dist: {
                files: {
                    "<%= conf.stat %>/app.min.js": "<%= conf.stat %>"
                }
            }
        },
        watch: {
            scripts: {
                files: ["<%= conf.stat %>"],
                tasks: ["uglify"]
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['watch']);
}