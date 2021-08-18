import './App.css';
import 'antd/dist/antd.css';
import routes from './routes/routes';
import { RouteWithSubRoutes } from './common/index';
import { Switch } from 'react-router-dom';
import { useEffect } from 'react';
import useAuth from 'customHooks/useAuth';
function App() {
  const auth = useAuth();
  useEffect(() => {
    auth.getUser();
  }, []);
  return (
    <div className="App">
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
