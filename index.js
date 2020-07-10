document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const container = document.querySelector('.container'),
        select = document.querySelector('#selectFilm');

    const load = () => {
        const getData = () => {
            const request = new XMLHttpRequest();
            request.open('GET', './dbHeroes.json');
            request.addEventListener('readystatechange', () => {
                if (request.status === 200 && request.readyState === 4) {
                    render(request);
                }
            });

            request.setRequestHeader('Content-Type', 'application/json');
            request.send();
        }
        getData();
    };

    const render = (request) => {
        if(select.value === ''){
            const charactersData = JSON.parse(request.responseText);
            charactersData.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.classList.add('hero');
                let birthDayStr;
                if (item.birthDay && item.deathDay) {
                    birthDayStr = `${item.birthDay} - ${item.deathDay}`;
                } else if (item.birthDay && !item.deathDay) {
                    birthDayStr = `${item.birthDay} - ...`;
                } else if (!item.birthDay && item.deathDay) {
                    birthDayStr = `... - ${item.deathDay}`;
                } else {
                    birthDayStr = `Unknown years of life`;
                }
    
                let species = (item.species) ? item.species : `Unknown species`;
                let name = (item.realName) ? item.realName : item.name;
                let movies;
                if (item.movies) {
                    let moviesArr = item.movies;
                    movies = moviesArr.join(',\n    ');
                } else {
                    movies = `Was now in the movies`;
                }
                let citizenship = (item.citizenship) ? item.citizenship : `Unknown`;
                card.insertAdjacentHTML('afterbegin', `
                    <div class="photo"><img src="${item.photo}" alt="${item.name}" style="border-radius:5px; border: 1px solid white;"></div>
                        <div class="info">
                        <span class="name">${item.name}</span>
                        <span class="life">${birthDayStr}</span>
                        <span>Realname: ${name}</span>
                        <span>Species: ${species}</span>
                        <span>Gender: ${item.gender}</span>
                        <span>Citizenship: ${citizenship}</span>
                        <pre><strong class="strong">Movies:</strong>
    ${movies}</pre>
                        <span>Actors: ${item.actors}</span>
                    </div>
            `);
                container.append(card);
            });
        } else {
            const charactersData = JSON.parse(request.responseText);
            charactersData.forEach(item => {

                if(item.movies){
                    item.movies.forEach(el => {
                        if(el === select.value){
                            const card = document.createElement('div');
                            card.classList.add('card');
                            card.classList.add('hero');
                            let birthDayStr;
                            if (item.birthDay && item.deathDay) {
                                birthDayStr = `${item.birthDay} - ${item.deathDay}`;
                            } else if (item.birthDay && !item.deathDay) {
                                birthDayStr = `${item.birthDay} - ...`;
                            } else if (!item.birthDay && item.deathDay) {
                                birthDayStr = `... - ${item.deathDay}`;
                            } else {
                                birthDayStr = `Unknown years of life`;
                            }
                            let species = (item.species) ? item.species : `Unknown species`;
                            let name = (item.realName) ? item.realName : item.name;
                            let movies;
                            if (item.movies) {
                                let moviesArr = item.movies;
                                movies = moviesArr.join(',\n    ');
                            } else {
                                movies = `Was now in the movies`;
                            }
                            let citizenship = (item.citizenship) ? item.citizenship : `Unknown`;
                            card.insertAdjacentHTML('afterbegin', `
                                <div class="photo"><img src="${item.photo}" alt="${item.name}" style="border-radius:5px; border: 1px solid white;"></div>
                                    <div class="info">
                                    <span class="name">${item.name}</span>
                                    <span class="life">${birthDayStr}</span>
                                    <span>Realname: ${name}</span>
                                    <span>Species: ${species}</span>
                                    <span>Gender: ${item.gender}</span>
                                    <span>Citizenship: ${citizenship}</span>
                                    <pre><strong class="strong">Movies:</strong>
    ${movies}</pre>
                                    <span>Actors: ${item.actors}</span>
                                </div>
                        `);
                        container.append(card);
                        }
                    });
                }
            });
        }

    }

    const chooseFilm = () => {
        container.innerHTML = ``;

        const getData = () => {
            const request = new XMLHttpRequest();
            request.open('GET', './dbHeroes.json');
            request.addEventListener('readystatechange', () => {
                if (request.status === 200 && request.readyState === 4) {
                    render(request);
                }
            });

            request.setRequestHeader('Content-Type', 'application/json');
            request.send();
        };
        getData();
    }

    select.addEventListener('change', chooseFilm);



    load();









});