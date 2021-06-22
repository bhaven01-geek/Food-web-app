import React from 'react'

const Food_Experts = () => {

    const chef = [
        {
            id : 1,
            pic: "Images/expert1.jpg",
            name: "Someone Famous"
        },
        {   id : 2,
            pic: "Images/expert2.jpg",
            name: "Someone Famous"
        },
        {
            id : 3,
            pic: "Images/expert3.jpg",
            name: "Someone Famous"
        },
        {
            id : 4,
            pic: "Images/expert4.jpg",
            name: "Someone Famous"
        }
    ]

    return (
        <div>
            <div className="heading">
                <h2 className="title">Our Kitchen <span>E</span>xperts</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="Expert-Card">

                {
                    chef.map((experts) => {
                        const {id ,  pic, name } = experts;
                        return (
                            <div className="Box" key  = {id}>
                                <div className="imgBx">
                                    <img src={pic} alt="experts" />
                                </div>
                                <div className="Text" >
                                    <p>{name}</p>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Food_Experts
