import React , {useState} from 'react'
import FormPersonalDetails from "./FormPersonalDetails"
import Confirm from "../Confirm/Confirm"
import Success from "../Success/Success"
import {Form , Input} from "./style"
import {Header,Button} from "../MainStyle"

export default function FormUserDetails() {
    const[state , setState] = useState({
        step:1,
        firstName:"",
        lastName:"",
        email:"",
        occupation:"",
        address:"",
        work:"",
        err:""
    })

    // let onSubmit = (e) => {
    //     e.preventDefault()  
    //     setState({
    //         ...state
    //     })  
    //     console.log(state)  
    // }

    let nextStep = () => {
        let {step} = state
            setState({
                ...state,
                step:step +1
            })
    }

    let prevStep = () => {
        let {step} = state
        setState({
            ...state,
            step:step -1
        })
    }

    let inputfun = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    
    switch (state.step) {
        case 1:
            return (
                <>             
                <Header>
                    <h2>Enter User Details</h2>
                </Header>
                <Form>
                    <Input type="text" value={state.firstName} name="firstName" placeholder='First Name' onChange={inputfun}/>
                    <Input type="text" value={state.lastName} name="lastName" placeholder='Last Name' onChange={inputfun}/>
                    <Input type="text" value={state.email} name="email"placeholder='Email' onChange={inputfun}/>
                    <Button type='button' onClick={nextStep}>Continue</Button>
                </Form>
                </>
            )
            case 2:
                return (
                    <FormPersonalDetails
                    occupation={state.occupation}
                    address={state.address}
                    work={state.work}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    inputfun={inputfun}
                    />
                )
            case 3:
                let {firstName , lastName, email ,occupation , address , work}=state
                let value = {firstName , lastName, email ,occupation , address , work}
                return (
                    <Confirm 
                    values= {value}
                    nextStep={nextStep}
                    prevStep={prevStep}
                    />
            )
        case 4:
            return (
                <Success />
            )
        default:
            break
            }
}

