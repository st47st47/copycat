import ProductPreview from './ProductPreview'
import './carousel.css'

const Carousel = ({ data, pseud, incdec, addtocart, openmodal }) => {
    return (
        <div className="carousel">
            {data.map((each) => {
                return <div className='eachitem'>
                    <img src={each.picture} />
                    <p>{each.prodname}</p>
                    <h6>shshop</h6>
                    <p>From ${each.prodprice} USD</p>
                    <button onClick={() => { openmodal(each.prodid) }}>Choose options</button>
                    <dialog id={each.prodid}>
                        <ProductPreview databit1={each} databit2={pseud} func1={incdec} func2={addtocart} />
                    </dialog>
                </div>
            })}
        </div >
    )
}

export default Carousel