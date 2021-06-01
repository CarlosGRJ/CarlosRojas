import {
   BrowserRouter as Router,
   Redirect,
   Route,
   Switch,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components

import { Background } from './components/Background/Background';
import { Home } from './pages/Home/Home';
import { MyNavbar } from './components/MyNavbar/MyNavbar';
import { About } from './pages/About/About';
import { Skills } from './pages/Skills/Skills';
import { Projects } from './pages/Projects/Projects';
import { Contact } from './pages/Contact/Contact';
import { SocialSidebar } from './components/SocialSidebar/SocialSidebar';
import { ViewportProvider } from './hooks/useViewport';

const App = () => {
   return (
      <Router basename='/CarlosRojas'>
         <ToastContainer />
         <MyNavbar />
         <Background />
         <ViewportProvider>
            <SocialSidebar />
         </ViewportProvider>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/skills' component={Skills} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact' component={Contact} />
            <Redirect to='/' />
         </Switch>
      </Router>
   );
};

export default App;
