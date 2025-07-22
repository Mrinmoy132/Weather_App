import { useState } from 'react'
import Firsttab from './Firsttab';
import Secondtab from './Secondtab';
import Thirdtab from './Thirdtab';
import Fourthtab from './Fourthtab';
import "./TabNavigation.css"

const TabNavigation = () => {

    const [activetab, setActivetab] = useState(0);

    const switchTab = (index) => {
        setActivetab(index);
    }

    const allTabs = [
        {
            tabName: "firstTab",
            component: Firsttab,
        },
        {
            tabName: "secondTab",
            component: Secondtab,
        },
        {
            tabName: "thirdTab",
            component: Thirdtab,
        },
        {
            tabName: "fourthTab",
            component: Fourthtab,
        },
    ]

    const TabName = allTabs[activetab].component;

    return (
        <>
            <div className='navBar'>
                {allTabs.map((tab, index) => {
                    return (
                        <button key={index} onClick={() => switchTab(index)} className={activetab === index ? "purple" : ""}>{tab.tabName}</button>
                    )
                })}
            </div>
            <div>
                <TabName />
            </div>
        </>
    )
}

export default TabNavigation;