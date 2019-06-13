const gulp = require('gulp');

function clean () {

}

const taskBuild = gulp.series(
  clean
);

const taskDeploy = gulp.series(
  clean
);


/** 빌드 Task*/
exports['build'] = taskBuild;

/** 배포 Task*/
exports['deploy'] = taskDeploy;
