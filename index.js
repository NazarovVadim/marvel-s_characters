document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const container = document.querySelector('.container');

    const load = () => {
        let characters = {};

        const getData = () => {
            const request = new XMLHttpRequest();

            request.open('GET', './dbHeroes.json');

            request.addEventListener('readystatechange', () => {
                if(request.status === 200 && request.readyState === 4){
                    const charactersData = JSON.parse(request.responseText);
                    charactersData.forEach(item => {
                        const card = document.createElement('div');
                        card.classList.add('card');
                        card.classList.add('hero');

                        let birthDayStr;

                        if(item.birthDay && item.deathDay){
                            birthDayStr = `${item.birthDay} - ${item.deathDay}`;
                        } else if (item.birthDay && !item.deathDay){
                            birthDayStr = `${item.birthDay} - ...`;
                        } else if(!item.birthDay && item.deathDay){
                            birthDayStr = `... - ${item.deathDay}`;
                        } else {
                            birthDayStr = `Unknown years of life`;
                        }

                        let species = (item.species) ? item.species : `Unknown species`;
                        let name = (item.realName) ? item.realName : item.name;
                        let movies;
                        if(item.movies){
                            let moviesArr = item.movies;
                            console.log(moviesArr);
                            movies = moviesArr.join(', ');
                        } else{
                            movies = `Was now in the movies`;
                        }

                        

                        let citizenship = (item.citizenship) ? item.citizenship : `Unknown`;

                        card.insertAdjacentHTML('afterbegin', `
                                <div class="photo"><img src="${item.photo}" alt="${item.name}"></div>
                                <div class="info">
                                    <span class="name">${item.name}</span>
                                    <span class="life">${birthDayStr}</span>
                                    <span>Realname: ${name}</span>
                                    <span>Species: ${species}</span>
                                    <span>Gender: ${item.gender}</span>
                                    <span>Citizenship: ${citizenship}</span>
                                    <span>Movies: ${movies}</span>
                                    <span>Actors: ${item.actors}</span>
                                </div>
                        `);
                        container.append(card);
                    });
                }
            });

            request.setRequestHeader('Content-Type', 'application/json');
            request.send();
        }
        getData();    
    };
    load();












});