import cleanData from './utilities';

const apiKey = process.env.REACT_APP_API_KEY;
const url = process.env.REACT_APP_API_URL;
const proxyUrl: string = process.env.REACT_APP_PROXY_URL || '';

const checkForError = (response: Response) => {
  if (response.status === 404) {
    throw new Error (`${response.status} Error. Sorry, the page you're looking for doesn't exist.`)
  } else if ((!response.ok && response.status >= 400) && response.status < 500) {
    throw new Error (`${response.status} Error. Sorry, the page you're looking for doesn't exist.`)
  } else if (!response.ok && response.status >= 500) {
    throw new Error (`${response.status} Error. Something went wrong. Please try again!`)
  } else if (!response.ok){
    throw new Error (`${response.status} Error. Something went wrong! We're not sure either, sorry!!`)
  } else {
    return response.json()
  }
}

const getAllRestaurants = (offset: number = 0) => {
  return fetch(proxyUrl, {
    headers: {
    "Target-URL": `${url}&offset=${offset}`,
    "Authorization": `Bearer ${apiKey}`
    }
  })
  .then(response => checkForError(response))
  .then(data => cleanData(data))
}

export {getAllRestaurants};