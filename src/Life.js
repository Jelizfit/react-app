function LifeComponent(props) {
    console.log('LifeComponent')
    return (
        <div>LifeComponent             
        <button onClick={() => props.setCount(props.count + 1)}>+</button>
        </div>
    )
}

export default LifeComponent;