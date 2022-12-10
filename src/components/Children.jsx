import logo from '../logo.svg'

const Children = (props) => {
return(
    <div>
        <hr/> 
        {/* обращаемся к props'aм из другого файла */}
        <h2>{props.text}</h2> 
        <hr/>
         <img src={logo} style={ {width: props.width } } />
    </div>
)
}
export default Children