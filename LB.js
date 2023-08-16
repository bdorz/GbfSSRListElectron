//data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E
let outImg1 = document.getElementById('outImg1');
let outImg2 = document.getElementById('outImg2');
let outImg3 = document.getElementById('outImg3');
let outImg4 = document.getElementById('outImg4');
let outImg5 = document.getElementById('outImg5');


let btnPro = document.getElementById('btnPro');
btnPro.addEventListener("click", openPro);

function openPro() {
    const win = window.open("./pro.html", "雛型字串", "nodeIntegration=true,contextIsolation=false");
}
//左邊點右邊框顯示
function imgclick(e) {
    if (e.alt == "subSkill" || e.alt == "arcarum_subSkill") {
        subSkillInfoShow(true);
    }
    if (outImg1.alt == "empty") {
        outImg1.src = e.src;
        outImg1.alt = e.alt;
    } else if (outImg2.alt == "empty") {
        outImg2.src = e.src;
        outImg2.alt = e.alt;
    } else if (outImg3.alt == "empty") {
        outImg3.src = e.src;
        outImg3.alt = e.alt;
    } else if (outImg4.alt == "empty") {
        outImg4.src = e.src;
        outImg4.alt = e.alt;
    } else if (outImg5.alt == "empty") {
        outImg5.src = e.src;
        outImg5.alt = e.alt;
    }
}

//右邊框恢復空白
function imgClear(e) {
    if (e.alt != "empty") {
        if (e.alt == "subSkill" || e.alt == "arcarum_subSkill") {
            subSkillInfoShow(false);
        }
        e.src = "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E";
        e.alt = "empty";
    }
}

//開關被動技能描述欄位
function subSkillInfoShow(isShow) {
    let elementClass = getElement('subSkillDiv').getAttribute("class");
    if (isShow == true) {
        if (elementClass.indexOf('invisible') != -1) {
            elementClass = elementClass.replace('invisible', 'visible');
        }
    }
    else {
        if (elementClass.indexOf('invisible') == -1) {
            elementClass = elementClass.replace('visible', 'invisible');
        }

    }
    getElement('subSkillDiv').setAttribute("class", elementClass);
}

function btnOutput() {
    let output = getElement('output');
    let strResult = "";

    if (output.innerHTML.indexOf("**Limit Bonus") == -1) {
        strResult += "**Limit Bonus\n";
        strResult += "|~w(40px):圖示|w(140px):center:類別 |w(50px):center:☆1 |w(50px):center:☆2 |w(50px):center:☆3 |w(500px):center:備註 |\n";
        strResult += "|w(40px):center:|w(140px):center: |w(50px):center: |w(50px):center: |w(50px):center: |w(300px): |c\n";
    }
    else {
        let title = getElement('title');
        if (title.innerHTML = "") {
            strResult += "|>|>|>|>|>|" + title.innerHTML + "|\n";
        }
        else {
            strResult += "|>|>|>|>|>||\r\n";
        }
    }

    if (outImg1.alt != "empty") {
        strResult += lbString(outImg1.alt) + "\n";
    }
    if (outImg2.alt != "empty") {
        strResult += lbString(outImg2.alt) + "\n";
    }
    if (outImg3.alt != "empty") {
        strResult += lbString(outImg3.alt) + "\n";
    }
    if (outImg4.alt != "empty") {
        strResult += lbString(outImg4.alt) + "\n";
    }
    if (outImg5.alt != "empty") {
        strResult += lbString(outImg5.alt) + "\n";
    }

    if (output.innerHTML.indexOf("||||||c\n") != -1) {
        output.innerHTML = output.innerHTML.replace("||||||c\n", "");
        console.log(output.innerHTML);
    }
    strResult += "||||||c\n";

    output.innerHTML += strResult;

    //console.log(strResult);
    btnInit();

}

