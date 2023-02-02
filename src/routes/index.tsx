import React, {useEffect} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
// import Home from '@containers/Home';
// import PageNotFound from '@containers/PageNotFound';
// import Register from '@containers/Register';

function AppRoutes() {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, [pathname]);
  return (
    <Routes>
      <Route path='*' element={<h1 className='flex justify-center mt-10'>01110100 01101001 01110100 00100000 01100110 01101111 01110010 00100000 01110100 01100001 01110100</h1>} />
      {/* <Route path='/' element={<Home />} />
      <Route path='register' element={<Register />} />
      <Route path='*' element={<PageNotFound />} /> */}
    </Routes>
  );
}

export default AppRoutes;
