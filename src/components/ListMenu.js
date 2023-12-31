import React, { useState } from 'react'
import styled from 'styled-components'

const Menu = styled.li`
    height: 2rem;
    display: flex;
    align-items: center;
    padding-left: 0.3rem;
    position: relative;
    color: ${props => props.theme.grey};
    cursor: pointer;
    &:not(:last-child){
        margin-bottom: 0.5rem;
    }
    &:nth-child(2){
        background: ${props => props.theme.primary};
        color: ${props => props.theme.light};
    }
`

const ListMenu = () => {
    const [selectedCategory, setSelectedCategory] = useState(null)

    const [menu] = useState(['Favourites', 'Foods', 'Drinks', 'Snacks'])

    const handleMenuClick = (category) => {
        setSelectedCategory(category);
    }
    
    return (
        <ul>
            {menu.map((item, index) =>
                <Menu
                    key={index}
                    onClick={() => handleMenuClick(item.toLowerCase())}
                    className={selectedCategory === item.toLowerCase() ? 'active' : ''}
                >
                    {item}
                </Menu>
            )}
        </ul>
    )
}

export default ListMenu