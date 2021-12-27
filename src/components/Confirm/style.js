import styled from "styled-components"


export const Info = styled.div` 
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 30px auto 0;
`
export const UL = styled.ul` 
    width: 100%;
    margin: auto;
    list-style: none;
`
export const LI = styled.li` 
    padding: 12px 0;
    cursor: pointer;
    margin-bottom: 10px;
    transition: 0.3s;
    color: #6c757d;
    &:hover {
        background-color: #ddd;
    }
`

export const Strong = styled.strong` 
    display: block;
    text-transform: capitalize;
    margin-bottom: 6px;
`