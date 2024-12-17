let saludo = "Hola ";
let adelanto = 31 + 415 + 300 - 90;
let usuario = ["Julissa","Denis","GSR-4"];
let tSaldo = "Saldo";
let tareas = 7;
let pagoTarea = 100;
let saldo = pagoTarea * tareas - adelanto;



document.write(`
<div class="cabesa"><h1>tu Guardadito</h1></div>
<h2>${saludo} ${usuario[0]}!</h2>
    <div class="contenedor"><div class="cliente">${tSaldo}</div>
        <div class="saldo">${saldo} HNL</div>
        <div class="tareas"><small class="bga">Tareas - <small>${tareas}</div></div>
        <footer class="piePajina"><p><a href="https://wa.me/message/ZJUJCKW7IQWIP1" class="retiro">Retirar Saldo</a></p></footer>
`);

