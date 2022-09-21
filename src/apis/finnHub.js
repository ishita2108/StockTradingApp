import axios from "axios"

//const TOKEN = "cclf1a2ad3i7ei0cggo0cclf1a2ad3i7ei0cggog"

export default axios.create({
  baseURL: "https://finnhub.io/api/v1",
//   params: {
//     token: TOKEN
//   }
})