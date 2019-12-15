
const TOGGLE_IS_SELECTED = 'TOGGLE_IS_SELECTED'

let initialState = {
    channels: [
        {
            id: 1,
            name: 'ТНТ',
            image: require('../assets/images/chanelsLogo/tnt-logo.png'),
            isSelected: false,
        },
        {
            id: 2,
            name: 'Новороссия',
            image: require('../assets/images/chanelsLogo/novorossia-logo.png'),
            isSelected: false,
        },
        {
            id: 3,
            name: 'Оплот 2',
            image: require('../assets/images/chanelsLogo/oplot2-logo.png'),
            isSelected: false,
        },
        {
            id: 4,
            name: 'Первый Республиканский',
            image: require('../assets/images/chanelsLogo/first-republic-logo.png'),
            isSelected: false,
        },
        {
            id: 5,
            name: 'ТВ 3',
            image: require('../assets/images/chanelsLogo/tv3-logo.png'),
            isSelected: false,
        },
        {
            id: 6,
            name: 'ТВ 21 век',
            image: require('../assets/images/chanelsLogo/tv21-logo.png'),
            isSelected: false,
        },
        {
            id: 7,
            name: 'СТС',
            image: require('../assets/images/chanelsLogo/sts-logo.png'),
            isSelected: false,
        },
        {
            id: 8,
            name: 'Пятница',
            image: require('../assets/images/chanelsLogo/friday-logo.png'),
            isSelected: false,
        },
        {
            id: 9,
            name: 'TV 1000',
            image: require('../assets/images/chanelsLogo/tv1000-logo.png'),
            isSelected: false,
        },
        {
            id: 10,
            name: 'Рен-ТВ',
            image: require('../assets/images/chanelsLogo/rentv-logo.png'),
            isSelected: false,
        },
    ],
    genres: [
        {
            id: 1,
            name: 'Мультфильмы',
            image: require('../assets/images/genreLogo/genre-mult-logo.png'),
            isSelected: false,
        },
        {
            id: 2,
            name: 'Фильмы',
            image: require('../assets/images/genreLogo/genre-film-logo.png'),
            isSelected: true,
        },
        {
            id: 3,
            name: 'Сериалы',
            image: require('../assets/images/genreLogo/genre-serials-logo.png'),
            isSelected: true,
        },
    ]
};


const mainScreenReduser = (state = initialState, action) => {
    switch (action.type) {

        case TOGGLE_IS_SELECTED: {
            return {
                ...state,
                channels: state.channels.map(c => {
                    if (c.id === action.channelId) {
                        return {...c, isSelected: !c.isSelected}
                    }
                    return c;
                    }
                )
            };
        }
        default:
            return state;
    }

}

export const toggleIsSelected = (channelId) => ({type: TOGGLE_IS_SELECTED, channelId})

export default mainScreenReduser;
