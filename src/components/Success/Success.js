import React from 'react'
import {Header} from "../MainStyle"
import {Suc , H1 , P} from "./style"

export default function Success() {
    return (
        <>
            <Header>
                <h2>Success</h2>
            </Header>
            <Suc>
                <H1>Thank You For Your Submission</H1>
                <P>You will get an email with further instructions.</P>
            </Suc>
        </>
    )
}
