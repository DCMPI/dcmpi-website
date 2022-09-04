import React, {useEffect} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import Home from '@containers/Home';
import PageNotFound from '@containers/PageNotFound';
import Register from '@containers/Register';

function AppRoutes() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [pathname]);
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='register' element={<Register />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
