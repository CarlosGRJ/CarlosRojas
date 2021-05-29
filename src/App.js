import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
      <Router>
         <ToastContainer />
         <MyNavbar />
         <Background />
         <ViewportProvider>
            <SocialSidebar />
         </ViewportProvider>
         <Switch>
            <Route exact path='/CarlosRojas/' component={Home} />
            <Route exact path='/CarlosRojas/about' component={About} />
            <Route exact path='/CarlosRojas/skills' component={Skills} />
            <Route exact path='/CarlosRojas/projects' component={Projects} />
            <Route exact path='/CarlosRojas/contact' component={Contact} />
         </Switch>
      </Router>
   );
};

export default App;
