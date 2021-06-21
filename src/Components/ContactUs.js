import React from 'react'

const ContactUs = () => {
    return (
        <div className="Contact">
            <div className="heading">
                <h3 className="title"><span>C</span>ontact Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>

            <div className="Contact_form">
                <h3>Send Message</h3>
                <div className='InputBox'>
                    <input type="text" placeholder="Name"></input>
                </div>
                <div className='InputBox'>
                    <input type="email" placeholder="Email"></input>
                </div>
                <div className='InputBox'>
                  <textarea placeholder ="Send Message"></textarea>
                </div>
                <div className="InputBox" >
                    <input type="submit" value="Send" className = "btn"/>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
