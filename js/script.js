
let openMenu = false;
let cont = 60;
let contMin = 9;

// Variável para parar contador //
let pause;


window.onload = () => {
    let hambur = document.getElementById("hambur");

    /// Evento click menu ///
    hambur.addEventListener("click", () => {
        let span = [document.getElementsByTagName("span")[0], document.getElementsByTagName("span")[1], document.getElementsByTagName("span")[2]];
        let menuMobile = document.getElementsByClassName("menu-mobile")[0];

        if (!openMenu) {
            span[1].style.opacity = "0";

            span[0].style.transform = "rotate(-45deg)";
            span[0].style.top = "8px";

            span[2].style.transform = "rotate(45deg)";
            span[2].style.top = "8px";

            menuMobile.style.top = "0";

            openMenu = true;
        }

        else {
            span[1].style.opacity = "1";

            span[0].style.transform = "rotate(0)";
            span[0].style.top = "0";

            span[2].style.transform = "rotate(0)";
            span[2].style.top = "16px";

            menuMobile.style.top = "-100%";

            openMenu = false;

        }

    });

    /// Inicio do quiz ///
    let start = document.getElementById("start");
    let over = document.getElementsByClassName("bloco")[1];
    let bloco = document.getElementsByClassName("bloco")[0];


    start.addEventListener("click", inicio);
    function inicio() {
        bloco.style.display = "none";

        questions.html[num].style.display = "block"
        pause = setInterval(() => {
            cont -= 1;
            if (cont <= 59 && cont >= 10 && contMin <= 9 && contMin >= 0) {
                document.getElementById("cont").innerHTML = "0" + contMin + ":" + cont;
            }

            else if (cont < 10 && cont >= 0) {
                document.getElementById("cont").innerHTML = "0" + contMin + ":" + "0" + cont;
            }

            else if (cont < 0 && contMin > 0) {
                cont = 59;
                contMin -= 1;
                document.getElementById("cont").innerHTML = "0" + contMin + ":" + cont;
            }

            else {
                over.style.display = "block";
                erro.style.display = "none";

                questions.html[num].style.display = "none"
                clearInterval(pause);
            }
        }, 1000);
    }

}

/// Restart ///
let restart = document.getElementById("restart");
function reset() {
    window.location.reload();
}


/// Marcador de resposta (checar)//
let marked = 0;
let respostas = [];
function responder(res) {
    if (marked == 0) {
        marked = 1;
        respostas.push(res);
    }
    else {
        respostas.pop();
        respostas.push(res);
    }
}


/// Objeto com as perguntas ///
const questions = {
    html: [document.getElementsByClassName("wraper")[0], document.getElementsByClassName("wraper")[1], document.getElementsByClassName("wraper")[2], document.getElementsByClassName("wraper")[3], document.getElementsByClassName("wraper")[4]],

}

//número usada na array do objeto para trocar a pergunta//
let num = 0;

// Trocar para a próxiam pergunta ///
let erro = document.getElementById("err-msg");

function proxima() {
    if (marked > 0 && respostas.length < 5) {
        erro.style.display = "none";

        questions.html[num].style.display = "none";
        num += 1;
        questions.html[num].style.display = "block";

        marked = 0;
    }

    else if (respostas.length == 5) {
        erro.style.display = "none";
        questions.html[num].style.display = "none";

        clearInterval(pause);

        // Função que soma os pontos  //
        function somar(points, total) {
            return total + points;
        }

        let points = respostas.filter((respostas) => {
            return respostas == "correta";
        }).map((points) => {
            return points = 2;
        }).reduce(somar, 0);

        let resFinal = document.getElementsByClassName("res-final")[0];
        resFinal.style.display = "block";

        let msgWin = document.getElementById("pontos");
        let emot = document.getElementById("emot");
        let h3 = document.getElementById("h3");

        if (points >= 6) {
            h3.style.color = "rgb(48, 199, 46)'";
            msgWin.style.color = "rgb(48, 199, 46)";
            msgWin.innerHTML = `Você conseguiu fazer ${points} pontos`;
        }

        else {
            h3.style.color = "rgb(128, 17, 15)";
            emot.setAttribute("src", "img/emot-errado.png.svg");
            msgWin.style.color = "rgb(128, 17, 15)";
            msgWin.innerHTML = `Você conseguiu fazer ${points} pontos`;
        }
    }

    else {
        erro.style.display = "block";
    }
}







