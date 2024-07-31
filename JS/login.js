function checkUser() {
  var use = document.getElementById("username");
  var pas = document.getElementById("password");
  if (use.value == 'sk' && pas.value == 250) {
    window.location.href = "llog.html"
  } else {
    alert("用户或密码输入错误");
  }
}
