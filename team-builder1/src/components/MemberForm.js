import React from 'react'

const MemberForm = (props) =>{
    const {values, update, submit} = props

    const onChange = (event) =>{
        const {name, value} = event.target
        update(name, value)
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        submit()
    }
    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group-inputs'>
                <label>
                    Name{' '}
                    <input type='text' name='name' onChange={onChange} defaultValue={values.name}
                    placeholder='type name here'
                    maxLength='30'/>
                </label>

                <label> 
                    Email{' '}
                    <input type='text' name='email' onChange={onChange} defaultValue={values.email}
                    placeholder='type email here'
                    maxLength='50'/>
                </label>
                <label> Role {' '}
                    <select name='role' value={values.role} onChange={onChange}>
                    <option value=''>---Select your Role---</option>
                    <option value='Front End Developer'>Front End Developer</option>
                    <option value='Back End Developer'>Back End Developer</option>
                    <option value='Engineer'>Engineer</option>
                    <option value='UX/UI'>UX/UI</option>
                </select>
                </label>
                <div className='submit-btn'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default MemberForm