const $botonCalcular = document.querySelector('#calcular')
$botonCalcular.onclick = function () {
    const horasIngresadas = document.querySelectorAll('.horas')
    const minutosIngresados = document.querySelectorAll('.minutos')
    const segundosIngresados = document.querySelectorAll('.segundos')
    let horasSumadas=0
    let minutosSumados=0
    let segundosSumados=0
    for (i = 0; i < horasIngresadas.length; i++) {
        horasSumadas += Number(horasIngresadas[i].value)
    }
    for (i = 0; i < minutosIngresados.length; i++) {
        minutosSumados += Number(minutosIngresados[i].value)
    }
    for (i = 0; i < horasIngresadas.length; i++) {
        segundosSumados += Number(segundosIngresados[i].value)
    }
    //convertidorUltraChotoDeMinutosYSegundos
    
    let segundosTotales;
    let minutosTotales;
    function convertirSegundosAMinutos(segundosAConvertir){
        minutosSumados=minutosSumados+Math.floor(segundosSumados/60)
        segundosTotales=segundosSumados%60
    }
    
    function convertirMinutosAHoras(minutosAConvertir){
        horasSumadas=horasSumadas+Math.floor(minutosSumados/60)
        minutosTotales=minutosSumados%60    
    }
    convertirSegundosAMinutos(segundosSumados)
    convertirMinutosAHoras(minutosSumados)
    const $resultado = document.querySelector('strong')
    $resultado.textContent = `La duración total de las clases de r/argentina programa es de ${horasSumadas}h:${minutosTotales}m:${segundosTotales}s`
    return false;
}