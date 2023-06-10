import React from "react";
import './App.css';
import { BrowserRouter, useParams, Route, Routes } from "react-router-dom";

// pages
import ProfileTemplate from './pages/ProfileTemplate';
const PostTemplate = React.lazy(() => import("./pages/PostTemplate"));

function App() {
  const { id } = useParams();

  return (
    <div className='flex justify-center'>
      <div className='App w-full max-w-[500px]'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<ProfileTemplate />}/>
          <Route 
            path="/post" 
            element={
              <React.Suspense fallback={<div className="relative mt-80">loading...</div>}>
                <PostTemplate />
              </React.Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
