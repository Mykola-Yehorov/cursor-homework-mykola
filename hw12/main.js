const images = [{
  name: 'R2-D2',
  image: 'img/1.png'
},
{
  name: 'Luke Skywalker',
  image: 'img/luke-skywalker.jpg'
}



]

const result = document.querySelector('.result');

const getInfoButton =  document.querySelector('#get-info-button');
getInfoButton.addEventListener ('click', () => {
  
  let charactersItems = document.querySelector('.result');
  axios.get(`https://swapi.dev/api/films/2`)
    .then(res => {
      const characters = res.data.characters;

      characters.forEach(character => {
        axios.get(`${character}`)
          .then(people => {
            const name =  people.data.name;
            const birth = people.data.birth_year;
            const gender = people.data.gender; 

            const characterImage = images.find(img => img.id === character.id);            

            result.insertAdjacentHTML('beforeend', `<div class="characters__item">
            <div class="characters__item-name">${name}</div> 
            <div class="characters__item-birth">${birth}</div> 
            <div class="characters__item-gender">${gender}</div>   
            <img src=${characterImage}>
            </div>`)
          })   
          
          
    })
  });
});

/*
let characterImage = {     
  people: `img/${link}.img`     
};
*/
function clean(){
  if (result !== null) {
    result.remove(); 
    }
}

function showPlanets(n) {
  //if (n != 1)
  //clean();
  axios.get(`https://swapi.dev/api/planets/?page=${n}`)
    .then(res => {
      const planets = res.data.results;
      
      planets.forEach(planet => {
        result.insertAdjacentHTML('beforeend', `<div class="planets__item">
        ${planet.name}</div>`)
      })
    });
};


const showPlanetsButton =  document.querySelector('#show-planets-button');
showPlanetsButton.addEventListener ('click', () => {
  showPlanets(1)
});

const nextPlanetsButton =  document.querySelector('#next-planets-button');

  let filmNumber = 1;
  nextPlanetsButton.addEventListener ('click', () => {
    filmNumber = filmNumber +1

    if (filmNumber > 6) filmNumber = 6;
  console.log (filmNumber);
  showPlanets(filmNumber);  
});








