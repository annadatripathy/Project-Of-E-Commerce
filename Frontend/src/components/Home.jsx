import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import { BsFillCartCheckFill } from 'react-icons/bs';



const Navbar = ({setData,cart}) => {
  // console.log(useLocation())
  const location = useLocation()
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("")

  const filterByCategory = (category)=>{
    const element = items.filter((product)=>product.category === category)
    // console.log(element)
    setData(element)
  }

  const filterByPrice = (price) =>{
    const element = items.filter((product)=>product.price >=price)
    setData(element)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    navigate(`/search/${searchTerm}`)
    setSearchTerm("")
  }


  return (
    <>
    <header className='sticky-top'>
        <div className="nav-bar">
            <Link to={'/'} className="brand">Gadgets</Link>

            <form
            // onClick={handleSubmit} 
            onSubmit={handleSubmit}
             className="search-bar">
                <input 
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}
                type="text"
                 placeholder='Search Products'
                  />
            </form>


            <Link to={'/cart'} className="cart">
            <button type="button" className="btn btn-primary position-relative">
  <BsFillCartCheckFill style={{fontSize:'1.5rem'}} />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
            </Link>
        </div>

        {
          location.pathname == '/' && (
            <div className="nav-bar-wrapper">
            <div className="items">Home {"->"}</div>
            <div 
            onClick={()=>setData(items)}
            className="items">Contact</div>
            <div 
            onClick={()=>filterByCategory('mobiles')}
             className="items">Log in</div>
            <div
            onClick={()=>filterByCategory('laptops')}
    
             className="items"></div>
            <div
            onClick={()=>filterByCategory('tablets')}
    
             className="items"></div>
            <div
            onClick={()=>filterByPrice(29999)}
            className="items">{">="}</div>
            <div
            onClick={()=>filterByPrice(49999)}
            className="items">{">="}</div>
            <div
            onClick={()=>filterByPrice(69999)}
            className="items">{">="}</div>
            <div
            onClick={()=>filterByPrice(89999)}
            className="items">{">="}</div>
            
            </div>
          )
        }

      
    </header>
    </>
  )
}

export default Navbar