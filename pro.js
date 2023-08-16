console.log("-----讀取成功-----");
//點擊產生結果

let example = document.getElementById("example");
let result = document.getElementById("result");
var fs = require('fs');
let isExist = true;
fs.readFile("./resources/app/Tip.txt", (err, data) => {
    example.innerHTML = data;
});
/*
fs.access('./Tip.txt', test, (err,) => {
    if (err) {
        isExist = false;
    }

    if (isExist) {
        fs.readFile("./resources/app/Tip.txt", (err, data) => {
            example.innerHTML = data;
        });
    }
    else {
       
    }
});
*/




let btnSave = document.getElementById("btnSave");
btnSave.addEventListener("click", save);

function save() {
    //let pro = document.getElementById("example");
    /*
    var fs2 = require('fs');
    let saveStr = example.value;
    fs2.writeFile('./Tip.txt', saveStr, function (err) {
        if (err)
            result.innerHTML = err;
        else
            result.innerHTML = "存檔成功";
    });
    */
}

