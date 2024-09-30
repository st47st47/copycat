import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerleft">
                <h6>Country/region</h6>
                <select>
                    <option>United States | USD $</option>
                    <option>Malaysia | MYR R</option>
                </select>
                <div className="copyright">
                    <h6>© 2024, </h6>
                    <a href=''><h6>SSH</h6></a>
                </div>
            </div>
            <div className="footerright">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" width='32px' height='24px' />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" width='32px' height='24px' />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" width='32px' height='24px' />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width='32px' height='24px' />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" width='32px' height='24px' />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" width='32px' height='24px' />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" width='32px' height='24px' />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width='32px' height='24px' />
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" width='32px' height='24px' />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" width='32px' height='24px' />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" width='32px' height='24px' />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" width='32px' height='24px' />
            </div>
        </div>
    )
}

export default Footer