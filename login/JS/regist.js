// 用户名审核
function checkuser () {
  var use = document.getElementById("username").value
  var re = /^(?=.*[a-zA-Z])(?=.*\d).{6,16}$/
  var result = re.test(use)
  if (!result) {
    document.getElementById("user").innerHTML = "格式错误"
    return false
  } else {
    document.getElementById("user").innerHTML = ""
    return true
  }

}
// 判断密码
function checkpas () {
  var pass = document.getElementById("password").value
  var re2 = /^(?=.*[a-z])(?=.*\d)[^]{8,16}$/
  var result2 = re2.test(pass)
  if (!result2) {
    document.getElementById("yespas").innerHTML = "密码格式有误"
    return false
  } else {
    document.getElementById("yespas").innerHTML = ""
    return true
  }
}
// 确认密码
function checkpas1 () {
  var pass1 = document.getElementById("password").value
  var pass2 = document.getElementById("password1").value
  if (pass1 == pass2) {
    document.getElementById("yespas1").innerHTML = ""
    return true
  } else {
    document.getElementById("yespas1").innerHTML = "两次密码不同"
    return false
  }
}
//邮箱判断
function checkemi () {
  var emai = document.getElementById("Email").value
  var re3 = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;;
  var result3 = re3.test(emai)
  if (!result3) {
    document.getElementById("emi").innerHTML = "邮箱格式有误"
    return false
  } else {
    document.getElementById("emi").innerHTML = ""
    return true
  }
}
//姓名判断
function checkname () {
  var name = document.getElementById("rename").value
  var re4 = /^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}$/
  var result4 = re4.test(name)
  if (!result4) {
    document.getElementById("nam").innerHTML = "姓名输入错误"
    return false
  } else {
    document.getElementById("nam").innerHTML = ""
    return true
  }
}
//电话
function checktel () {
  var tel = document.getElementById("Telphone").value
  var re5 = /^[1]+[3,8]+\d{9}$/
  var result5 = re5.test(tel)
  if (!result5) {
    document.getElementById("tel").innerHTML = "电话输入错误"
    return false
  } else {
    document.getElementById("tel").innerHTML = ""
    return true
  }
}
//生日
function checkbir () {
  var bir = document.getElementById("Birthday").value
  var re6 = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  var result6 = re6.test(bir)
  if (!result6) {
    document.getElementById("bir").innerHTML = "请正确输入"
    return false
  } else {
    document.getElementById("bir").innerHTML = ""
    return true
  }
}
//注册按钮
function check () {
  var arr = document.getElementById("checkcode").value
  if (checkuser() && checkpas() && checkpas1() && checkemi() && checktel() && checkname() && arr == 5374 && checkbir()) {
    alert("恭喜您！注册成功！")
  } else {
    alert("注册失败")
  }
}