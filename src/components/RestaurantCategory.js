import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowItems}) => {
    const accordianHandler = () => {
        setShowItems();//setCollapse(!collapse);
    }
    return (
        <div data-testid="itemCategory" className="mx-4 my-2 px-4 py-2" key={data.title}>
            <div className="border-2 flex justify-between font-bold m-auto text-lg" onClick={()=> {
                    accordianHandler();
                }}>
                    <div>
                        <span>{data.title}</span>
                        <span>({data.itemCards.length})</span>
                    </div>
                    <div>
                        <span>⬇️</span>
                    </div>
                </div>
            {showItems && <ItemList itemCards={data.itemCards}/>}
        </div>
    )
}

export default RestaurantCategory;