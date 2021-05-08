const results = document.querySelector('#result');
const searchInput = document.querySelector('#searchInput')
let characters = []

//Axios

searchInput.addEventListener('keyup', (e) =>{
  const stringSearch = e.target.value;
    const filterCharacters = characters.filter((character) => {
      return (
        character.name.toLowerCase().includes(stringSearch) ||
        character.house.toLowerCase().includes(stringSearch)
      );
    });
    displayCharacters(filterCharacters)
});


const  getCharacters = async () => {
  await axios.get('http://hp-api.herokuapp.com/api/characters')
  .then(response => {
    characters = response.data
    displayCharacters(characters)
    const message = '<p class="text-center display-4">Search by name or house</p>'
    results.innerHTML = message;
  }).catch(err => {
    err = result.innerHTML = '<div class="text-center"><p class="display-1">Error 404</p></div>'
  });
}


const displayCharacters = (characters) => {
     const result = characters
     .map((character) => {
      return (`
        <div class="col-12 col-md-4">
        <div class= "container--character p-2 text-center">
          <h2>${character.name}</h2>
          <img src="${character.image}" alt="${character.name}">
          <p><strong>Casa:</strong> ${character.house}</p>
          <p>Patronus: ${character.patronus}</p>
        </div>
        </div>
      `)
    })
    .join(' ')
    results.innerHTML = result;
}

getCharacters();
const element = document.getElementsByClassName('container--character');
    console.log(element)
