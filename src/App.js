import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import NewsItems from './components/NewsItems';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
         <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines</h2>
        <div className='row'>
          <div className='col-md-4'>
            <NewsItems title="mytitle" description="mydesc"/>
          </div>
          <div className='col-md-4'>
            <NewsItems title="mytitle" description="mydesc"/>
          </div>
          <div className='col-md-4'>
            <NewsItems title="mytitle" description="mydesc"/>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-md-4'>
            <NewsItems title="mytitle" description="mydesc"/>
          </div>
          <div className='col-md-4'>
            <NewsItems title="mytitle" description="mydesc"/>
          </div>
          <div className='col-md-4'>
            <NewsItems title="mytitle" description="mydesc"/>
          </div>

        </div>
        <News/>
        
        
      </div>
      </>
     
    )
  }
}
