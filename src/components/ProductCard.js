import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addCart } from '../store/actions/product'

const Card = styled.div`
    width: 17%;
    height: 12rem;
    cursor: pointer;
`

const CardImg = styled.img`
    width: 100%;
    height: 50%;
`

const NamePrice = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductCard = ({ item }) => {

    const dispatch = useDispatch()

    const cartItems = useSelector((state) => state.product.carts);

    const addToCart = id => {
        const itemInCart = cartItems.find((item) => item.id === id)
        if (itemInCart) {
            // Display a warning that the item is already in the cart
            alert('This item is already in your cart!');
        } else {
            // Dispatch the addCart action if the item is not in the cart
            dispatch(addCart(id));
        }
    }

    const [selectedCategory, setSelectedCategory] = useState(null)

    const filteredProducts = selectedCategory
        ? item.category.toLowerCase() === selectedCategory
        : true;

    return (
        <>
            {filteredProducts && (
                <Card onClick={() => addToCart(item.id)}>
                    <CardImg src={item.image} alt={item.name} />
                    <NamePrice>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                    </NamePrice>
                </Card>
            )}
        </>
    )
}

export default ProductCard