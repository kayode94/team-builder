import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import Member from './components/Member'
import MemberForm from './components/MemberForm'
// console.log(axios)

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}


function App() {
  const [members, setMembers] = useState([])

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) =>{
    setFormValues({...formValues, [inputName]: inputValue,})
  }

  const submitForm = () =>{
      let newMember ={
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        role: formValues.role,
      }
      if(!newMember.name || !newMember.email || !newMember.role) {
        return
      }
      axios.post('fakeapi.com', newMember)
      .then((response)=>{
        setMembers([...members, response.data])
        setFormValues(initialFormValues)
      })
      .catch(error =>{
        console.log(error)
      })
  }
  useEffect(()=>{
    axios.get('fakeapi.com')
    .then(response=>{
      setMembers(response.data)
    })
  },[])
  return (
    <div className= 'container'>
      <h1>My Team Builder App</h1>
    <MemberForm 
    values={formValues} 
    update={updateForm} 
    submit={submitForm}
    />

    {members.map((member)=>{
      return <Member key={member.id} details={member}/>
    })}
    </div>
    
    
  );
}

export default App;
