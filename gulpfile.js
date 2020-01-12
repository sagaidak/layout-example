var gulp      = require('gulp'), // Подключаем Gulp
    //sass        = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync = require('browser-sync'); // Подключаем Browser Sync



gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});

gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.sass', gulp.parallel('sass')); // Наблюдение за sass файлами
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));

