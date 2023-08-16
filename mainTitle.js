console.log("-----讀取成功-----");
//點擊產生結果
/*
let btninit = document.getElementById('btnInit');
btninit.addEventListener("click", strInit);
*/
let btnPro = document.getElementById('btnPro');
btnPro.addEventListener("click", openPro);

function openPro() {
    const win = window.open("./pro.html", "雛型字串", "nodeIntegration=true,contextIsolation=false");
}


function strInit() {
    /*
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
    */
}

function btnOtherClear() {
    let idTbList = ["twName", "fullName", "img1", "img2", "img3", "cv", "hp", "atk"];
    let idSelectList = ["race", "type", "proud1", "proud2"];
    for (let i = 0; i < idTbList.length; i++) {
        let element = getElement(idTbList[i]);
        element.innerHTML = "";
        element.value = "";
    }
    for (let i = 0; i < idSelectList.length; i++) {
        let element = getElement(idSelectList[i]);
        element.selectedIndex = 0;
    }
}

function btnOther() {
    let sb = "";
    sb += "**基本資料\n";
    sb += "{| width=\"1200\"\n";
    //基本資料_名稱
    sb += "|> |> |> |~w(400px):center:" + getElement("twName").value + "|> |> |>|w(800px):center:" + getElement("fullName").value + "|\n";
    if (getElement("img3").value != "") {
        sb += "|> |> |> |w(400px):center:&ref(" + getElement("img1").value + ",400)|> |> |w(400px):center:&ref(" + getElement("img2").value + ",400) "
            + "|w(400px):h(350px):center:- |\n";
    }
    else {
        sb += "|> |> |> |w(400px):center:&ref(" + getElement("img1").value + ",400)|> |> |w(400px):center:&ref(" + getElement("img2").value + ",400)"
            + " |w(400px):h(350px):center:&ref(" + getElement("img3").value + ",400) |\n";
    }

    //基本資料_種族類型雜項
    sb += "|~w(100px):center:種族 |w(100px):center:類型 |w(100px):center:得意 |w(100px):center:聲優 |> |> |center:HP |center:ATK |\n";
    if (getElement("proud2").value.trim().length != 0) {
        sb += "|center:" + getElement("race").value + " |center:" + getElement("type").value + " |center:" + getElement("proud1").value + "/" + getElement("proud2").value + "|center:" + getElement("cv").value
            + " |> |> |center:" + getElement("hp").value + " |center:" + getElement("atk").value + " |\n";
    }
    else {
        sb += "|center:" + getElement("race").value + " |center:" + getElement("type").value + " |center:" + getElement("proud1").value + "|center:" + getElement("cv").value
            + " |> |> |center:" + getElement("hp").value + " |center:" + getElement("atk").value + " |\n";
    }

    getElement("resultOther").innerHTML = sb;
}


function btnMysteryClear() {
    let idTbList = ["msName", "msEff", "msEffInfo"];
    for (let i = 0; i < idTbList.length; i++) {
        let element = getElement(idTbList[i]);
        element.innerHTML = "";
        element.value = "";
    }
}

function btnMystery() {
    let sb = "";

    //第一次進行奧義編輯
    if (getElement("resultMystery").innerHTML.indexOf("奧義") == -1) {
        sb += "|~w(100px):center:奧義 |> |> |w(300px):center:名稱 |> |> |> |w(800px):center:效果 |\n";
    }

    //奧義-倍率&描述
    sb += "|^ |> |> |center:" + changeStrWave(getElement('msName').value) + " |> |> |> |center:" + changeStrWave(getElement('msEff').value) + "|\n";
    sb += "|^ |> |> |^ |> |> |> |" + changeStrWave(getElement('msEffInfo').value) + " |\n";

    getElement("resultMystery").innerHTML += sb;

}

function btnSkillClear() {
    let idTbList = ["skillName", "skillLevelOne", "skillLevelTwo", "skillLevelThree", "skillTurnOne", "skillTurnTwo", "skillTurnThree",
        "skillCDOne", "skillCDTwo", "skillCDThree", "skillEffOne", "skillEffTwo", "skillEffThree", "outpuSkillEffInfoOther"];
    for (let i = 0; i < idTbList.length; i++) {
        let element = getElement(idTbList[i]);
        element.innerHTML = "";
        element.value = "";
    }

    let skillColor = getElement("skillColor");
    skillColor.selectedIndex = 0;

    getElement('link').checked = false;

}

