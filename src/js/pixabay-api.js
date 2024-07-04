const API_KEY = `44770113-cb4279c01992ac20f8c79d080`;
// const tags = cat;

fetch(`https://pixabay.com/api/?key=${API_KEY}`)
    .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })



