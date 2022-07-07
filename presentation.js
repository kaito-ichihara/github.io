// function birthDayCount() {
//     /*ページを読み込んだ時刻=現在日時*/
//     var loadDate = new Date();
//     /*計算の基準となる日時*/
//     var distDate = new Date(2022, 8, 14);
//     /*日時の差をミリ秒単位で取得*/
//     var diffMilliSec = distDate - loadDate;
//     /*ミリ秒を日数に変換*/
//     var diffDays = parseInt(diffMilliSec / 1000 / 60 / 60 / 24);
//     /*差の日数をHTMLに表示*/
//     document.getElementById('diff').textContent = diffDays;
// }

// birthDayCount();



const clock = () => {
    // 現在の日時・時刻の情報を取得
    const d = new Date();
    // 年を取得
    let year = d.getFullYear();
    // 月を取得
    let month = d.getMonth() + 1;
    // 日を取得
    let date = d.getDate();
    // 曜日を取得
    let dayNum = d.getDay();
    const weekday = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = weekday[dayNum];
    // 時を取得
    let hour = d.getHours();
    // 分を取得
    let min = d.getMinutes();
    // 秒を取得
    let sec = d.getSeconds();

    // 1桁の場合は0を足して2桁に
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // 日付・時刻の文字列を作成
    let today = `${year}.${month}.${date} ${day}`;
    let time = `${hour}:${min}:${sec}`;

    // 文字列をpタグに挿入
    document.querySelector(".clock-date").innerText = today;
    document.querySelector(".clock-time").innerText = time;
};



// function alertButton() {
//     const gatya = document.getElementsByClassName("gatya")[0];
//     gatya.style.display = "block";
//     alert("OK");
// }
function getRanmaru() {
    const idList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    const imglist = ["<a href='https://ibb.co/5n8Lq62'><img src='https://i.ibb.co/MGV7qs9/0-ranmaru-sleep-edited.jpg' alt='0-ranmaru-sleep-edited' border='0'></a>",
        "<a href='https://ibb.co/1LcpRBd'><img src='https://i.ibb.co/L8Kq9BJ/1-ranmaru-baby-edited.jpg' alt='1-ranmaru-baby-edited' border='0'></a>",
        "<a href='https://ibb.co/SB6WNLr'><img src='https://i.ibb.co/7KS8v94/2-ranmaru-baby2-edited.jpg' alt='2-ranmaru-baby2-edited' border='0'></a>",
        "<a href='https://imgbb.com/'><img src='https://i.ibb.co/nrLnyGX/3-ranmaru-baby3-edited.jpg' alt='3-ranmaru-baby3-edited' border='0'></a>",
        "<a href='https://ibb.co/6BjQd5j'><img src='https://i.ibb.co/bJctfnc/4-ranmaru-best-edited.jpg' alt='4-ranmaru-best-edited' border='0'></a>",
        "<a href='https://ibb.co/T8RWtb5'><img src='https://i.ibb.co/r6MdHcJ/5-ranmaru-sleep2-edited.jpg' alt='5-ranmaru-sleep2-edited' border='0'></a>",
        "<a href='https://ibb.co/LJCvVGK'><img src='https://i.ibb.co/mXHSfxp/6-ranmaru-style-edited.jpg' alt='6-ranmaru-style-edited' border='0'></a>",
        "<a href='https://ibb.co/SNYzVQn'><img src='https://i.ibb.co/D4cZwGC/7-ranmaru-zbtn-edited.jpg' alt='7-ranmaru-zbtn-edited' border='0'></a>",
        "<a href='https://ibb.co/THdM7qH'><img src='https://i.ibb.co/Q6tvTj6/8-ranmaru-sidef-edited.jpg' alt='8-ranmaru-sidef-edited' border='0'></a>",
        "<a href='https://ibb.co/6XwSPyF'><img src='https://i.ibb.co/z6xgRmZ/9-ranmaru-walk-edited.jpg' alt='9-ranmaru-walk-edited' border='0'></a>"];
    let select = Math.floor(Math.random() * imglist.length);
    document.getElementById(idList[select]).style.visibility = "visible";
    return imglist[select];
}
// for(let i = 0; i <= 100; i++){
//     console.log(getRanmaru());
// }

function alertButton() {
    console.log("on");
    const gatyaBox = document.getElementById("gatyaBox");
    const result = getRanmaru();
    console.log(result);
    // gatyaBox.insertAdjacentHTML("beforeend", result);
    gatyaBox.innerHTML = result;
    console.log("off");
}


function submidForm() {
    const name = document.querySelectorAll("input")[1].value;
    console.log(name);

    const message = document.querySelector("textarea").value;
    console.log(message);

    const submit = document.querySelectorAll("input")[2].value;
    console.log(submit);

    if (name === "" || message === "") {
        return alert(`お名前とコメント入力お願いします`);
    }

    const meseArea = document.getElementsByTagName("ul")[0];
    const meseBox = document.createElement("ul");
    meseBox.innerText = `${name} さん:` + `${message}`;
    console.log(meseBox);
    meseArea.appendChild(meseBox);

    document.querySelectorAll("input")[1].value = "";
    document.querySelector("textarea").value = "";


    // return alert(`${name}さん、コメントありがとうございます！`);
}


// 1秒ごとにclock関数を呼び出す
setInterval(clock, 1000);
