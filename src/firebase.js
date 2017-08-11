import * as firebase from 'firebase'

const configurationOptions = {
    debug: true,
    apiKey: 'AIzaSyCYNOeLu-OgvgkJrqTUEU0RfMiZxw9bPU0',
    authDomain: 'bygggiganten-2185e.firebaseapp.com',
    databaseURL: 'https://bygggiganten-2185e.firebaseio.com/',
}

export default firebase.initializeApp(configurationOptions)
