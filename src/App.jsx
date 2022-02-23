import React from 'react';
import Utama from './components/Utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return(
        <div>
          <nav className="navbar fixed-top navbar-fixed-top shadow-sm navbar-dark bg-dark">
            <container>
              <nav className="me-auto">
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page"><Link class="navbar-text" to="/">Home</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page"><Link class="navbar-text" to="Project">Project</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page"><Link class="navbar-text" to="/Blog">Blog</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page"><Link class="navbar-text" to="/Youtube">Youtube</Link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" aria-current="page"><Link class="navbar-text" to="/Contact">Contact</Link></a>
                  </li>
                </nav>
            </container>
          </nav>
          <p><Utama /></p>
        </div>
    );
  }
}
export default App;