function convertirCelsius(){
    const celsiusInput = document.getElementById("celsius").value;
    const errorMsg = document.getElementById("error");
    const kelvinSpan = document.getElementById("kelvin");
    const fahrenheitSpan = document.getElementById("fahrenheit");

    errorMsg.textContent = "";

    let celsius = parseFloat(celsiusInput);
    if (isNaN(celsius)) {
        errorMsg.textContent = "Error, ingresa un numéro válido.";
        kelvin.textContent = "--";
        fahrenheit.textContent = "--";
        return;
    }

    let kelvin = (celsius + 273.15).toFixed(2);
    let fahrenheit = ((1.8*celsius) + 36).toFixed(2);

    kelvinSpan.textContent = kelvin;
    fahrenheitSpan.textContent = fahrenheit;
    console.log(`Grados Kelvin: ${kelvin}`);
    console.log(`Grados Fahrenheit: ${fahrenheit}`);
}


