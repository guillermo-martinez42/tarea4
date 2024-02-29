function init() {
    var elems = document.querySelectorAll('select');
    var instancesSel = M.FormSelect.init(elems, {});

    var elems = document.querySelectorAll('.datepicker');
    var instancesPic = M.Datepicker.init(elems, {});
  };

function setAsActive(obj) {
    setAsInactive();
    obj.classList.add('active');
}

function setAsInactive() {
    var obj = document.querySelector('.active');
    if (obj != null) obj.classList.remove('active');
}

/**document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  }); */


  
async function getDataAsincrono() {
  try {
    

      let personas = document.getElementById("number").value;
      console.log(personas);
        let url = 'https://jsonplaceholder.typicode.com/photos/' + personas;
        const response = await fetch(url);
        if (!response.ok) {
           throw new Error('Network Starwars was not ok.');
        }
        const data = await response.json();
        console.log(data);
        let htmlText = `
          <div class="personaje">
            <img  class="colore" src="${data.url}" alt="${data.title}">
            <img  class="colore" src="${data.url}" alt="${data.title}">
          </div>`;
        document.getElementById('resultado').innerHTML = htmlText;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}


function checkLimites(){
  const num1 = parseInt(document.getElementById('limInf').value)
  const num2 = parseInt(document.getElementById('limSup').value)
  const switchElement = document.querySelector('.switch input[type="checkbox"]');
  const switchStatus = switchElement.checked;
  console.log(switchElement);
  console.log(switchStatus);
  if(num2<num1){
    alert('El limite inferior debe ser menor que el limite superior');
  }else if(num1>99 || num2>100){
    alert('Numeros deben ser menores a 100');
  }else if(switchStatus){
    coloresOn();
  }else{
    colores();
  }


  
  
}

async function colores() {
  try {

    const num1 = parseInt(document.getElementById('limInf').value)
    const num2 = parseInt(document.getElementById('limSup').value)
    let htmlText =''

    for (let i = num1; i <= num2; i++) {
      let url = 'https://jsonplaceholder.typicode.com/photos/' + i;
      console.log(url);
      const dato = await fetch(url);
      const data = await dato.json();
        console.log(data);
      console.log(dato.url);
       htmlText = htmlText + `
        
          <img  class="colore" src="${data.url}" alt="${data.title}">
        `;
      
    }
    document.getElementById('cuadros').innerHTML = htmlText
    
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}

async function coloresOn() {
  try {

    const num1 = parseInt(document.getElementById('limInf').value)
    const num2 = parseInt(document.getElementById('limSup').value)
      let url = 'https://jsonplaceholder.typicode.com/photos/' + num1;
      console.log(url);
      const dato = await fetch(url);
      const data = await dato.json();
        console.log(data);
      console.log(dato.url);
       let htmlText = `
        
          <img  class="colore" src="${data.url}" alt="${data.title}">
        `;
      
    document.getElementById('cuadros').innerHTML = htmlText
    
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
}

