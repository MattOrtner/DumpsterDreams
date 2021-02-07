import React, { useReducer, useEffect, useState } from 'react'
import './App.css';
import axios from 'axios'

const editItem = (item) => {
  //item form is popped up so she can make edits to it
  console.log(item)
}

function App() {
  const [createItem, setCreateItem] = useReducer((state, newState) => ({ ...state, ...newState }),
    {
      name: '',
      price: '',
    }
  );
  const [products, setProducts] = useState([])

  useEffect(() => {
    // (async () => {        
    //   const response = await axios('/products')
    //   console.log(response)
    // })()
    axios({
      url: '/products'
    }).then((response) => {
      setProducts(response.data)
    })
  }, [])


  const deleteItem = (item) => {
    if (window.confirm('Are you sure you want to delete?')) {
      axios({
        url: `/products/${item.id}`,
        method: 'delete'
      }).then(({ data: { success} }) => {
        if (success) {
          setProducts(products.filter((product) => product.id !== item.id))
        } else {
          alert('DID NOT WORK!')
        }
      })
    }
  }

  const handleChange = (evt) => {
    const name = evt.target.name
    const newValue = evt.target.value
    setCreateItem({[name]: newValue})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert('You have submitted the form.')
    axios({
      url: '/products',
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        name: createItem.name,
        price: createItem.price
      }
    }).then((response) => {
      setProducts([...products, response.data])
      console.log(response)
    })
    .catch((error) => console.error(error))
  }


  return (
    <div className="App">
      <header className="App-header">
        ADMIN
      </header>
      <br/>
      <div className='create-item'>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label>
              <p>Name:</p>
              <input type='text' name='name' value={createItem.name} onChange={handleChange}></input>
            </label>
            <label>
              <p>Price: </p>
              <input type='number' name='price' value={createItem.price} onChange={handleChange}></input>
            </label>
          </fieldset>
          <button type='submit'>Submit</button>
        </form>
      </div>

      <div className='inventory'>
        {products.map((item) => {
          return (
            <div key = {item.id} className = 'item-card' >
              <img alt={item.name} src={item.url}></img>
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <button className='btn' onClick={() => editItem(item)}>EDIT</button>
              <button className='btn' onClick={() => deleteItem(item)}>DELETE</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
