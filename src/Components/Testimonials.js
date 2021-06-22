import React from 'react'

const Testimonials = () => {
    const testmon = [
        {
            id:1,
            testname: 'Someone famous',
            testpic: 'Images/testi1.jpg'
        },
        {
            id:2,
            testname: 'Someone famous',
            testpic: 'Images/testi2.jpg'
        },
        {
            id:3,
            testname: 'Someone famous',
            testpic: 'Images/testi3.jpg'
        }
    ]

    return (
        <div className="Testimonials">
            <div className="heading">
                <h2 className="title">They <span>S</span>aid About Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="Test-Card">
                {
                    testmon.map((testp) => {
                        const { id , testname, testpic } = testp;
                        return (
                            <div className="Box" key = {id}>

                                <div className="imgBx">
                                    <img src={testpic} />
                                </div>
                                <div className="Text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                                    </p>
                                    <h3>{testname}</h3>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Testimonials
