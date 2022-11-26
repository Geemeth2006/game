window.onload = function () {
    iw = setInterval(idle, 100);

}

function key(event) {

    clearInterval(iw);

    //enter
    if (event.which == 13) {
        
        if (rw == 0) {

            if(scow==0){
                scow = setInterval(score,100);
            }

            rw = setInterval(run, 100);
            rs.play();
            fire();
            fw = setInterval(fMove, 100);

            dragon();
            drw = setInterval(drMove, 100);

            lion();
            lw = setInterval(lMove, 100);

        }
        if (bw == 0) {
            bw = setInterval(BGrun, 100);
        }
    }

    //up arrow
    if (event.which == 38) {
        if(scow==0){
            scow = setInterval(score,100);
        }
        if (jw == 0) {
            jw = setInterval(jump, 100);
            
            if (fw == 0) {
                fire();
                fw = setInterval(fMove, 100);
                dragon();
                drw = setInterval(drMove, 100);
                lion();
                lw = setInterval(lMove, 100);
            }

        }
    }

    //space
    if (event.which == 32) {
        if(scow==0){
            scow = setInterval(score,100);
        }
        if (sw == 0) {
            sw = setInterval(shoot, 100);
        }
        if (fw == 0) {
            fire();
            fw = setInterval(fMove, 100);
            dragon();
            drw = setInterval(drMove, 100);
            lion();
            lw = setInterval(lMove, 100);
        }
    }

    //downarrow
    if (event.which == 40) {
        if(scow==0){
            scow = setInterval(score,100);
        }
        if (slw == 0) {
            slw = setInterval(slide, 300);
        }
        if (fw == 0) {
            fire();
            fw = setInterval(fMove, 100);
            dragon();
            drw = setInterval(drMove, 100);
            lion();
            lw = setInterval(lMove, 100);
        }
    }

}


var r = 0;
var rw = 0;
function run() {
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("scoreboard").style.visibility = "visible";
    document.getElementById("scoreboard").style.width = "400px";
    
    document.getElementById("i").style.marginTop = "350px";
    r = r + 1;
    if (r == 9) {
        r = 1;
    }
    document.getElementById("i").src = "Run (" + r + ").png"
}

b = 0;
bw = 0;
function BGrun() {
    b = b - 20;
    document.getElementById("d").style.backgroundPositionX = b + "px";
}

j = 0;
jw = 0;
tm = 350;
function jump() {
    rs.pause();
    js.play();
    if (bw == 0) {
        bw = setInterval(BGrun, 100);
    }
    clearInterval(rw);

    if (j <= 5) {
        tm = tm - 28;
    }
    if (j >= 6) {
        tm = tm + 28;
    }
    document.getElementById("i").style.marginTop = tm + "px";

    j = j + 1;
    if (j == 11) {
        rs.play();
        j = 1;
        clearInterval(jw);
        jw = 0;
        rw = setInterval(run, 100);
    }
    document.getElementById("i").src = "Jump (" + j + ").png"
}

i = 1;
iw = 0;
function idle() {
    i = i + 1;
    if (i == 11) {
        i = 1;
    }
    document.getElementById("i").src = "Idle (" + i + ").png";
}

s = 0;
sw = 0;
function shoot() {
    rs.pause();
    shs.play();
    clearInterval(rw);
    clearInterval(bw);
    clearInterval(fw);
    clearInterval(drw);
    clearInterval(lw);

    s = s + 1;
    if (s == 4) {
        rs.play();
        s = 1;
        clearInterval(sw);
        sw = 0;
        rw = setInterval(run, 100);
        bw = setInterval(BGrun, 100);
        fw = setInterval(fMove, 100);
        drw = setInterval(drMove, 100);
        lw = setInterval(lMove, 100);
        if (buw == 0) {
            buw = setInterval(bulletrun, 80);
        }
    }
    document.getElementById("i").src = "Shoot (" + s + ").png";

}

bmr = 250;
buw = 0;
function bulletrun() {

    document.getElementById("bullet").style.visibility = "visible";
    bmr = bmr + 200;

    document.getElementById("lion" + lco).style.marginLeft = "-300px";
    document.getElementById("lion" + lco).style.visibility = "hidden";

    if (bmr > 2000) {

        bmr = 250;
        document.getElementById("bullet").style.marginLeft = "250px";
        document.getElementById("bullet").style.visibility = "hidden";
        clearInterval(buw);
        buw = 0;

    }
    document.getElementById("bullet").style.marginLeft = bmr + "px";


}


ss = 0;
sl = 0;
slw = 0;
function slide() {
    rs.pause();
    sls.play();
    ss = 1;
    if (bw == 0) {
        bw = setInterval(BGrun, 100);
    }
    clearInterval(rw);
    sl = sl + 1;
    if (sl == 6) {
        rs.play();
        ss = 0;
        sl = 1;
        clearInterval(slw);
        slw = 0;
        rw = setInterval(run, 100);
    }
    document.getElementById("i").src = "Slide (" + sl + ").png"
}

