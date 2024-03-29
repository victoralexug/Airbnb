

export default function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className="card">   
            { badgeText && <div className="card-badge">{badgeText}</div>}
            <img alt='image' src={`../images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img alt='star image' src="https://png.pngtree.com/png-vector/20201202/ourmid/pngtree-christmas-red-star-png-png-image_2500005.jpg" className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}