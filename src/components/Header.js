import React from 'react'
import styled from 'styled-components'

const Head = styled.div`
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #4abad1;
    color: white;
`

const Header = () => {
    return(
        <Head>
            <h1>CASHIER</h1>
        </Head>
    )
}

export default Header