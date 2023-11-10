class Temperature{
    constructor(){
        this._Celsius=0;
        this._Farenheit=32;
    }
    get getCelsius(){
        return this._Celsius;
    }
    get getFarenheit(){
        return this._Farenheit;
    }
    set setCelsius(temp){
        this._Celsius = temp;
        this._Farenheit = temp*(9/5)+32;
    }
    set setFarenheit(temp){
        this._Farenheit = temp;
        this._Celsius= (temp-32)*(5/9);
    }
}
 const temperature = new Temperature();

  console.log(`Initial Celsius: ${temperature.getCelsius}°C`);
  console.log(`Initial Farenheit: ${temperature.getFarenheit}°F`);

  
  temperature.setCelsius = 25;
  console.log(`Celsius: ${temperature.getCelsius}°C`);
  console.log(`Farenheit: ${temperature.getFarenheit}°F`);

  
  temperature.setFarenheit = 68;
  console.log(`Celsius: ${temperature.getCelsius}°C`);
  console.log(`Farenheit: ${temperature.getFarenheit}°F`);

  
