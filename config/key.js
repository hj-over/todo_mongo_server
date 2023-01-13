if (process.env.NODE_ENV === "production") {
  //배포 상태
  module.exports = require("./production.js");
} else {
  //개발 중
  module.exports = require("./dev.js");
}
