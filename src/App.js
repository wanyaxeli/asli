import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {createContext} from 'react'
import Links from './components/Links';
import Home from './pages/Home';
import Popular from './components/Popular';
import Design from './components/Design';
export let mycontext=createContext(null)
function App() {
  const data=[{id:1,image:'/images/pic1.jpg',price:1200,designer:'Chimzi',gender:'woman',type:'Ankara dress',seller:'Jonh Kaveke',worn:'African print'},
  {id:2,image:'/images/pic2.jpg',price:1200,designer:'Chimzi',gender:'woman',type:'Ankara dress',seller:'Jonh Kaveke',worn:'Conteporary wear'},
  {id:3,image:'/images/pic3.jpg',price:1200,designer:'Chimzi',gender:'men',type:'Ankara dress',seller:'Jonh Kaveke',worn:'Oficial wear'},
  {id:4,image:'/images/pic4.jpg',price:1200,designer:'Chimzi',gender:'kids',type:'Ankara dress',seller:'Jonh Kaveke',worn:'Gown'}]
  return (
    <mycontext.Provider value={data} className="App">
    <Header/>
     <Links/>
    </mycontext.Provider>
  );
}

export default App;
