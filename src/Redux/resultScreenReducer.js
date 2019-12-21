
const SET_PARSED_DATA = 'SET_PARSED_DATA';
const CLEAR_RESULTS = 'CLEAR_RESULTS';

let initialState = {
    result: [
        // {
        //     id: 1,
        //     time: '19:00',
        //     name: 'Изгой-один. Звездные войны. Истории.',
        //     genre: 'serial',
        //     genreImage: require('../assets/images/genreLogo/genre-serials-logo.png'),
        //     channel: 'tv1000',
        //     channelImage: require('../assets/images/chanelsLogo/tv1000-logo.png'),
        // },
        // {
        //     id: 2,
        //     time: '10:00',
        //     name: 'Чужие 3',
        //     genre: 'film',
        //     genreImage: require('../assets/images/genreLogo/genre-film-logo.png'),
        //     channel: 'tnt',
        //     channelImage: require('../assets/images/chanelsLogo/tnt-logo.png'),
        // },
        // {
        //     id: 3,
        //     time: '07:00',
        //     name: 'Люди-Х 3. Последняя битва',
        //     genre: 'film',
        //     genreImage: require('../assets/images/genreLogo/genre-film-logo.png'),
        //     channel: 'oplot2',
        //     channelImage: require('../assets/images/chanelsLogo/oplot2-logo.png'),
        // },
        // {
        //     id: 4,
        //     time: '13:00',
        //     name: 'Ледяное сердце 2. Мультфильм',
        //     genre: 'mult',
        //     genreImage: require('../assets/images/genreLogo/genre-mult-logo.png'),
        //     channel: 'friday',
        //     channelImage: require('../assets/images/chanelsLogo/friday-logo.png'),
        // },

    ],
};



const resultScreenReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_PARSED_DATA : {
            return {
                ...state,
                result: [...state.result, {
                    id: state.result.length,
                    time: action.data.time,
                    name: action.data.name,
                    genre: action.data.genre,
                    channel: action.data.channel
                }
                ]
            }
        }
        case CLEAR_RESULTS: {
            let newState = {
                result: [],
            };
            return newState
        }

        default:
            return state;
    }

}

export const setParsedData = (data) => ({type: SET_PARSED_DATA, data });
export const clearResults = () => ({type: CLEAR_RESULTS });


export default resultScreenReduser;
