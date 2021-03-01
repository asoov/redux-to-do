import React from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import { TodoOrganizer } from './views/TodoOrganizer/TodoOrganizer';
import { styled } from '@material-ui/core';

const LayoutWrapper = styled('div')({
  width: '100%',
  minHeight: '100vh',
  padding: 0
})

function App() {

  return (
    <LayoutWrapper>
      
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Header />
            <div>This is the Start!</div>
          </Route>
          <Route exact path='/todo'>
            <TodoOrganizer />
          </Route>
        </Switch>
      </BrowserRouter>
    </LayoutWrapper>
  );
}

export default App;
