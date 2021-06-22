import React from 'react'

const Menu = () => {

    const food_menu = [
        {
            id:1,
            foodimg : 'Images/menu1.jpg',
            desc : 'Special Pasta'
        },
        {
            id:2,
            foodimg : 'Images/menu2.jpg',
            desc : 'Special Soup'
        },
        {   
            id:3,
            foodimg : 'Images/menu3.jpg',
            desc : 'Special Salad'
        },
        {
            id:4,
            foodimg : 'Images/menu4.jpg',
            desc : 'Special Pasta'
        },
        {
            id:5,
            foodimg : 'Images/menu5.jpg',
            desc : 'Special Soup'
        },
        {
            id:6,
            foodimg : 'Images/menu6.jpg',
            desc : 'Special Salad'
        }
    ]


    return (
        <div>
            <div className="heading">
                <h2 className="title">Our <span>M</span>enu</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="Menu-Card">

                    {
                        food_menu.map((menu) => {
                            const { id , foodimg, desc } = menu;
                            return (
                                <div className="Box" key = {id}>
                                    <div className="imgBx">
                                        <img src = {foodimg} alt = "menu"/>
                                    </div>
                                    <div className = "Text" >
                                        <p>{desc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
           
        </div>
    )
}

export default Menu
