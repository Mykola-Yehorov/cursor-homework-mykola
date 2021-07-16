const getInfoButton =  document.getElementById('get-info-button');
getInfoButton.addEventListener ('click', () => {
  
  let charactersItems = document.getElementById('characters__items');
  axios.get(`https://swapi.dev/api/films/2`)
    .then(res => {
      const characters = res.data.characters;

      characters.forEach(link => {
        axios.get(`${link}`)
          .then(people => {
            const name =  people.data.name;
            const birth = people.data.birth_year;
            const gender = people.data.gender; 

            let characterImage = {     
              people: `img/${link}.png`     
            };            

            charactersItems.insertAdjacentHTML('beforeend', `<div class="characters__item">
            <div class="characters__item-name">${name}</div> 
            <div class="characters__item-birth">${birth}</div> 
            <div class="characters__item-gender">${gender}</div> 
            <img class="characters__item-img" src="${characterImage}"></img> 
            </div>`)
          })    
    })
  });
});

let characterImage = {     
  people: `img/${link}.img`     
};

