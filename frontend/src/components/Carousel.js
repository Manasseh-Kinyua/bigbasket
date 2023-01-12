import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

function ProductCarousel() {

    const dispatch = useDispatch()

    const topProductList = useSelector(state => state.topProductList)
    const {error, loading, products} = topProductList

    useEffect(() => {
        dispatch(listTopProducts())
    }, [dispatch])

  return ( loading ? <Loader/>
            : error ?
            <Message severity='error' error={error}/>
            : (
                <Carousel
                    pause='hover'
                    className='bg'
                    style={{height:'60vh'}}
                    >
                        {products.map(product => (
                            <Carousel.Item key={product.id}>
                                <Link to={`product/${product.id}`}>
                                    <Image src={product.image} alt={product.name} fluid />
                                    <Carousel.Caption className='carousel.caption'>
                                        <h4>{product.name} (${product.price})</h4>
                                    </Carousel.Caption>
                                </Link>
                            </Carousel.Item>
                        ))}
                    </Carousel>
            )
  )
}

export default ProductCarousel
