import '../style/PlantItem.css'
function PlantItem({cover,name,price}){
return(
<li className='jh-plant-item'>
    <span className='jh-plant-item-price'>{price}€</span>
    <img className='jh-plant-item-cover' src={cover} alt={`${name}cover`}/>
    {name}
</li>
);
}
export default PlantItem;