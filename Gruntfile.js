module.exports = function (grunt) {
    grunt.initConfig({
        // Automatically run a task when a file changes
        watch: {
            styles: {
                files: ["heysaopaulo/static/css/less/*"],
                tasks: "less"
                // options: { livereload: true }
            },
            livereload: {
              options: { livereload: true },
              files: ['heysaopaulo/static/css/*.css',
                        'heysaopaulo/templates/*.html',
                        'heysaopaulo/static/js/*.js']
            }
        },

        // Compile specified less files
        less: {
            compile: {
                options: {
                    // These paths are searched for @imports
                    paths: ["css/less"]
                },
                files: {
                    "heysaopaulo/static/css/site.css": "heysaopaulo/static/css/less/site.less"
                }
            }
        },

        connect: {
            all: {
                options: {
                    hostname: '*'
                }
            }
        },
    });

    // Load tasks so we can use them
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks('grunt-contrib-connect');

    // The default task will show the usage
    grunt.registerTask("default", "Prints usage", function () {
        grunt.log.writeln("");
        grunt.log.writeln("Product site development");
        grunt.log.writeln("------------------------");
        grunt.log.writeln("");
        grunt.log.writeln("* run 'grunt --help' to get an overview of all commands.");
        grunt.log.writeln("* run 'grunt dev' to start developing.");
    });

    // The dev task will be used during development
    grunt.registerTask("dev", ["less:compile", "connect", "watch"]);
};
