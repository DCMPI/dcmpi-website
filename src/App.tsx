import React, {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '@containers/Home';

import {Provider} from 'react-redux';
import ToastContainer from '@components/ToastContainer';
import PageNotFound from '@containers/PageNotFound';
import {store} from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </Provider>
  );
}

export default App;
