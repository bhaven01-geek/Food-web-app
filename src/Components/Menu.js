import React from 'react'

const Menu = () => {

    const food_menu = [
        {
            foodimg : 'Images/menu1.jpg',
            desc : 'Special Pasta'
        },
        {
            foodimg : 'Images/menu2.jpg',
            desc : 'Special Soup'
        },
        {
            foodimg : 'Images/menu3.jpg',
            desc : 'Special Salad'
        },
        {
            foodimg : 'Images/menu4.jpg',
            desc : 'Special Pasta'
        },
        {
            foodimg : 'Images/menu5.jpg',
            desc : 'Special Soup'
        },
        {
            foodimg : 'Images/menu6.jpg',
            desc : 'Special Salad'
        }
    ]


    return (
        <div>
            <div className="heading">
                <h2 class="title">Our <span>M</span>enu</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="Menu-Card">

                    {
                        food_menu.map((menu) => {
                            const { foodimg, desc } = menu;
                            return (
                                <div className="Box">
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