//fire
x = 1000;
function fire() {
    for (var y = 0; y < 100; y++) {
        var a = document.createElement("img");
        a.src = "flame.gif";
        a.className = "f";
        a.style.marginLeft = x + "px";

        x = x + 1500;

        a.id = "v" + y;
        document.getElementById("d").appendChild(a);
    }
    fw = 1;
}

fw = 0;
function fMove() {
    for (var y = 0; y < 100; y++) {
        var n = getComputedStyle(document.getElementById("v" + y));
        var n = n.marginLeft;
        var n = parseInt(n);
        var n = n - 20;
        document.getElementById("v" + y).style.marginLeft = n + "px";
        if (n < 140 & n > 25 & tm > 300) {
            deading = 1;
            dead();
        }


    }
}


//dragon
t = 1500;
function dragon() {
    for (var y = 0; y < 100; y++) {

        var a = document.createElement("img");
        a.src = "dragon.gif";
        a.className = "dragon";
        a.style.marginLeft = t + "px";

        t = t + 1500;

        a.id = "dragon" + y;
        document.getElementById("d").appendChild(a);
    }
    drw = 1;
}

drw = 0;
function drMove() {
    for (var y = 0; y < 100; y++) {
        var n = getComputedStyle(document.getElementById("dragon" + y));
        var n = n.marginLeft;
        var n = parseInt(n);
        var n = n - 20;
        document.getElementById("dragon" + y).style.marginLeft = n + "px";

        if (n < 150 & n > -15) {
            if (slw == 0) {
                deading = 2;
                dead();
            }
        }
    }
}

//lion
l = 2000;
function lion() {
    for (var y = 0; y < 100; y++) {

        var a = document.createElement("img");
        a.src = "lion.gif";
        a.className = "lion";
        a.style.marginLeft = l + "px";

        l = l + 1500;

        a.id = "lion" + y;
        document.getElementById("d").appendChild(a);
    }
    lw = 1;
}

lw = 0;
ln = 0;
lco = -1;
function lMove() {
    for (var y = 0; y < 100; y++) {
        var ln = getComputedStyle(document.getElementById("lion" + y));
        var ln = ln.marginLeft;
        var ln = parseInt(ln);
        var ln = ln - 20;
        document.getElementById("lion" + y).style.marginLeft = ln + "px";

        if (ln == 1100) {
            lco = lco + 1;
        }

        if (ln < 160 & ln > 0) {
            deading = 3;
            dead();
        }

    }
}

deading = 0;

dy = 0;
dyw = 0;
function dye() {
    dy = dy + 1;
    if (dy == 11) {
        dy = 10;
        document.getElementById("i").style.marginTop = "350px";
        clearInterval(dyw);
    }
    document.getElementById("i").src = "Dead (" + dy + ").png";
}

function dead() {
    
    rs.pause();
    ds.play();
    clearInterval(bw);
    bw = 1;
    clearInterval(rw);
    rw = 1;
    clearInterval(fw);
    fw = 1;
    clearInterval(drw);
    
    drw = 1
    clearInterval(lw);
    clearInterval(jw);
    lw = 1;
    sw = 1;
    slw = 1;
    jw = 1;
    document.getElementById("i").style.marginTop = "350px";
    dyew = setInterval(dye, 100);
    clearInterval(scow);

    document.getElementById("scoreboard").style.visibility = "hidden";
    document.getElementById("end").style.visibility = "visible";
    document.getElementById("lastscore").innerHTML = "Your Score is "+sco;
    if(deading==1){
        g = "Flame"
    }
    if(deading==2){
        g = "Dragon"
    }
    if(deading==3){
        g = "Lion"
    }
    document.getElementById("y").innerHTML= "You Were Killed By <b>"+g+"</b>";
}
var g = "";
sco = 0;
scow = 0;
function score() {
    if(sco==500){
        win();
    }
    sco = sco +1;
    document.getElementById("score").innerHTML = "S : " + sco;
}

function st(){
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("scoreboard").style.visibility = "visible";
    document.getElementById("scoreboard").style.width = "400px";
    document.getElementById("scoreboard").style.transitionDuration = "0.5s";
}

function ne(){
    location.reload();
}

var rs = new Audio("run.mp3");
rs.loop = true;
var js = new Audio("jump.mp3");
var ds = new Audio("dead.mp3");
var sls = new Audio("slide.mp3");
var shs = new Audio("shoot.mp3");

function win(){

    document.getElementById("win").style.visibility = "visible";
    rs.pause();
    clearInterval(bw);
    bw = 1;
    clearInterval(rw);
    rw = 1;
    clearInterval(fw);
    fw = 1;
    clearInterval(drw);
    
    drw = 1
    clearInterval(lw);
    clearInterval(jw);
    lw = 1;
    sw = 1;
    slw = 1;
    jw = 1;
    document.getElementById("i").style.marginTop = "350px";
    clearInterval(scow);

    document.getElementById("scoreboard").style.visibility = "hidden";
    document.getElementById("lastscore").innerHTML = "Your Score is "+sco;

}