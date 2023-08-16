console.log("-----讀取成功-----");
//點擊產生結果
let btn = document.getElementById('btnOutput');
btn.addEventListener("click", click);

let btninit = document.getElementById('btnInit');
btninit.addEventListener("click", strInit);

let btnPro = document.getElementById('btnPro');
btnPro.addEventListener("click", openPro);

function openPro() {
    const win = window.open("./pro.html", "雛型字串", "nodeIntegration=true,contextIsolation=false");
}

function strInit() {
    let strList = ["hp", "atk", "No", "image", "jpName", "twName"];
    for (let i = 0; i < strList.length; i++) {
        var element = document.getElementById(strList[i]);
        element.innerHTML = "";
        element.innerText = "";
        element.value = "";
    }
    let selectList = ["element", "type", "proud1", "proud2", "race", "get"];
    for (let i = 0; i < selectList.length; i++) {
        var element = document.getElementById(selectList[i]);
        element.selectedIndex = 0;

    };
    let cb = document.getElementById("over");
    cb.checked = false;
}

function click() {
    //需取NO
    var strHP = getText("hp");
    var strATK = getText("atk");
    var strNo = getText('No');
    var strImage = getText("image");
    var strElement = getText('element');
    var strJPName = getText('jpName');
    var strTWName = getText('twName');
    var strType = getText('type');
    var strProud1 = getText('proud1');
    var strProud2 = getText('proud2');
    var strRace = getText('race');
    var strGet = getText('get');
    var strOver = getText('over');
    var strMain = "";
    strMain = "|" + strNo + "|&ref(" + strImage + ",120,no_link) |[[" + strJPName + ">" + strElement + "_" + strJPName + "]]|" + strTWName + "|"
        + strType + "|" + strRace + "|" + strProud1 + "|" + strProud2 + "|" + strHP + "|" + strATK + "|" + strOver + "|" + strGet + "|";
    var output = document.getElementById("Output");
    console.log(strMain);
    output.innerHTML = strMain;
}

function getText(id) {
    var element = document.getElementById(id);
    var result = "";
    if (element instanceof HTMLSelectElement == true) {
        result = element.value;
    }
    else {
        result = element.innerText;
        if (id == "hp" || id == "atk") {
            if (result.toLowerCase().indexOf("r") != -1) {
                result = result.substring(result.toLowerCase().indexOf("r") + 1);
                result = "&color(#FF0000){" + result + "}";
            }
        }
    }
    return result;
}
