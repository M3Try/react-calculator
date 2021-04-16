import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    width: 400px;
    margin: 40px auto;
    grid-template-column: repeat(4, 100px);
    grid-template-rows: minmax(120px, auto) repeat(5, 100px);
    box-shadow: 2px 2px 10px #333;
    border-radius: 10px;
`

export const Screen = styled.div`
    grid-column: 1 / -1;
    background-color: rgba(60, 64, 67, 0.75);
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    word-wrap: break-word;
    word-breakL break-all;
    text-align: right;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`