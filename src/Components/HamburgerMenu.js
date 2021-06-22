import React , {useState} from 'react'

const HamburgerMenu = () => {

    const [Hamburger, setHamburger] = useState("false")
    const [ul, setul] = useState("")
    const [Navbar, setNavbar] = useState("");


    let changeNavbar =  () =>{
        if(window.scrollY >= 80)
            setNavbar("sticky");
        else if (window.scrollY <= 10)
            setNavbar("");
    }
    
    let changeHamburger = () =>{
        if(Hamburger == false)
            {setHamburger(true);
            setul("");}
        else
            {setHamburger(false);
            setul("active");}
    }
    
    window.addEventListener('scroll', changeNavbar);
    

    return (
        <div>
            <header className = {Navbar}>

                    <h3 className="logo">Food<span>.</span></h3>
                    <div className = {Hamburger ? "menu-toggle" : "menu-toggle-active"} onClick = {changeHamburger}></div>

                    <ul className = {ul}>
                        <li><a href="#">Home </a></li>
                        <li><a href="#">About </a></li>
                        <li><a href="#">Menu </a></li>
                        <li><a href="#">Expert </a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
            </header>
        </div>
    )
}

export default HamburgerMenu
