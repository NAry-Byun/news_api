const API_KEY = 'API_KEY';
let news = [];
const getLatestNews = async () =>{
    const url = new url('https://neewsapi.netlify.app/top-headLines?&q=${keyword}&country=kr&pageSize=${PAGE_SIZE}&apiKey=${API_KEY}');
    const response = await fetch(url);
    const data = await response.json();
    news = data.articles;
    console.log("ddd", news);
};

getLatestNews();

