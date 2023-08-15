import './App.css'

const Section = (props) => {
    console.log(props.images)
    return (
        <div>
            <h1>{props.category}</h1>
            <nav>
                <img src={props.images} alt="" />
            </nav>
        </div>
    ) 
}

export default Section;