function btnSkill() {

    let sb = "";

    //第一次進行技能編輯
    if (getElement("resultSkill").innerHTML.indexOf("技能") == -1) {
        sb += "|~center:技能 |> |> |center:名稱 |center:等級 |center:持續 |center:冷卻 |center:效果 |\n";
    }
    //Link技能
    if (getElement('link').checked == true) {
        //技能&描述
        sb += "|^ |> |> |center:&color(#BA55D3){Link技能}~~&color(#" + SkillColor(getElement("skillColor").value) + "){■}" + changeStrWave(getElement("skillName").value)
            + " |center:" + changeStrWave(getElement("skillLevelOne").value) + " |center:" + changeStrWave(getElement("skillTurnOne").value)
            + " |center:" + changeStrWave(getElement("skillCDOne").value) + " |center:" + changeStrWave(getElement("skillEffOne").value) + " |\n";
    }
    else {
        //技能&描述
        sb += "|^ |> |> |center:&color(#" + SkillColor(getElement("skillColor").value) + "){■}" + changeStrWave(getElement("skillName").value) + " |center:"
            + changeStrWave(getElement("skillLevelOne").value) + " |center:" + changeStrWave(getElement("skillTurnOne").value) + " |center:"
            + changeStrWave(getElement("skillCDOne").value) + " |center:" + changeStrWave(getElement("skillEffOne").value) + " |\n";
    }

    //判斷等級上升調整不只一次
    if (getElement("skillLevelTwo").value != "") {
        sb += "|^ |> |> |^ |center:" + changeStrWave(getElement("skillLevelTwo").value) + " |center:" + changeStrWave(getElement("skillTurnTwo").value)
            + " |center:" + changeStrWave(getElement("skillCDTwo").value) + " |center:" + changeStrWave(getElement("skillEffTwo").value) + " |\n";
    }
    if (getElement("skillLevelThree").value != "") {
        sb += "|^ |> |> |^ |center:" + changeStrWave(getElement("skillLevelThree").value) + " |center:" + changeStrWave(getElement("skillTurnThree").value)
            + " |center:" + changeStrWave(getElement("sskillCDThree").value) + " |center:" + changeStrWave(getElement("skillThree").value) + " |\n";
    }
    sb += "|^ |> |> |^ |> |> |> | " + changeStrWave(getElement("outpuSkillEffInfoOther").value) + "|\n";

    getElement("resultSkill").innerHTML += sb;

}

function btnSubSkillClear() {
    let idTbList = ["subSkillName", "subSkillEff", "subSkillEffInfo"];
    for (let i = 0; i < idTbList.length; i++) {
        let element = getElement(idTbList[i]);
        element.innerHTML = "";
        element.value = "";
    }
}

function btnSubSkill() {
    let sb = "";

    ///第一次進行技能編輯
    if (getElement("resultSubSkill").innerHTML.indexOf("被動") == -1) {
        sb += "|~w(100px):center:被動 |> |> |w(300px):center:名稱 |> |> |> |w(800px):center:效果 |\n";
    }

    if (getElement("resultSubSkill").innerHTML.indexOf("|}") != -1) {
        getElement("resultSubSkill").innerHTML = getElement("resultSubSkill").innerHTML.replace("|}\n", "");
    }
    //奧義-倍率&描述
    sb += "|^ |> |> |center:" + changeStrWave(getElement('subSkillName').value) + " |> |> |> |center:" + changeStrWave(getElement('subSkillEff').value) + "|\n";
    sb += "|^ |> |> |^ |> |> |> |" + changeStrWave(getElement('subSkillEffInfo').value) + " |\n";
    sb += "|}\n";
    getElement("resultSubSkill").innerHTML += sb;
}



function changeStrWave(str) {
    let result = "";
    result = str.replace(/\n/g, "~~")

    return result;
}

function SkillColor(colorCode) {
    let result = "";
    switch (colorCode) {
        case "紅":
            result = "FF0000";
            break;
        case "黃":
            result = "FFD700";
            break;
        case "藍":
            result = "6495ED";
            break;
        case "綠":
            result = "98F898";
            break;
        case "紫":
            result = "BA55D3";
            break;
    }
    return result;
}

function getElement(id) {
    let element = document.getElementById(id);
    return element;
}