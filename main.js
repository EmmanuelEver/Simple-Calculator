let panel = document.querySelector('.panel');
let num1  = document.querySelector('.num1');
let num7 = document.querySelector('.num7');
let num2 = document.querySelector('.num2');
let num3 = document.querySelector('.num3');
let num4 = document.querySelector('.num4');
let num5 = document.querySelector('.num5');
let num6 = document.querySelector('.num6');
let num8 = document.querySelector('.num8');
let num9 = document.querySelector('.num9');
let num0 = document.querySelector('.num0');
let dec  = document.querySelector('.dec');
let divide = document.querySelector('.divide');
let add = document.querySelector('.add');
let mul = document.querySelector('.mul');
let sub = document.querySelector('.sub');
let equ = document.querySelector('.equal');




num1.addEventListener('click', function(e){
	panel.innerHTML += this.innerHTML;
})


num2.addEventListener('click', function(e){
	panel.innerHTML += this.innerHTML;
})

num3.addEventListener('click', function(e){
	panel.innerHTML += this.innerHTML;
})


num4.addEventListener('click', function(e){
	panel.innerHTML += this.innerHTML;
})


num5.addEventListener('click', function(e){
	panel.innerHTML += this.innerHTML;
})


num6.addEventListener('click', function(e){
	panel.innerHTML += this.innerHTML;
})


num7.addEventListener('click', function(e){
	panel.innerHTML += this.innerHTML;
})


num8.addEventListener('click', function(e){
	panel.innerHTML += this.innerHTML;
})


num9.addEventListener('click', function(e){
	panel.innerHTML += this.innerHTML;
})


num0.addEventListener('click', function(e){
	panel.innerHTML += this.innerHTML;
})


add.addEventListener('click', function(e){
	panel.innerHTML += this.innerHTML;
})


divide.addEventListener('click', function(e){
	panel.innerHTML += this.innerHTML;
})


sub.addEventListener('click', function(e){
	panel.innerHTML += this.innerHTML;
})


mul.addEventListener('click', function(e){
	panel.innerHTML += this.innerHTML;
})


dec.addEventListener('click', function(e){
	panel.innerHTML += this.innerHTML;
})


equ.addEventListener('click', function(e){
	let string = panel.innerHTML
	panel.innerHTML = ""
	panel.innerHTML = eval(string);

})