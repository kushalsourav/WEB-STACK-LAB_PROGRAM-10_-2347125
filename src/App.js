import { DataProvider } from './DataContext/DataContext';
import Router from './Router/Router';
function App() {

  return (
  
    <DataProvider>
      <Router />
    </DataProvider>
  );
}

export default App;