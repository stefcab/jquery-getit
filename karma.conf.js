module.exports = function(config) {
  config.set({
    files: [
			'node_modules/jquery/dist/jquery.js',
            'dist/jquery.getit.min.js',
            'dist/jquery.getit.css',
            'assets/js/jquery.toolpop.js',
			'test/setup.js',
            'test/spec/*'
    ],
    frameworks: ['qunit'],
		autoWatch: true
  });
};
