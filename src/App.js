import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Student from './Components/Student/Student';
import StudentCreate from './Components/Student/StudentCreate/StudentCreate';
import StudentSingle from './Components/Student/StudentSingle/StudentSingle';


function App() {
  return (
    <>

    <BrowserRouter>

    <Header></Header>

      <Routes>
        <Route path='/students' element={ <Student></Student> }/>
        <Route path='/student/create' element={ <StudentCreate></StudentCreate> }/>
        <Route path='/student/single/1' element={ <StudentSingle></StudentSingle> }/>
      </Routes>
    
    </BrowserRouter>
      
      
      

    </>
  );
}

export default App;
