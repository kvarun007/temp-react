
import './App.css';
import Accordian from './components/accordian';
import Imageslider from './components/image-slider';
import RandomColor from './components/randow-color';
import StarRating from './components/star-rating';
import LoadMoreData from "./components/load-more-data"
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import QRCodeGenerator from "./components/qr-code-generator"
import Box from './components/box';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-model/modal-test';
import GithubProfileFinder from './components/github-profile-finder';
import Slider from './components/slider-test';
import SearchAutocomplete from './components/search -autocomplete';
import InitialPage from './components/test-web';


function App() {
  return (
    <div className="App">
      {/*<Accordian/>*/}

      {/*<RandomColor/>*/}

      {/*<StarRating/>*/}

      {/*<Imageslider url={"https://picsum.photos/v2/list"}
        page={"1"}
  limit={"10"}/>*/}

    {/*<LoadMoreData/>*/}

    {/*<TreeView menus={menus}/>*/}

    {/*<QRCodeGenerator/>*/}

    {/*<Box/>*/}

    {/*<LightDarkMode/>*/}

    {/*<ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />*/}

    {/*<TabTest/>*/}

    {/*<ModalTest/>*/}

    {/*<GithubProfileFinder/>*/}

    {/*<Slider url={"https://api.unsplash.com/photos/?client_id=XgWKIQ7WiVgZqqwjxNnj-vL0bL5sGrNKyiT5ThBulXg"}/>*/}


    {/*<SearchAutocomplete/>*/}

    <InitialPage/>

    </div>
  );
}

export default App;
