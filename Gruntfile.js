// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';

module.exports = function (grunt) {
	// show elapsed time at the end
	require('time-grunt')(grunt);
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	require('grunt-readme')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			release: {
				files: [
					{
						dot: false,
						src: ['<%= pkg.directories.release %>/*']
					}
				]
			}
		},
		jshint: {
			options: {
				force: true,
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'Gruntfile.js',
				'<%= pkg.directories.source %>/*.js'
			]
		},
		uglify: {
			options: {
				banner: '/*\n<%= pkg.name %>\nCreated by <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %>\n*/\n'
			},
			dist: {
				files: {
					'<%= pkg.directories.release %>/<%= pkg.name.toLowerCase() %>-<%= pkg.version %>.min.js': ['<%= pkg.directories.source %>/*.js']
				}
			}
		},

		copy: {
			demo: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= pkg.directories.release %>',
					dest: '<%= pkg.directories.demo %>/scripts',
					src: '*.js'
				}]
			}
		}
	});

	grunt.registerTask('deploy', [
		'clean:release',
		'uglify',
		'copy:demo'
	]);

	grunt.registerTask('default', [
		'jshint',
		'deploy'
	]);
};