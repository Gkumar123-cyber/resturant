import React,{ useState } from 'react'
import MenuCard from './MenuCard';
import Menu from "./menuApi"
const Resturant = () => {
    const [ menuData,setMenuData] = useState(Menu)
   
    const filterItem = (category) =>{

        const updatedList = Menu.filter((currElem) => {
            return currElem.category === category;
        })
        setMenuData(updatedList);
    };
    return (
        <>
            <nav className="navbar">
                <div>
                    <button className="btn-group__item" onClick={() => filterItem("breakfast")}>breakfast</button>
                    <button className="btn-group__item" onClick={() => filterItem("lunch")}>lunch</button>
                    <button className="btn-group__item" onClick={() => filterItem("evening")}>evening</button>
                    <button className="btn-group__item" onClick={() => filterItem("dinner")}>dinner</button>
                    <button className="btn-group__item" onClick={() => setMenuData(Menu) }>all</button>
                </div> 
            </nav>
            <MenuCard menuData= {menuData}/>
            
        </>

    )
}

export default Resturant
