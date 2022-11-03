import logo from './logo.svg';
import './App.css';

import { useState } from "react"


function App() {


  // const [ v , f ] = useState( initialValue )
  const [ classAttendanceNumber , setClassAttendanceNumber ] = useState( 0 )
  const [ studentsInClass , setStudentInClass ] = useState( [] )

  const [ newStudent , setNewStudent ] = useState(  { name: "" }  )
  // ** Could Be Use in Relation to a Form/onSubmit **


  
  function addStudentToClass(){

    setStudentInClass(  [ ...studentsInClass , newStudent ]  )

  }


  return (
    <div className="App">

        <img src={logo} className="App-logo" alt="logo" />
        {

          studentsInClass.map( ()=>{} )

        }
        
    
    </div>
  );
}

export default App;






/*


    // const [ v , f ] = useState( initialValue )
    const [ classAttendanceNumber , setClassAttendanceNumber ] = useState( 0 )
    const [ studentsInClass , setStudentInClass ] = useState( [] )
    // []  ->  [ {name: Ryan} ] ->  [ { name: "Ryan" } , { name: "Keila"} ]

    // [ {} ]
    // [ {},{} ]
    // [ {},{},{} ]

    function handlingAttendanceNumber(){

      let newNumber = classAttendanceNumber + 1
      setClassAttendanceNumber( newNumber )

    }

    function addStudentToClass(){

      setStudentInClass(  [ ...studentsInClass , { name: "Keila" } ]  )
      // setStudentInClass( {} {} {} )
      // setStudentInClass(  [ {} {} {} ]  )
      // setStudentInClass(  [ {} {} {} , {} ]  )

    }



*/