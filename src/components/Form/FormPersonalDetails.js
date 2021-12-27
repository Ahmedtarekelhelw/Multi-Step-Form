import React from 'react'
import {Form , Input} from "./style"
import {Header,Button} from "../MainStyle"

export default function FormPersonalDetails({occupation , address ,work,nextStep , prevStep , inputfun }) {
    return (
        <>
            <Header>
                    <h2>Enter Personal Details</h2>
            </Header>
            <Form>
                <Input type="text" value={occupation} name="occupation" placeholder='Occupation' onChange={inputfun}/>
                <Input type="text" value={address} name='address' placeholder='Address' onChange={inputfun}/>
                <Input type="text" value={work} name='work' placeholder='Work' onChange={inputfun}/>
                <Button type='button' onClick={nextStep}>Continue</Button>
                <Button type='button' onClick={prevStep}>Back</Button>
            </Form>
        </>
    )
}
