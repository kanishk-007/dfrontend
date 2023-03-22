import './App.css';
import Navigator from './components/Navigator';
import Home from './components/Home';
import FetchData from './components/FetchData'
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import React, { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorBoundary';
import Login from './components/Login';
import PrivateRouter from './components/PrivateRouter';
import SignUp from './components/SignUp';

const LazyAbout = lazy(() => import('./components/About'))
function App() {
  return (
    <div>
      <Navigator />
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => { }}>
        <Suspense fallback={<div>Pelase wait....About page is loading.....</div>}>
          <Routes>
            <Route element={<PrivateRouter />} >
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<LazyAbout />} />
              <Route path="/post" element={<FetchData />} />
              <Route path="/logout" element={<Login />} />
            </Route >
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
