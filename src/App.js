import './App.css';
import  { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import PreviewItem from './components/preview-item/preview-item.component';


function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/fruits/:fruitId' component={PreviewItem} />
        </Switch>
        
    </div>
  );
}

export default App;

