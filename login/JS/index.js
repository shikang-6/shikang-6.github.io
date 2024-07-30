//中间首页
window.onload = function () {
    //获取img
    const img = document.getElementById("pop")
    const one = document.getElementById("one")
    const two = document.getElementById("two")
    const three = document.getElementById("three")
    const four = document.getElementById("four")
    const five = document.getElementById("five")
    const img1 = document.getElementById("pop1")
    const one1 = document.getElementById("one1")
    const two2 = document.getElementById("two2")
    const three3 = document.getElementById("three3")
    const four4 = document.getElementById("four4")

    const imgas = ["./images/13.jpg",
        "./images/14.jpg",
        "./images/15.jpg",
        "./images/16.jpg",
        "./images/17.jpg",
    ]
    const imgas1 = ["images/a2337eae-0e40-456c-8004-cf96da0a22ac.jpg",
        "./images/20.jpg",
        "./images/21.jpg",
        "./images/22.jpg",
    ]

    let bian = 0
    let bian1 = 0

    one.onclick = function () {
        if (bian = 0) {
            img.src = imgas[bian]
        }
        img.src = imgas[bian]
    }
    two.onclick = function () {
        if (bian = 1) {
            img.src = imgas[bian]
        }
    }
    three.onclick = function () {
        if (bian = 2) {
            img.src = imgas[bian]
        }
    }
    four.onclick = function () {
        if (bian = 3) {
            img.src = imgas[bian]
        }
    }
    five.onclick = function () {
        if (bian = 4) {
            img.src = imgas[bian]
        }
    }
    one1.onclick = function () {
        if (bian1 = 0) {
            img1.src = imgas1[bian1]
        }
        img1.src = imgas1[bian1]
    }
    two2.onclick = function () {
        if (bian1 = 1) {
            img1.src = imgas1[bian1]
        }
    }
    three3.onclick = function () {
        if (bian1 = 2) {
            img1.src = imgas1[bian1]
        }
    }
    four4.onclick = function () {
        if (bian1 = 3) {
            img1.src = imgas1[bian1]
        }
    }
}
