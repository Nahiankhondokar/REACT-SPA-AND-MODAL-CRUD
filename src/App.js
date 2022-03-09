import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Student from './Components/Student/Student';
import StudentCreate from './Components/Student/StudentCreate/StudentCreate';
import StudentEdit from './Components/Student/StudentEdit/StudentEdit';
import StudentSingle from './Components/Student/StudentSingle/StudentSingle';


function App() {
  return (
    <>

    

    <Header></Header>

      <Routes>
        <Route path='/home' element={ <Home></Home> }/>
        <Route path='/students' element={ <Student></Student> }/>
        <Route path='/student/create' element={ <StudentCreate></StudentCreate> }/>
        <Route path='/student/view/:id' element={ <StudentSingle></StudentSingle> }/>
        <Route path='/student/edit/:id' element={ <StudentEdit></StudentEdit> }/>
        <Route path='/student/delete/:id' element={ <StudentSingle></StudentSingle> }/>
      </Routes>
    
      
      
      

    </>
  );
}

export default App;
