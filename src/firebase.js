import * as firebase from 'firebase'
import {
    apiKey,
    authDomain,
    databaseURL,
} from './config'

const configurationOptions = {
    debug: true,
    apiKey: apiKey,
    authDomain: authDomain,
    databaseURL: databaseURL,
}

export default firebase.initializeApp(configurationOptions)
