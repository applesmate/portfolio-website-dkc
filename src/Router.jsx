import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Landing from './pages/Landing'
import Home from './pages/Home'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Router() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="home" element={<Home />} />
        </Route>
        {/* <Route
          path="/register"
          element={
            <Register
              setTokenFn={setToken}
              handleSuccess={handleNewToken}
              showError={showErrorModal}
            />
          }
        />
        <Route
          path="/preview-presentation/:id/:slideIndex"
          element={<PreviewPresentation showError={showErrorModal} />}
        /> */}
      </Routes>
      {/* <ErrorModal
        show={showModal}
        message={modalMessage}
        onClose={closeModal}
      /> */}
    </>
  )
}