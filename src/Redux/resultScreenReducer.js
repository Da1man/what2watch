
let initialState = {
    result: [
        {
            id: 1,
            time: '19:00',
            name: 'Изгой-один. Звездные войны. Истории.',
            genre: 'serial',
            genreImage: require('../assets/images/genreLogo/genre-serials-logo.png'),
            channel: 'tv1000',
            channelImage: require('../assets/images/chanelsLogo/tv1000-logo.png'),
        },
        {
            id: 2,
            time: '10:00',
            name: 'Чужие 3',
            genre: 'film',
            genreImage: require('../assets/images/genreLogo/genre-film-logo.png'),
            channel: 'tnt',
            channelImage: require('../assets/images/chanelsLogo/tnt-logo.png'),
        },
        {
            id: 3,
            time: '07:00',
            name: 'Люди-Х 3. Последняя битва',
            genre: 'film',
            genreImage: require('../assets/images/genreLogo/genre-film-logo.png'),
            channel: 'oplot2',
            channelImage: require('../assets/images/chanelsLogo/oplot2-logo.png'),
        },
        {
            id: 4,
            time: '13:00',
            name: 'Ледяное сердце 2. Мультфильм',
            genre: 'mult',
            genreImage: require('../assets/images/genreLogo/genre-mult-logo.png'),
            channel: 'friday',
            channelImage: require('../assets/images/chanelsLogo/friday-logo.png'),
        },

    ],
};


const resultScreenReduser = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }

}


export default resultScreenReduser;
