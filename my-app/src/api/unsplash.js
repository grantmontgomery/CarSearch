import axios from "axios"

export default axios.create({
    baseURL: "https://api.unsplash.com/search/photos",
    headers: {
        Authorization: "Client-ID a7d1d79dd4f588f4f099f8211bd93e3e4864020145099a9c01c950510ce9f0ff"
    }
})