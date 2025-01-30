import React from 'react'

function CreateProduct() {
  return (
    <div className='align-middle '>
        <h1 className='text-4xl text-center text-teal-500 font-mono font-bold'>CreateProduct</h1>
        {/* <div className='flex justify-center'> */}
        <form className='h-3/4 w-3 text-center /6 bg-black '>
        <label className='text-teal-600'>Product Name</label>
            <input type="text" className='text-teal-600' name="Name" id="Name" />
        <label >Product Price</label>
            <input type="number" className='text-teal-600' name="Price" id="price" />
        <label >Product Image</label>
            <input type="text" name="Image" id="Image" />
            <button type='submit'>Add Product</button>
        </form>
        </div>
    // </div>
  )
}

export default CreateProduct