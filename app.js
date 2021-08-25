var canvas = document.getElementById('canvas')

var context = canvas.getContext('2d');

// context.fillStyle = '#fff';

context.lineWidth = 10;
context.strokeStyle = '#000';

context.fillStyle = 'black';
context.strokeStyle = 'white';
context.lineWidth = 5;

//um quadrado qualquer
context.fillRect(350, 50, 50, 50);
context.strokeRect(350, 50, 50, 50);
// Primeiro arco:
// Novo path
context.beginPath();
// Desenha
context.arc(50, 50, 40, 90*Math.PI/180, 270*Math.PI/180,
false);
// Preenchimento
context.fill();
// Contorno
context.stroke();
// Segundo arco
context.beginPath();
context.arc(150, 50, 40, 90*Math.PI/180, 270*Math.PI/180,
true);
context.fill();
context.stroke();


//círculo completo
context.beginPath();
context.arc(250, 50, 40, 0, 2*Math.PI);
context.fill();
context.stroke();