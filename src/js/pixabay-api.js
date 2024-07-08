const API_KEY = `44770113-cb4279c01992ac20f8c79d080`;

export function getImages(inputText) {
    return fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${inputText}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
}

