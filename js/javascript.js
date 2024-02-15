function konversiCelsius() {
    var celsius = parseFloat(document.querySelector(".input-celsius").value);
    var fahrenheit = (celsius * 9/5) + 32;
    document.querySelector(".input-fahrenheit").value = fahrenheit.toFixed(2);
    var textarea = document.querySelector(".hasilKalkulasi");
    textarea.value= celsius +" C * (9/5) + 32 = "+ fahrenheit +" F";
}
function reset() {
    document.querySelector(".input-celsius").value = " ";
    document.querySelector(".input-fahrenheit").value = " ";
    document.querySelector(".hasilKalkulasi").value = "";
}
