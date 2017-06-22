import 'babel-polyfill';
import fs from 'fs-extra-promise';
import _ from 'lodash';
import gulp from 'gulp';
import gulpClean from 'gulp-clean';

module.exports = async (gitignoreFile, ignoreList) => {
  const files = await fs.readFileAsync(gitignoreFile).then((file) => {
    const body = file.toString('utf8');
    return _.filter(body.replace(/\\/g, '').split('\n'), (line) => {
      return (line.length > 0 && line[0] !== '#' && !_.includes(ignoreList, line));
    });
  });
  return new Promise((resolve, reject) => {
    gulp.src(files, { read: false })
      .pipe(gulpClean()).on('finish', resolve);
  });
};
