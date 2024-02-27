




async function getDataAsincrono() {
    try {
        let personas = document.getElementById("number").value;
        console.log(personas);
          let url = 'https://swapi.dev/api/people/' + personas;
          const response = await fetch(url);
          if (!response.ok) {
             throw new Error('Network Starwars was not ok.');
          }
          const data = await response.json();
          console.log(data);
          let htmlText = `<div class="personaje"><h2>${data.name}</h2>
          <ul>
              <li> ${data.height}</li>
              <li> ${data.mass}</li>
              <li>${data.birth_year}</li>
          </ul></div>`;
          document.getElementById('resultado').innerHTML = htmlText;
      } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
          throw error;
      }
  }