import { useEffect, useState } from 'react'
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <>
  <div className='h-screen bg-[linear-gradient(#ffd55c_50%,_#5a95ff_50%)] flex justify-center items-center'>
   <div className='bg-[rgb(241,247,255)] rounded-[7px] p-[20px] [box-shadow:4px_5px_13px_rgba(0,0,0,0.3)]'>
    <Header/>
    <Body/>
   </div>
  </div>
    </>
  )
}

export default App;
