const withLabel = (InputComponent) => {
    return (props)=> {
        //console.log(props);
        return (
            <div className="relative">
                <label className="absolute p-2 m-2 bg-black text-white">promoted</label>
                <InputComponent {...props}/>
            </div>
        )
    }
}

//const PromotedRestaurantCard = withLabel(RestaurantCard);
export default withLabel;