function lbString(alt) {
    let result = "";
    switch (alt) {
        case "atk":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/cc002e81db730ba4.png,40) |攻&#25802;力|500|800|1000||";
            break;
        case "def":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/3fc1f6875c2237cf.png,40) |防禦力|5%|8%|10%||";
            break;
        case "hp":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/f2747a4bd4ecaf67.png,40) |HP|250|500|750||";
            break;
        case "reply":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/f085e26ee82c5584.png,40) |回復性能|10%|15%|20%||";
            break;
        case "skillDmg":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/7809961ed2b2c928.png,40) |技能傷害|10%|15%|20%||";
            break;

        case "skillDmgLimit":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/8b482805cb3c9f2f.png,40) |技能傷害上限|5%|8%|10%||";
            break;
        case "ODDmg":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/6d3d2b332249ea67.png,40) |對OD時攻&#25802;UP|5%|8%|10%||";
            break;
        case "ODDown":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/b77cee0440bcebc6.png,40) |對OD抑制力|5%|8%|10%||";
            break;
        case "weakResUP":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/b7677a23ca9008c0.png,40) |弱體耐性|5%|8%|10%||";
            break;
        case "dbUP":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/1d1a18df5772eb55.png,40) |弱體命中率|5%|8%|10%||";
            break;

        case "fireDmg":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/996fe55ab8fbf46a.png,40) |火屬性攻&#25802;力|5%|8%|10%||";
            break;
        case "waterDmg":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/1dceb337adb991d4.png,40) |水屬性攻&#25802;力|5%|8%|10%||";
            break;
        case "earthDmg":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/db4e4786a21524cd.png,40) |土屬性攻&#25802;力|5%|8%|10%||";
            break;
        case "windDmg":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/895a944bc6a559df.png,40) |風屬性攻&#25802;力|5%|8%|10%||";
            break;
        case "lightDmg":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/35a69def1a9c0599.png,40) |光屬性攻&#25802;力|5%|8%|10%||";
            break;

        case "darkDmg":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/09128871b85de0a6.png,40) |闇屬性攻&#25802;力|5%|8%|10%||";
            break;
        case "fireRes":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/747294c7e2c51af5.png,40) |火屬性傷害減輕 |2%|4%|5%||";
            break;
        case "waterRes":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/60796ee501dfa6f8.png,40) |水屬性傷害減輕 |2%|4%|5%||";
            break;
        case "earthRes":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/5658f335744872f1.png,40) |土屬性傷害減輕 |2%|4%|5%||";
            break;
        case "windRes":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/52a8a6933ba510e6.png,40) |風屬性傷害減輕 |2%|4%|5%||";
            break;

        case "lightRes":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/6cad1a0ccee75076.png,40) |光屬性傷害減輕 |2%|4%|5%||";
            break;
        case "darkRes":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/a09cd8877af1f3e8.png,40) |闇屬性傷害減輕 |2%|4%|5%||";
            break;
        case "msDmg":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/33d4609f56564dfd.png,40) |奧義傷害|10%|15%|20%||";
            break;
        case "msDmgLimit":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/c0a2b59581ab86f8.png,40) |奧義傷害上限|5%|8%|10%||";
            break;
        case "cri":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/425dcee27a3cfb7a.png,40) |暴&#25802;率|12%|20%|25%||";
            break;

        case "da":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/8dfaa0f519ee462a.png,40) |二連&#25802;機率|3%|5%|6%||";
            break;
        case "ta":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/74fc621a165a20a0.png,40) |三連&#25802;機率|2%|4%|5%||";
            break;
        case "msUp":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/ae45ae629b53f84f.png,40) |奧義上升量|5%|8%|10%||";
            break;
        case "bkDmg":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/7ef8016beaf08d00.png,40) |對Break時攻&#25802;UP|5%|8%|10%||";
            break;
        case "bkUP":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/2f2bdede0273a2d0.png,40) |mode條消減量上升|5%|8%|10%||";
            break;

        case "atkUpDefDown":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/a1ebbe711e291617.png,40) |攻UP防down|900/~~-10%|1300/~~-15%|1500/~~-20%||";
            break;
        case "defUpAtkDown":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/c9c112f0f943d6c3.png,40) |攻down防UP|-900/~~10%|-1300/~~15%|-1500/~~20%||";
            break;
        case "reflex":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/d912ef13b659edbe.png,40) |反射|2%|4%|5%||";
            break;
        case "avoid":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/fcba8368f3411383.png,40) |迴避率|1%|2%|3%|回合開始時低機率敵全攻&#25802;迴避|";
            break;
        case "hostilityUp":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/a332443c13af0023.png,40) |敵對心UP|小|中|大|敵對心+5/8/10|";
            break;

        case "hostilityDown":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/246a8cb336a01057.png,40) |敵對心down|小|中|大|敵對心-2/4/5|";
            break;
        case "enmity":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/2aFhVtxBBq.png,40) |背水 |小|中|大|滿血1%/殘血最大9%，半血提升量約3%|";
            break;
        case "stamina":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/ed47ef2f81bf01cc.png,40) |渾身|小|中|大|滿血最大6%/殘血2%，線性衰減|";
            break;
        case "fightBackDmg":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/UCn1q3ylo5.png,40) |反&#25802;傷害|10%|15%|20%| 與反&#25802;倍率乘算 |";
            break;
        case "subSkill":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/1ee80b7a4124ed18.png,40) |角色被動|>|>|>|" + getElement('subSkillInfo').value + "|";
            break;
        //十天
        case "dmgLimit1":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/H2EVtcVlvq.png,40) |傷害上限|5%|8%|10%||";
            break;
        case "dmgLimit2":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/H2EVtcVlvq.png,40) |傷害上限|1%|3%|5%||";
            break;
        case "attackDmgExtra":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/tLepCfMJC8.jpg,40) |普通攻&#25802;傷害UP|5%|8%|10%||";
            break;
        case "skillDmgExtra":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/xwoikwYcMB.png,40) |技能傷害給予UP|10000|30000|50000||";
            break;
        case "msDmgExtra":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/QfB8rZOFy4.png,40) |奧義傷害給予UP|50000|100000|150000||";
            break;
        //轉世
        case "arcarum_atk":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/9Z9Hzq_axH.png,40) |攻&#25802;力|>|>|1000||";
            break;
        case "arcarum_def":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/KY44TtGzHh.png,40) |防禦力 |>|>|10% ||";
            break;
        case "arcarum_hp":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/Ov4gA0xsqh.png,40) |HP |>|>|750 ||";
            break;
        case "arcarum_da":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/dL1JMS4PBA.png,40) |二連&#25802;機率 |>|>|6% ||";
            break;
        case "arcarum_ta":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/pcrETlP7rm.png,40) |三連&#25802;機率 |>|>|5% ||";
            break;
        case "arcarum_cri":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/ns5JL0AtKG.png,40) |暴&#25802;率 |>|>|25% ||";
            break;
        case "arcarum_fireDmg":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/UdNeFhioiY.png,40) |火屬性攻&#25802;力 |>|>|10% ||";
            break;
        case "arcarum_waterDmg":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/Q00t3_8aQG.png,40) |水屬性攻&#25802;力 |>|>|10% ||";
            break;
        case "arcarum_earthDmg":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/LKDDHyaeFm.png,40) |土屬性攻&#25802;力 |>|>|10% ||";
            break;
        case "arcarum_windDmg":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/cfwSXloGyn.png,40) |風屬性攻&#25802;力 |>|>|10% ||";
            break;
        case "arcarum_lightDmg":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/c6kVW8QSFq.png,40) |光屬性攻&#25802;力 |>|>|10% ||";
            break;
        case "arcarum_drakDmg":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/HDbr6fJMB_.png,40) |闇屬性攻&#25802;力 |>|>|10% ||";
            break;
        case "arcarum_enmity":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/J6QA6wZFMy.png,40) |背水 |>|>|大 ||";
            break;
        case "arcarum_stamina":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/efT9ol6A1E.png,40) |渾身 |>|>|大 ||";
            break;
        case "arcarum_skillDmg":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/8NQtsWp_O_.png,40) |技能傷害 |>|>|20% ||";
            break;
        case "arcarum_skillDmgLimit":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/CytYpwOceP.png,40) |技能傷害上限 |>|>|10% ||";
            break;
        case "arcarum_msDmg":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/lylVsZW4ob.png,40) |奧義傷害 |>|>|20% ||";
            break;
        case "arcarum_msDmgLimit":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/ap8eDbbCH9.png,40) |奧義傷害上限 |>|>|15% ||";
            break;
        case "arcarum_msUp":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/CrcBWvHOMl.png,40) |奧義上升量 |>|>|10% ||";
            break;
        case "arcarum_weakResUP":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/IKjiaL7_WQ.png,40) |弱體耐性 |>|>|10% ||";
            break;
        case "arcarum_dbUP":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/u67Yjj9EM2.png,40) |弱體命中率 |>|>|10% ||";
            break;
        case "arcarum_fireRes":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/DXx2Yp8vDi.png,40) |火屬性傷害減輕 |>|>|5% ||";
            break;
        case "arcarum_waterRes":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/N9tUbEmuuI.png,40) |水屬性傷害減輕 |>|>|5% ||";
            break;
        case "arcarum_earthRes":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/vb3mM4WONc.png,40) |土屬性傷害減輕 |>|>|5% ||";
            break;
        case "arcarum_windRes":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/B7ZsJmBwJi.png,40) |風屬性傷害減輕 |>|>|5% ||";
            break;
        case "arcarum_lightRes":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/UdY6txIspi.png,40) |光屬性傷害減輕 |>|>|5% ||";
            break;
        case "arcarum_darkRes":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/Gem0jqHZd0.png,40) |闇屬性傷害減輕 |>|>|5% ||";
            break;
        case "arcarum_reflex":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/8U7x8gVW1j.png,40) |反射 |>|>|5% ||";
            break;
        case "arcarum_avoid":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/ToWcMQ9tRJ.png,40) |迴避 |>|>|3% ||";
            break;
        case "arcarum_reply":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/G1O0FCQykj.png,40) |回復性能 |>|>|20% ||";
            break;
        case "arcarum_attackDmgExtra":
            result = "|&ref(https://image02.seesaawiki.jp/g/o/gbfssrlistbyod-memo/o29wWNrdmv.png,40) |普通攻&#25802;傷害 |>|>|3% ||";
            break;
        case "arcarum_subSkill":
            result = "|&ref(https://image01.seesaawiki.jp/g/o/gbfssrlistbyod-memo/QMPIO5tprj.png,40) |被動 |>|>|" + getElement('subSkillInfo').value + "||";
            break;

    }

    return result;
}

