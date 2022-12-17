require('dotenv').config()

let key = process.env.UNSPLASH_KEY

const UnSplash = {
    baseURL: 'https://api.unsplash.com/search/photos',
    meta: {
        headers: {
            "Authorization": key,
            "Method": "GET",
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }

}

export default UnSplash;