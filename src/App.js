import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import ProfileTemplate from './pages/ProfileTemplate';
const PostTemplate = React.lazy(() => import("./pages/PostTemplate"));

function App() {

  return (
    <div className='flex justify-center'>
      <div className='App w-full max-w-[500px]'>
      {/* <BrowserRouter basename="/rpn"> */}
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
      {/* </BrowserRouter> */}
    </div>
    </div>
  );
}

export default App;
