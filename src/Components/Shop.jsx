import React from 'react'
import Card from './Card'
import { data} from '../Assets/Library/stock'
import './Shop.css'

function Shop() {
    return (
        <div className='allcategories'>
            <div className='cardItems'>
        <h1>Men</h1>
        <div className="men">
          {
            data.filter(stock=>stock.category==='men').map(stock=>(
                <Card image = {stock.image} price ={stock.price} key={stock.id} name={stock.product}/>
            ))
        }
        </div>
        <button type='submit' className='submit'>Browse Category</button>
        <h1>Kitenge fabric</h1>
        <div className="kitenge">
          {
            data.filter(stock=>stock.category==='kitenge').map(stock=>(
                <Card image = {stock.image} price ={stock.price} key={stock.id} name={stock.product}/>
            ))
        }
        </div>
        <button type='submit' className='submit'>Browse Category</button>
        <h1>Women</h1>
        <div className="women">
          {
            data.filter(stock=>stock.category==='women').map(stock=>(
                <Card image = {stock.image} price ={stock.price} key={stock.id} name={stock.product}/>
            ))
        }
        </div>
        <button type='submit' className='submit'>Browse Category</button>
        <h1>Kids' Section</h1>
        <div className="kids">
          {
            data.filter(stock=>stock.category==='boys').map(stock=>(
                <Card image = {stock.image} price ={stock.price} key={stock.id} name={stock.product}/>
            ))
            }
            {
            data.filter(stock=>stock.category==='girls').map(stock=>(
                <Card image = {stock.image} price ={stock.price} key={stock.id} name={stock.product}/>
            ))
        }
        </div>
        </div>
        <button type='submit' className='submit'>Browse Category</button>
        </div>
    )
}

export default Shop
