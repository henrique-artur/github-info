import { Router } from 'react-router';
import history from './core/utils/routes/history';
import Routes from './core/utils/routes/Routes';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  )
}

export default App;
