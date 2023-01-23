import { FC } from 'react'
import { SidebarMenusItem, DefaultProps } from '@/types'
import { classNames } from '@/util'
import { NavLink } from 'react-router-dom'
import '@/assets/css/SidebarMenuItemView.css'

interface SidebarMenuItemViewProps extends DefaultProps {
    item: SidebarMenusItem
    isOpen: boolean
}

export const SidebarMenuItemView: FC<SidebarMenuItemViewProps> = ({ item, isOpen }) => {
    const { label, Icon, url } = item
    return (
        <div className="sidebar-menu-item">
            <NavLink to={url} className={({ isActive }): string => (isActive ? 'active' : '')}>
                <div className={classNames('item-content', isOpen ? '' : 'collapsed')}>
                    <div className="icon">
                        <Icon size="32" />
                    </div>
                    <span className="label">{label}</span>
                </div>
            </NavLink>
            {!isOpen ? <div className="tooltip">{label}</div> : ''}
        </div>
    )
}
