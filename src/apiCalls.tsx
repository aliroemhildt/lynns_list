const apiKey = "QeGfkjxp7tLZ3SygF9N__lCE_MQ5gxNe1YwVsi17CK1sMUIqin5Cmh5fEh-228VREL-F7C9J0zTA98DPvQOk0V-S7I6mqDwqYkAkpIiEKgqfIubC9ze8NRu3thgUYnYx"
const url = `https://api.yelp.com/v3/businesses/search?location=Denver&categories=food&limit=50`

// const getAllRestaurants = () => {
//   return fetch('https://fe-cors-proxy.herokuapp.com', {
//     headers: {
//     "Target-URL": "https://api.yelp.com/v3/businesses/search?location=Denver&categories=food",
//     "Authorization": "Bearer AH6TkVNX-YvTWJNUDUWrGhPCWRjzowhc6chQ6pvs4uhx251m3PAI0UoMZT5jRW1IyQFG0DifaEmk6F3Iz64u4myxtcZRuGThLO9OHp_zAGCp7yGsEorWWz3lhLIOYnYx"
//   }
// })
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error))
// }

const getAllRestaurants = (offset: number = 0) => {
  const newUrl = `https://cors-anywhere.herokuapp.com/${url}` + `&offset=${offset}`
  console.log("fetch URL: ", newUrl)
  return fetch(newUrl, {
    headers: {
    Authorization: `Bearer ${apiKey}`
  }
})
  .then(response => {
    console.log("fetch request ran")
    return response.json()
  })
  // .then(data => console.log(data))
  .catch(error => console.error(error))
}


export {getAllRestaurants};