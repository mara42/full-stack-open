import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {
    return (
        <div>
            <p> Hello {props.name}, you are {props.age} old</p>
        </div>
    )
}

const Footer = () => {
    return (
        <div>greeting app created by <a href="https://github.com/mluukkai">mluukkai</a></div>
    )
}

const Appi = () => {
    const nam = 'wad'
    const gammal = '-2.3'
    return (
        <div>
            <h1>
                Greetings
            </h1>
            <Hello name="Mara" age={2}/>
            <Hello name={nam} age={gammal}/>
            <Footer />
        </div>
    )
}

ReactDOM.render(<Appi />, document.getElementById('root'))