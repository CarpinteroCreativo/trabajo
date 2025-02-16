let saludo = "Hola ";
let adelanto = 470 + 569 + 327;
let usuario = ["Julissa","Denis","GSR-4"];
let tSaldo = "Saldo";
let tareas = 41 + 100 + 100 + 150 + 200 + 100 + 667;
let pagoTarea = 100;
let saldo = adelanto - tareas;



document.write(`
<div class="cabesa"><h1>tu Guardadito</h1></div>
<h2>${saludo} ${usuario[0]}!</h2>
    <div class="contenedor"><div class="cliente">${tSaldo}</div>
        <div class="saldo">${saldo} HNL</div>
        <div class="tareas"><small class="bga">Pago - <small>${tareas}</div></div>
        <footer class="piePajina"><p><a href="https://wa.me/message/ZJUJCKW7IQWIP1" class="retiro">Retirar Saldo</a></p></footer>
`);

