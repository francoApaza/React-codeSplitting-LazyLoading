// import React from 'react';
// import { useState, useEffect } from 'react';
// // import Produto from '../Components/Produto';
// // import { Container, Row } from 'react-bootstrap';

// const Mudar = () => {

//   const [prods, setProds] = useState([]);

//   useEffect (async () => {
//     const res = await fetch('http://localhost/backendnat/api.php');
//     setProds(await res.json())
//   }, [])


//   //create array  with category and id 
//   const category = prods.map(category => {
//     const container = { };
//     container ['id'] = category.id_categorys; //get id_category
//     container ['name'] = category.name_categorys; // get name_category
//     return container;
//   });

//   //removing duplicates values from container
//   const category_simple = category.map(JSON.stringify).reverse()
//   .filter(function(item, index, arr ){ return arr.indexOf(item, index + 1) === -1; })
//   .reverse().map(JSON.parse);







//     return(
//       <>
//       {
//         category_simple.map ( category => {
//           return (
//             <button key={category.idproduto} className="dropdown-item list-group-item d-flex justify-content-between aling-item" id={category.idproduto} type="button">
//               {category.descricao}
//               {/* <span className="badge badge-success badge-pill">{counts[category.name]}</span> */}
//             </button>
//           )
//         })
//       }



//         {prods.map(item => {
//           return(
//             <>
//             <div  key={item.idproduto} className="row">

//               <div id={item.idproduto} className="col-5">
//                 <img src={item.imagem} className="card-img-top img-thumbnail" />
//                 <p>{item.descricao}</p>
//                 <p>{item.categoria}</p>
//                 <p>{item.preco}</p>
                
//               </div>
              
//             </div>
//             </>
//           )
//         })

//         }
//       </>
//     )
// }



// export default Mudar;

