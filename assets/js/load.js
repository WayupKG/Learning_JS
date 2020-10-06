function if_res(x, y) {
	if(x == y) return x + ' = ' + y;
	else if(x < y) return x + ' < ' + y;
	else return x + ' > ' + y;
}

function switch_res(x, y) {
	switch (x, y) {
		case x == y:
			return x + ' = ' + y;
		default:
			return x + ' != ' + y;
	}
}

var x = 5, y = 6;

x == y ? document.write("Yes") : document.write("No");

document.write('<br>' + if_res(5, 5));
document.write('<br>' + switch_res(5, 4)); 
document.write('<br> <h2>Цикл For</h2>');

function for_res(x, y) {
	for(b = x; b < y +1; b++){ document.write('<br>' + b) }
}

for_res(1, 5);


document.write('<br> <h2>Цикл While</h2>');

function while_res(x, y) {
	while (x < y+1) {
		document.write('<br>' + x);
		x++;
	}
}

while_res(1, 5);

// Метод alert, confirm, prompt

// if(confirm('Вы уверены ?')) {
// 	person = prompt('Как вас завут?')
// 	alert('Hello ' + person)
// } else alert('Тупой');


// Массивы

document.write('<br> <h2>Массивы</h2>');
var arr_1 = new Array('sdf', 45, 75);

var arr = new Array("str", 1, 2, false, arr_1);

document.write('Вы массиве ' + arr[4].length + ' элементов');



// События и обработчик событий

p = document.getElementById('p')

function click_btn(button){
	p.innerHTML = 'dsafsdf';
}

var count_mause = 0;

function mauseover(element) {
	count_mause++;
	span = document.getElementById('span');
	span.innerHTML = count_mause;
}


// Обработка Form

function form_login(form) {
	var login = form.login.value;
	var password = form.password.value;
	var repassword = form.repassword.value;

	// if
}


