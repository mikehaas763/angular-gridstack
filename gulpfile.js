var gulp = require('gulp');
var Builder = require('systemjs-builder');

var config = {
    paths: {
        entry: 'Gridstack/AngularBinding/Gridstack.js',
        sfxBundle: 'dist/angular-gridstack.js'
    }
};

function build() {
    var builderConfig = {
        transpiler: 'babel'
    };
    return new Builder(builderConfig)
        .buildSFX(config.paths.entry, config.paths.sfxBundle)
        .then(function() {
            console.log('Build complete');
        })
        .catch(function(err) {
            console.log('Build error');
            console.log(err);
        });

}
gulp.task(build);

function watch() {
    gulp.watch(['Gridstack/**/*.js'], build);
}
gulp.task('watch', gulp.series(build, watch));