function btnInit() {
    outImg1.src = "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E";
    outImg1.alt = "empty";
    outImg2.src = "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E";
    outImg2.alt = "empty";
    outImg3.src = "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E";
    outImg3.alt = "empty";
    outImg4.src = "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E";
    outImg4.alt = "empty";
    outImg5.src = "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E";
    outImg5.alt = "empty";

    let title = getElement("title");
    title.innerHTML = "";
    title.innerText = "";
    title.value = "";

    let subSkillInfo = getElement("subSkillInfo");
    subSkillInfo.innerHTML = "";
    subSkillInfo.innerText = "";
    subSkillInfo.value = "";
    subSkillInfoShow(false);

    /*
    let output = getElement("output");
    output.innerHTML = "";
    output.innerText = "";
    output.value = "";
    */
}

function btnImg(e) {
    switch (e.getAttribute('tag')) {
        case "平衡":
            outImg1.src = getElement("atk").src;
            outImg1.alt = getElement("atk").alt;

            outImg2.src = getElement("def").src;
            outImg2.alt = getElement("def").alt;

            outImg3.src = getElement("hp").src;
            outImg3.alt = getElement("hp").alt;

            outImg4.src = getElement("da").src;
            outImg4.alt = getElement("da").alt;

            outImg5.src = getElement("weakResUP").src;
            outImg5.alt = getElement("weakResUP").alt;
            break;
        case "攻擊":
            outImg1.src = getElement("atk").src;
            outImg1.alt = getElement("atk").alt;

            outImg2.src = getElement("def").src;
            outImg2.alt = getElement("def").alt;

            outImg3.src = getElement("da").src;
            outImg3.alt = getElement("da").alt;

            outImg4.src = getElement("cri").src;
            outImg4.alt = getElement("cri").alt;

            outImg5.src = getElement("msDmg").src;
            outImg5.alt = getElement("msDmg").alt;
            break;
        case "防禦":
            outImg1.src = getElement("atk").src;
            outImg1.alt = getElement("atk").alt;

            outImg2.src = getElement("def").src;
            outImg2.alt = getElement("def").alt;

            outImg3.src = getElement("def").src;
            outImg3.alt = getElement("def").alt;

            outImg4.src = getElement("hp").src;
            outImg4.alt = getElement("hp").alt;

            outImg5.src = "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E";
            outImg5.alt = "empty";

            break;
        case "回復":
            outImg1.src = getElement("atk").src;
            outImg1.alt = getElement("atk").alt;

            outImg2.src = getElement("def").src;
            outImg2.alt = getElement("def").alt;

            outImg3.src = getElement("hp").src;
            outImg3.alt = getElement("hp").alt;

            outImg4.src = getElement("weakResUP").src;
            outImg4.alt = getElement("weakResUP").alt;

            outImg5.src = getElement("reply").src;
            outImg5.alt = getElement("reply").alt;
            break;
        case "特殊":
            outImg1.src = getElement("atk").src;
            outImg1.alt = getElement("atk").alt;

            outImg2.src = getElement("def").src;
            outImg2.alt = getElement("def").alt;

            outImg3.src = getElement("weakResUP").src;
            outImg3.alt = getElement("weakResUP").alt;

            outImg4.src = getElement("ODDmg").src;
            outImg4.alt = getElement("ODDmg").alt;

            outImg5.src = getElement("ODDown").src;
            outImg5.alt = getElement("ODDown").alt;
            break;
        case "人類":
            outImg1.src = getElement("atk").src;
            outImg1.alt = getElement("atk").alt;

            outImg2.src = getElement("def").src;
            outImg2.alt = getElement("def").alt;

            outImg3.src = getElement("hp").src;
            outImg3.alt = getElement("hp").alt;

            outImg4.src = getElement("da").src;
            outImg4.alt = getElement("da").alt;

            outImg5.src = getElement("cri").src;
            outImg5.alt = getElement("cri").alt;
            break;
        case "獸耳":
            outImg1.src = getElement("atk").src;
            outImg1.alt = getElement("atk").alt;

            outImg2.src = getElement("def").src;
            outImg2.alt = getElement("def").alt;

            outImg3.src = getElement("da").src;
            outImg3.alt = getElement("da").alt;

            outImg4.src = getElement("ta").src;
            outImg4.alt = getElement("ta").alt;

            outImg5.src = "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E";
            outImg5.alt = "empty";
            break;
        case "牛族":
            outImg1.src = getElement("atk").src;
            outImg1.alt = getElement("atk").alt;

            outImg2.src = getElement("def").src;
            outImg2.alt = getElement("def").alt;

            outImg3.src = getElement("hp").src;
            outImg3.alt = getElement("hp").alt;

            outImg4.src = getElement("cri").src;
            outImg4.alt = getElement("cri").alt;

            outImg5.src = "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E";
            outImg5.alt = "empty";
            break;
        case "矮子":
            outImg1.src = getElement("atk").src;
            outImg1.alt = getElement("atk").alt;

            outImg2.src = getElement("atk").src;
            outImg2.alt = getElement("atk").alt;

            outImg3.src = getElement("da").src;
            outImg3.alt = getElement("da").alt;

            outImg4.src = "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E";
            outImg4.alt = "empty";

            outImg5.src = getElement("msDmg").src;
            outImg5.alt = getElement("msDmg").alt;
            break;
        case "星晶":
            outImg1.src = getElement("atk").src;
            outImg1.alt = getElement("atk").alt;

            outImg2.src = getElement("def").src;
            outImg2.alt = getElement("def").alt;

            outImg3.src = getElement("hp").src;
            outImg3.alt = getElement("hp").alt;

            outImg4.src = "data:image/svg+xml;charset=utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%3E%3C/svg%3E";
            outImg4.alt = "empty";

            outImg5.src = getElement("msDmg").src;
            outImg5.alt = getElement("msDmg").alt;
            break;
        default:
            break;
    }
}

function getElement(id) {
    let element = document.getElementById(id);
    return element;
}