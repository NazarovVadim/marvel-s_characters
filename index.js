document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const container = document.querySelector('.container'),
        select = document.querySelector('#selectFilm'),
        header = document.querySelector('header'),
        filter = document.querySelector('.filter'),
        buttonPrev = document.querySelector('.button__prev');

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
            header.style.display = 'flex';
            buttonPrev.style.display = 'none';
            filter.style.display= 'flex';
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
                        <span class="realname">Realname: ${name}</span>
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
            header.style.display = 'none';
            const charactersData = JSON.parse(request.responseText);
            filter.style.display= 'none';
            buttonPrev.style.display = 'flex';
            let frameTrailer;
            switch(select.value){
                        case 'Iron Man':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/byQpcN78UjQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                            break;
                        case 'The Incredible Hulk':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/xbqNb2PFKKA?start=7" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                            break;
                        case 'Iron Man 2':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/wKtcmiifycU?start=6" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                            break;
                        case 'Thor':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/JOddp-nlNvQ?start=5" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            break;
                        case 'Captain America: The First Avenger':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/JerVrbLldXw?start=7" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            break;
                        case 'The Avengers':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/eOrNdBpGMv8?start=7" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            break;
                        case 'Iron Man 3':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/oYSD2VQagc4?start=7" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            break;
                        case 'Thor: The Dark World':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/npvJ9FTgZbM?start=6" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            break;
                        case 'Captain America: The Winter Soldier':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/7SlILk2WMTI?start=6" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            break;
                        case 'Guardians of the Galaxy':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/d96cjJhvlMA?start=6" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            break;
                        case 'Avengers: Age of Ultron':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/tmeOjFno6Do?start=6" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            break;
                        case 'Ant-Man':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/pWdKf3MneyI?start=6" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            break;
                        case 'Captain America: Civil War':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/dKrVegVI0Us?start=6" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            break;
                        case 'Guardians of the Galaxy Vol. 2':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/wUn05hdkhjM?start=6" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            break;
                        case 'Spider-Man: Homecoming':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/n9DwoQ7HWvI?start=6" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            break;
                        case 'Thor: Ragnarok':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/ue80QwXMRHg?start=6" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            break;
                        case 'Black Panther':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/xjDjIWPwcPU?start=6" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            break;
                        case 'Avengers: Infinity War':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/6ZfuNTqbHE8?start=6" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            break;
                        case 'Ant-Man and the Wasp':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/UUkn-enk2RU?start=6" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            break;
                        case 'Captain Marvel':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/Z1BCujX3pw8?start=6" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            break;
                        case 'Avengers: Endgame':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/TcMBFSGVi1c?start=6" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            break;
                        case 'Spider-Man: Far From Home':
                            frameTrailer = `<iframe width="560" height="315" src="https://www.youtube.com/embed/Nt9L1jCKGnE?start=6" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
                            break;

            }
            let film = document.createElement('div');
            film.classList.add('film');
            film.insertAdjacentHTML('afterbegin', `
                <div class="film__title">${select.value}</div>
                <div class="trailer">${frameTrailer}</div>
                <div class="characters">Characters of&nbsp;<strong>${select.value}</strong> :<div>
            `);
            container.append(film);


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
                                    <span class="realname">Realname: ${name}</span>
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

    document.addEventListener('click', event => {
        const target = event.target;
        if(target.tagName === 'IMG'){
            console.log(target.src);
        }
    });
    select.addEventListener('change', chooseFilm);
    buttonPrev.addEventListener('click', () => {
        container.innerHTML = ``;
        buttonPrev.style.display = 'none';
        header.style.display = 'flex';
        buttonPrev.style.display = 'none';
        filter.style.display= 'flex';
        select.value = '';
        load();
    })

    load();









});