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
    const imglist = ["<img src='https://i.ibb.co/hWwFs8G/3-ranmaru-baby3-edited.jpg' width='500px' height='500px' alt='3-ranmaru-baby3-edited' border='0'>",
                    "<img src='https://i.ibb.co/98qZ3gG/4-ranmaru-best-edited.jpg' width='500px' height='500px' alt='4-ranmaru-best-edited' border='0'>",
                    "<img src='https://i.ibb.co/8bw45bW/5-ranmaru-sleep2-edited.jpg' width='500px' height='500px' alt='5-ranmaru-sleep2-edited' border='0'>",
                    "<img src='https://i.ibb.co/MNfKbd6/6-ranmaru-style-edited.jpg' width='500px' height='500px' alt='6-ranmaru-style-edited' border='0'>",
                    "<img src='https://i.ibb.co/L8GM8NW/7-ranmaru-zbtn-edited.jpg' width='500px' height='500px' alt='7-ranmaru-zbtn-edited' border='0'>",
                    "<img src='https://i.ibb.co/zRWLpYT/8-ranmaru-sidef-edited.jpg' width='500px' height='500px' alt='8-ranmaru-sidef-edited' border='0'>",
                    "<img src='https://i.ibb.co/1MZTQLg/9-ranmaru-walk-edited.jpg' width='500px' height='500px' alt='9-ranmaru-walk-edited' border='0'>",
                    "<img src='https://i.ibb.co/rcn3XYg/0-ranmaru-sleep-edited.jpg' width='500px' height='500px' alt='0-ranmaru-sleep-edited' border='0'>",
                    "<img src='https://i.ibb.co/YjCJY3d/1-ranmaru-baby-edited.jpg' width='500px' height='500px' alt='1-ranmaru-baby-edited' border='0'>",
                    "<img src='https://i.ibb.co/sjRVQzz/2-ranmaru-baby2-edited.jpg' width='500px' height='500px' alt='2-ranmaru-baby2-edited' border='0'>"];
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
