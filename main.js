/*let panel = document.querySelector('.panel');
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
let preres = document.querySelector('.preres');
let regex = /\d+[+\-*\/]\d/

num1.addEventListener('click', append)
num2.addEventListener('click', append)
num3.addEventListener('click', append)
num4.addEventListener('click', append)
num5.addEventListener('click', append)
num6.addEventListener('click', append)
num7.addEventListener('click', append)
num8.addEventListener('click', append)
num9.addEventListener('click', append)
num0.addEventListener('click', append)
add.addEventListener('click', append)
divide.addEventListener('click', append)
sub.addEventListener('click', append)
mul.addEventListener('click', append)
dec.addEventListener('click', append)
equ.addEventListener('click', function(e){
	let string = panel.innerHTML
	panel.innerHTML = eval(string);

})

function append(){
	var char = this.innerHTML;
	panel.innerHTML += char;
	if(regex.test(panel.innerHTML)){
		preres.innerHTML = eval(panel.innerHTML)
	}
}*/


$(document).ready(function(){

	let regex = /\d+[+\-*\/]\d/

	$('.keylist li').on('click', function(){
		let char = $(this).html();
		let panel = $('.panel').html();
		if(char === '='){
			$('.panel').html(eval(panel))
		} else {
			$('.panel').html(panel + char);
			panel =$('.panel').html();
			if (regex.test(panel)){
				$('.preres').html(eval(panel))
			}

		}
	})
})

