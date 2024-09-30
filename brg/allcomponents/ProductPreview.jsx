import './pp.css'

const ProductPreview = ({ databit1, databit2, func1, func2 }) => {

    function closemodal(arg) {
        const modalinfocus = document.getElementById(arg)
        modalinfocus.close()
    }

    return (
        <div className="mpreview">
            <div className="mleft">
                <img src={databit1.picture} alt="" />
            </div>
            <div className="mright">
                <button id='close' onClick={() => { closemodal(databit1.prodid) }}>x</button>
                <h1>{databit1.prodname}</h1>
                <h3>${databit1.prodprice} USD</h3>
                <h5>Size</h5>
                <div className="mbuttons">
                    {databit1.prodsizes.map((each) => {
                        return <button>{each}</button>
                    })}
                </div>
                <h5>Quantity</h5>
                <div className="mquanititer">
                    <button onClick={() => { func1('-') }} disabled={databit2 === 0} style={{ border: 'none', boxShadow: 'none', transition: 'none', transform: 'none' }}>-</button>
                    <span>{databit2}</span>
                    <button onClick={() => { func1('+') }} style={{ border: 'none', boxShadow: 'none', transition: 'none', transform: 'none' }}>+</button>
                </div>
                <br />
                <button className='mcarter' onClick={() => { func2(databit1.prodname) }}>Add to Cart</button><br />
                <a href=""><h5>More payment options</h5></a>
            </div>
        </div>
    )
}

export default ProductPreview