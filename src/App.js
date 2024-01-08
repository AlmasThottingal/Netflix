
import './App.css';
import Ban from './components/Ban';
import NavBar from './components/NavBar';
import Row from './components/Row';
import requests from './request';

function App() {
  return (
    <div>
      <NavBar/>
      <Ban fetchUrl={requests.fetchNetflixOriginals}/>
      
      <Row isPoster={true} title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals}/>

      <Row title="Trending" fetchUrl={requests.fetchTrending}/>

      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated}/>

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>

      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>

      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    </div>
  );
}

export default App;
