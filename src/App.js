import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import Header from './componenets/Header';
import Sidebar from './componenets/Sidebar';
import Taskdetails from './componenets/Taskdetails';
import { AppContainer, TitleApp, Container } from './componenets/styledcomponenets/';

function App() {
  return (
    <Provider store={store}>
      <AppContainer>
        <TitleApp>Todo App - React Redux</TitleApp>
        <Header />
        <Container>
          <Sidebar />
          <Taskdetails />
        </Container>
      </AppContainer>
    </Provider>
  );
}

export default App;
