import {inputTextUser} from "./render-functions"

const API_KEY = `44770113-cb4279c01992ac20f8c79d080`;

function userSourse() {
    return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${inputTextUser}&image_type=photo&orientation=horizontal&safesearch=true`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
}

userSourse()
    .then((response) => response)
    .catch((rejected) => console.log("error", rejected))
                

// ----- EXPORT -----
export { userSourse };
