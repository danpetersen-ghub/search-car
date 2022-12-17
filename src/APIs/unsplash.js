// import * as dotenv from 'dotenv'

// dotenv.config()

// let key = process.env.UNSPLASH_KEY

const UnSplash = {
    baseURL: 'https://api.unsplash.com/search/photos',
    meta: {
        headers: {
            "Authorization": process.env.REACT_APP_UNSPLASH_KEY,
            "Method": "GET",
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }

}

export default UnSplash;