import "./App.css";
import Homepage from "./pages/homepage/homepage.component";

import { Route, Switch } from 'react-router-dom';
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={Homepage} />
        <Route exact={true} path="/shop" component={ShopPage} />
        <Route exact={true} path="/signin" component={SignInAndSignUpPage} />
      </Switch>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
