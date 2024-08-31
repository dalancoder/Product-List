


 const ProductCard = ({products}) => {
  
  return (
    <div className="cardList">
    {
        products.map(({image, title,price,id})=>
          (
            <div className="card" key={id}>
                <img src={image} alt="" />
                <h3>{price} $</h3>
                <h2>{title}</h2>
            </div>
            )
        
        )
    }
        
    </div>
  )
}

export default ProductCard;