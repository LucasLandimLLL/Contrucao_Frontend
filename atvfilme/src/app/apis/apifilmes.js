import axios from "axios";

console.log(process.env.NEXT_PUBLIC_TMDB_API_KEY)


const apiFilmes = axios.create ({
    baseURL:"https://api.themoviedb.org/3",
    headers: { //não esquecer um espaço depois do bearer
        Authorization: "bearer " + process.env.NEXT_PUBLIC_TMDB_API_KEY
    }
})

export default apiFilmes