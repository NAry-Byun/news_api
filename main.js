const API_KEY = 'API_KEY';
let news = [];
const getLatestNews = async () =>{
    let q =""
    let page = 1
    let pageSize = 10
    let category = "technology"
    const url = new URL('https://neewsapi.netlify.app.app/top-headlines?country=kr&apiKey=' + API_KEY);
    const response = await fetch(url);
    const data = await response.json();
    news = data.articles;
    console.log("ddd", news);
};

getLatestNews();

