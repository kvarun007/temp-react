
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

    <Box/>
    
    </div>
  );
}

export default App;
