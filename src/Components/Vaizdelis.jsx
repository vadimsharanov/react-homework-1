


function Vaizdelis(props) {
    return (
    

        <div className="vaizdelis" >
           {props.smth}
           <img src={props.img} alt={props.desc} />
           <span>{props.desc}</span>
        </div>

)
}

export default Vaizdelis