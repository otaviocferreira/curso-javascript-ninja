/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/

(function(win, doc) {
    var $campoRelogio = doc.querySelector("[data-js='relogio']");
    var $buttonStart = doc.querySelector("[data-js='start']");
    var $buttonStop = doc.querySelector("[data-js='stop']");
    var $buttonReset = doc.querySelector("[data-js='reset']");

    var cronometro = 0;
    var temporizador;

    $buttonStart.addEventListener("click", startCronometro);
    $buttonStop.addEventListener("click", stopCronometro);
    $buttonReset.addEventListener("click", resetCronometro);

    var seg = min = hora = "00";
    var cronHora = 0;
    var cronMin = 0;

    function timer() {
        cronometro++;        

        if (cronometro === 60)  {
            seg = "00";
            cronometro = 0;
            cronMin++;

            if (cronMin === 60) {
                min = "00";
                cronMin = 0;
                cronHora++;
            }
        }

        seg = cronometro < 10 ? "0" + cronometro : cronometro;
        min = cronMin < 10 ? "0" + cronMin : cronMin;
        hora = cronHora < 10 ? "0" + cronHora : cronHora;

        $campoRelogio.value = hora + ":" + min + ":" + seg;
    }

    function startCronometro() {
        temporizador = setInterval(timer, 1000);
    }
    
    function stopCronometro() {
        clearInterval(temporizador);
    }
    
    function resetCronometro() {
        $campoRelogio.value = "00:00:00";
        cronometro = 0;
        cronMin = 0;
        cronHora = 0;
    }
})(window, document);