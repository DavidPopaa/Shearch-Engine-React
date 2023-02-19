import "../css/Display.css"

const Display = ({ item }) => {

    return (
        <div className="display-box">
            <div className="name">{item.name}</div>
            <div className="city">-{item.city}-</div>
        </div>
    )
}

export default Display