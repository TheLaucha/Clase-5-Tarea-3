const $botonCalcular = document.querySelector("#calcular");

$botonCalcular.onclick = function(){
	const horas = document.querySelectorAll(".horas");
	const minutos = document.querySelectorAll(".minutos");
	const segundos = document.querySelectorAll(".segundos");

	let horasSumados = 0;
	let minutosSumados = 0;
	let segundosSumados = 0;

	for(i=0; i<horas.length; i++){
		horasSumados += Number(horas[i].value);
	}

	for (i = 0; i<minutos.length; i++){
		minutosSumados += Number(minutos[i].value);
	}

	for (i=0; i<segundos.length; i++){
		segundosSumados += Number(segundos[i].value);
	}

	// CONVERSOR

	let totalHoras=0;
	let totalMinutos=0;
	let totalSegundos=0;

	function segundosEnMinutos(segundosAConvertir){
		minutosSumados = minutosSumados + Math.floor(segundosSumados/60);
		totalSegundos = segundosSumados % 60;
	}

	function minutosEnHoras(minutosAConvertir){
		totalHoras = horasSumados + Math.floor(minutosSumados/60);
		totalMinutos = minutosSumados % 60;
	}

	segundosEnMinutos(segundosSumados);
	minutosEnHoras(minutosSumados);

	document.querySelector("strong").innerText = (`Tiempo total: ${totalHoras}h:${totalMinutos}m:${totalSegundos}s`);
	document.querySelector("#campo").style.padding="10px";
	return false;

}


