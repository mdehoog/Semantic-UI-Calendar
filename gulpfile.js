var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var flatten = require('gulp-flatten');
var clone = require('gulp-clone');
var replace = require('gulp-replace');
var minifyCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var path = require('path');
var npmPackage = require('./package.json');

var settings = {
  less: {
    paths: [
      path.join(__dirname, 'node_modules', 'semantic-ui-less')
    ]
  },

  /* What Browsers to Prefix */
  prefix: {
    browsers: [
      'last 2 versions',
      '> 1%',
      'opera 12.1',
      'bb 10',
      'android 4'
    ]
  },

  /* File Renames */
  rename: {
    minJS     : { extname : '.min.js' },
    minCSS    : { extname : '.min.css' },
    rtlCSS    : { extname : '.rtl.css' },
    rtlMinCSS : { extname : '.rtl.min.css' }
  },

  /* Minified CSS Concat */
  minify: {
    processImport       : false,
    restructuring       : false,
    keepSpecialComments : 1,
    roundingPrecision   : -1,
  },

  /* Minified JS Settings */
  uglify: {
    mangle           : true,
    preserveComments : 'some'
  }
};

var comments = {
  // remove all comments from config files (.variable)
  variables : {
    in  : /(\/\*[\s\S]+?\*\/+)[\s\S]+?\/\* End Config \*\//,
    out : '$1',
  },
  // add version to first comment
  license: {
    in  : /(^\/\*[\s\S]+)(# Semantic UI )([\s\S]+?\*\/)/,
    out : '$1$2' + npmPackage.version + ' $3'
  },
  // adds uniform spacing around comments
  large: {
    in  : /(\/\*\*\*\*[\s\S]+?\*\/)/mg,
    out : '\n\n$1\n'
  },
  small: {
    in  : /(\/\*---[\s\S]+?\*\/)/mg,
    out : '\n$1\n'
  },
  tiny: {
    in  : /(\/\* [\s\S]+? \*\/)/mg,
    out : '\n$1'
  }
};

gulp.task('default', function() {
  gulp.start('less', 'javascript');
});

gulp.task('less', function () {
  return gulp.src('./src/definitions/**/*.less')
    .pipe(less(settings.less))
    .pipe(autoprefixer(settings.prefix))
    .pipe(replace(comments.variables.in, comments.variables.out))
    .pipe(replace(comments.license.in, comments.license.out))
    .pipe(replace(comments.large.in, comments.large.out))
    .pipe(replace(comments.small.in, comments.small.out))
    .pipe(replace(comments.tiny.in, comments.tiny.out))
    .pipe(flatten())
    .pipe(gulp.dest('./dist'))
    .pipe(minifyCSS(settings.minify))
    .pipe(rename(settings.rename.minCSS))
    .pipe(gulp.dest('./dist'));
});

gulp.task('javascript', function () {
  return gulp.src('./src/definitions/**/*.js')
    .pipe(flatten())
    .pipe(replace(comments.license.in, comments.license.out))
    .pipe(gulp.dest('./dist'))
    .pipe(uglify(settings.uglify))
    .pipe(rename(settings.rename.minJS))
    .pipe(gulp.dest('./dist'));
});
