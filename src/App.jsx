// import { useState } from 'react'
import Grid from '@mui/material/Grid';
import Dashboard from './pages/Dashboard/Dashboard';


import './App.css'
import SideNav from './components/SideNav/SideNav';

function App() {

  return (
    <>
    <div className="main-section background">
      <div className="top"></div>
      <div className="bottom"></div>
    </div>

    <div className="main-section dashboard">
      <Grid container>
        <Grid item xs={2.5}>
          <SideNav/>
        </Grid>
        <Grid item xs={9.5}>
          <Dashboard/>
          </Grid>
      </Grid>
    </div>
    </>
  )
}

export default App
