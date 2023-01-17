import { FC, useState } from 'react'
import { SidebarMenuCard, SidebarMenusItem } from '../types/'
import { classNames } from '../util'
import { VscMenu } from 'react-icons/vsc'
import { SidebarMenuCardView, SidebarMenuItemView } from '../components'
import '../assets/css/sidebarMenu.css'

interface SidebarMenuProps {
    items: Array<SidebarMenusItem>
    card: SidebarMenuCard
}

export const SidebarMenu: FC<SidebarMenuProps> = ({ items, card }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleOpen = () => setIsOpen(!isOpen)

    return (
        <div className={classNames('sidebar-menu', isOpen ? 'open' : 'collapsed')}>
            <div className="menu-btn" onClick={handleOpen}>
                <button className="hamburger-btn">
                    <VscMenu />
                </button>
            </div>
            <SidebarMenuCardView card={card} isOpen={isOpen} />
            {items.map((item) => (
                <SidebarMenuItemView key={item.id} item={item} isOpen={isOpen} />
            ))}
        </div>
    )
}
