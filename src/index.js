import React, { useState } from "react"
import ReactDOM from "react-dom"


const App = () => {

    const [count, setCount] = useState(0)

    // 数字が増える
    const upClick = () => {
        setCount(count + 1)
    }

    // 数字が減る
    const downClick = () => {
        setCount(count - 1)
    }

    return (
        <>
            <h1>count:{count}</h1>

            <button
                type="button"
                onClick={upClick}
            >
                増える
            </button>

            <button
                type="button"
                onClick={downClick}
            >
                減る
            </button>
        </>
    )
}

ReactDOM.render(<App />,
    document.getElementById("root")
)




