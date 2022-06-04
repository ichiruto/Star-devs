const char = document.getElementById('persons');
const starships = document.getElementById('starships');
const planets = document.getElementById('planets'); 

fillCounters();


function fillCounters(){
    Promise.all([
        getData('people/'),
        getData('starships/'),
        getData('planets')
    ])
    .then(data =>[
        char.style.fontSize = '4em',
        planets.style.fontSize = '4em',
        starships.style.fontSize = '4em',

        char.innerHTML = data[0].count,
        planets.innerHTML = data[1].count,
        starships.innerHTML = data[2].count,
    ])
    .catch(err => console.log('Erro:',err))
}

async function getData(param){
    const res = await fetch(`https://swapi.dev/api/${param}`);
    return await res.json();
}

async function loadPhrase(){
    const btn = document.getElementById('btn-phrases');
    const phrase = document.getElementById('phrase');

    try {
        const data = await fetch('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote');
        const json = await data.json();
        return [
            btn.innerHTML = 'Ver mais uma frase',
            phrase.innerHTML = `"${json.content}"`,
        ];
    } catch (err) {
        return console.log('Erro', err);
    }
}