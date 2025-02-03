import './App.scss';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
/*import 'swiper/swiper.min.css';*/
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Routes from './config/Routes';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function App() 
{
  return (
      <BrowserRouter>
          <Route render={props => (
              <>
                <Header {...props}/>
                <Routes />
                <Footer />
              </>
          )}/>
      </BrowserRouter>
  );
}

export default App;
