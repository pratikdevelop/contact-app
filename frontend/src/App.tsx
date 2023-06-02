
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import SideBar from './component/SideBar';

const App: React.FC = () => {
  const  Contacts = React.lazy(()=>import('./component/Contacts'));
  const  AddContact = React.lazy(()=>import('./component/AddContact'));
  return (
    <div className='flex flex-col relative w-full overflow-x-hidden overflow-y-auto h-[100vh]'>
      <Header/>
      <div className=" relative flex w-full h-[100vh]">
      <SideBar/>
      <Suspense fallback = { <div className='text-center font-bold text-3xl '> Please Wait... </div> } >
      <Routes>
        <Route path="" element={<Contacts/>} />
        <Route path="/add-contact" element={<AddContact/>} />
      </Routes>
      </Suspense>
      </div>
    </div>
  )
}

export default App