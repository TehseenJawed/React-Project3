import React, {useContext, useState} from "react";
import {Button} from "react-bootstrap";
import Item1_API from "./../json/hoodies.json";
import {TransactionContext} from "./../service/Context";

export default function AllItems() {
  // console.log(Item1_API);
  
  let {transactions, Add_to_cart} = useContext(TransactionContext)
  let [cost, setcost] = useState(0);
  let [name, setname] = useState("");
  let [image, setimage] = useState("");

  const handleCart =(event) =>{
    event.preventDefault();
    console.log(cost, " " ,name, " " ,image);
    for(let a=0; a==Number(transactions.length)-1;a++){
    if(name === transactions[a].name){
      alert("This Product is already in the Cart");
      return false;
    }}
    Add_to_cart({
      img: image,
      name: name,
      price: cost
    });
    setcost(0);
    setname("");
    setimage("");
  }
  console.log(transactions.length)
  return (
    <div className="setItems">
        <hr />
      <form onSubmit={handleCart}>
    {Object.entries(Item1_API).map(([slug, {id,price,name,images}]) => (
    
    <div className="container" key={slug} xs lg xl="3">
      <div className='image'>
        <img className="img" src={images} alt="Image Not Found" />
        <div className="amount">{price}</div>
    <label className="txts mt-3 mb-3">{name}</label>
      </div>
      <Button type="submit" className="btn-cart" onClick={()=>{setcost(price); setname(name); setimage(images)}} variant="primary" >add to cart</Button>
    </div>
    
  
    ))}
   </form>
    </div>
  );
}
