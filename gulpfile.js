"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var server = require("browser-sync").create();


gulp.task("serve",  function() {
  server.init({
    server: "",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("js/*.js").on("change", server.reload);
});