import React from 'react'
import {Header,Button} from "../MainStyle"
import {Info , UL , LI ,Strong} from "./style"

export default function Confirm({nextStep , prevStep, values}) {
    return (
        <>
            <Header>
                <h2>Confirm</h2>
            </Header>
            <Info>
                <UL>
                    <LI>
                        <Strong>first Name</Strong>
                        {values.firstName}
                    </LI>
                    <LI>
                        <Strong>last Name</Strong>
                        {values.lastName}
                    </LI>
                    <LI>
                        <Strong>email</Strong>
                        {values.email}
                    </LI>
                    <LI>
                        <Strong>occupation</Strong>
                        {values.occupation}
                    </LI>
                    <LI>
                        <Strong>address</Strong>
                        {values.address}
                    </LI>
                    <LI>
                        <Strong>work</Strong>
                        {values.work}
                    </LI>
                </UL>
                <Button type='submit' onClick={nextStep}>Confirm & Continue</Button>
                <Button type='button' onClick={prevStep}>Back</Button>
            </Info>
        </>
    )
}
