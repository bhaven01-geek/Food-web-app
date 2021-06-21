import React from 'react'

const Food_Experts = () => {

    const chef = [
        {
            pic: "Images/expert1.jpg",
            name: "Someone Famous"
        },
        {
            pic: "Images/expert2.jpg",
            name: "Someone Famous"
        },
        {
            pic: "Images/expert3.jpg",
            name: "Someone Famous"
        },
        {
            pic: "Images/expert4.jpg",
            name: "Someone Famous"
        }
    ]

    return (
        <div>
            <div className="heading">
                <h2 class="title">Our Kitchen <span>E</span>perts</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="Expert-Card">

                {
                    chef.map((experts) => {
                        const { pic, name } = experts;
                        return (
                            <div className="Box">
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
