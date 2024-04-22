// import React, { useState } from 'react'

// function Product() {
//     const [name, setName] = useState("");
//     const [description, setdescription] = useState("");
//     const [price, setPrice] = useState(0);
//     const [imageUrl, setImageUrl] = useState("");
//     const [error, setError] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const addProduct = {name, description, price, imageUrl};

//         const response = await fetch("http://localhost:3000/products", {
//             method: "POST",
//             body: JSON.stringify(addProduct),
//             headers : {
//                 "Content-Type" : "application/json",
//             },
//         })
//         const result = await response.json();

//         if(!response.ok) {
//             console.log(result.error);
//             setError(result.error);
//         }
//         if(response.ok) {
//             console.log(result);
//             setError("");
//             setName("");
//             setdescription("");
//             setPrice(0);
//             setImageUrl("");
//         }
//     }

//   return (
//     <div>
//         <form onSubmit={handleSubmit} encType='multipart/form-data'>
//             Product Name : <input className='border-2 border-black' type="text" placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)}/> <br /> <br />
//             Product Description : <textarea className='border-2 border-black' type="text" placeholder='Product Description' value={description} onChange={(e) => setdescription(e.target.value)}/> <br /> <br />
//             Product Pirce : <input className='border-2 border-black' type="Number" placeholder='Product Price' value={price} onChange={(e) => setPrice(e.target.value)}/> <br /> <br />
//             Product Image-url : <input className='border-2 border-black' type="file" placeholder='Product Name'  onChange={(e) => setImageUrl(e.target.files[0])}/> <br />  <br />

//             <button className='bg-slate-300' type='Submit'>Submit</button>
//         </form>
       
//     </div>
//   )
// }

// export default Product

import React, { useState } from 'react';

function Product() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock_quantity, setStock_quantity] = useState(0);
    const [image, setImage] = useState(null); // Store file object instead of URL
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('stock_quantity', stock_quantity);
        formData.append('image', image); // Append file to FormData

        try {
            const response = await fetch('http://localhost:3000/products', {
                method: 'POST',
                body: formData,
            });
            const result = await response.json();

            if (!response.ok) {
                console.log(result.error);
                setError(result.error);
            } else {
                console.log(result);
                setError('');
                setName('');
                setDescription('');
                setPrice(0);
                setImage(null);
            }
        } catch (error) {
            console.error('Error uploading product:', error);
            setError('Failed to upload product');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Product Name : <input className='border-2 border-black' type="text" placeholder='Product Name' value={name} onChange={(e) => setName(e.target.value)}/> <br /> <br />
                Product Description : <textarea className='border-2 border-black' placeholder='Product Description' value={description} onChange={(e) => setDescription(e.target.value)}/> <br /> <br />
                Product Price : <input className='border-2 border-black' type="number" placeholder='Product Price' value={price} onChange={(e) => setPrice(e.target.value)}/> <br /> <br />
                Product Stock : <input className='border-2 border-black' type="number" placeholder='Product Price' value={stock_quantity} onChange={(e) => setStock_quantity(e.target.value)}/> <br /> <br />
                Product Image : <input className='border-2 border-black' type="file" onChange={(e) => setImage(e.target.files[0])}/> <br /> <br />

                <button className='bg-slate-300' type='submit'>Submit</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Product;
