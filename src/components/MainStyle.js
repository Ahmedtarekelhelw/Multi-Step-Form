import styled from "styled-components"


export const Header = styled.header`
    background-color: rgb(18, 18, 18);
    color: #fff;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -1px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px;

`
export const Button = styled.button`
    border: none;
    padding: 10px 15px;
    text-transform: uppercase;
    margin-bottom: 15px;
    background-color: #6c757d;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
        background-color: #0b5ed7;
    }
`

