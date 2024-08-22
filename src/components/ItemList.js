import { MENU_ITEM_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({itemCards}) => {
    //console.log(itemCards)
    const dispatch = useDispatch();
    const handleAddItems = (item)=> {
        dispatch(addItems(item))
    }
    return (
            itemCards.map((itemCard)=> {
        return (
            <div data-testid="foodItem" className="border-b-2 flex" key={itemCard.card.info.id}>
                <div className="w-8/12">
                    <p>{itemCard.card.info.name}</p>
                    <p>{itemCard.card.info.description}</p>
                    <p>{itemCard.card.info.defaultPrice? itemCard.card.info.defaultPrice/100: itemCard.card.info.price/100 }</p>
                </div>
                <div className="relative flex justify-center">
                    <button className="px-4 py-2 rounded-md absolute z-10 bg-black text-white"
                    onClick={()=> handleAddItems(itemCard)} >Add +</button>
                    <img src={MENU_ITEM_IMG_URL + itemCard.card.info.imageId}/>
                </div>
            </div>
        )
    })
    )
}

export default ItemList;