import { useEffect, useState } from "react"
import Display from "./Display"
import '../css/Container.css'

const Container = () => {
    const [data, setData] = useState(null)
    const onChange = async (input_data) => {
        let display_div = document.getElementsByClassName("display-box")
        const name = document.getElementsByClassName("name")
        const city = document.getElementsByClassName("city")

        for (var i = 0; i <= display_div.length - 1; i++) {
            if (!(name[i].textContent.includes(input_data)) && !(city[i].textContent.includes(input_data))) {
                display_div[i].classList.add("hide")
            }
            if (name[i].textContent.includes(input_data) || city[i].textContent.includes(input_data)) {
                display_div[i].classList.remove("hide")
            }

        }
    }
    useEffect(() => {
        const takeData = async () => {
            const response = await fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
            let json = await response.json()
            setData(json)
        }
        takeData()
    }, [])
    return (
        <div className="container">
            {data && <div className="inputs-div"><input className="input-search" onChange={(e) => onChange(e.target.value)} type="text" placeholder="   Search..." /></div>}
            {data && <div className="centered-container">
                {data && data.map((item) => {
                    return (
                        <Display item={item} />
                    )
                })}
            </div>}

            {!data && <h1>Loading...</h1>}
        </div>

    )
}

export default Container