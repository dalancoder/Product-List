

const Header = ({categories, handleThing})=>{
   
 
    return(
        <div className="header">
            <h1 >Products List</h1>
            <div className="btnDiv">
{
    categories.map((item,index)=>(
        <button onClick={()=>handleThing(item)}  key={index}>{item}</button>
    ))

}
            </div>
        </div>
    )
}
export default Header;