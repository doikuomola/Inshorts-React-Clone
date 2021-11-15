import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import NavInshort from './components/NavInshort';
import NewsContent from './components/NewsComponent/NewsContent';
import apikey from './data/config';

function App() {
  const [category, setCategory] = useState('general')
  const [newsArray, setNewsArray] = useState([])
  const [newsResults, setNewsResults] = useState()
  const [loadMore, setLoadMore] = useState(20)

  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/"
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=ng&category=${category}&apiKey=${apikey}&pageSize=${loadMore}`)
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults)
    } catch (error) {
      console.log(error);
    }
  }

  console.log(newsArray);

  useEffect(() => {
    newsApi() //eslint-disable-next-line
  }, [newsResults, category, loadMore])

  return (
    <div className="App">
      <NavInshort setCategory={setCategory} />
      <NewsContent
        newsArray={newsArray}
        newsResults={newsResults}
        loadMore={loadMore}
        setLoadMore={setLoadMore}
      />
      <Footer />
    </div>
  );
}

export default App;
