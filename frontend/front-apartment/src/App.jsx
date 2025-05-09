import { useState } from 'react'
import './App.css'
import FirstPage from './components/firstPage/firstPage';
import ApartmentList from './components/ApartmentList/ApartmentList';
import ListSearch from './components/ListSearch/ListSearch';

function App() {


  return (
    <>
     <FirstPage />
     <ApartmentList />
     <ListSearch />
    </>
  )
}

export default App
