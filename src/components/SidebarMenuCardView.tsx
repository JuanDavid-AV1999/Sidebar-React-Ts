import { FC } from 'react'
import { SidebarMenuCard, DefaultProps } from '../types'
import { classNames } from '../util'

interface SidebarMenuCardProps extends DefaultProps {
    card: SidebarMenuCard
    isOpen: boolean
}

export const SidebarMenuCardView: FC<SidebarMenuCardProps> = ({ card, isOpen }) => {
    const { id, displaName, photoUrl, title, url } = card
    return (
        <div className="sidebar-menu-card">
            <img src={photoUrl} alt="avatar" className="profile" width="100%" />
            <div className={classNames('profile-info', isOpen ? 'open' : 'collapsed')}>
                <div className="name">{displaName}</div>
                <div className="title">{title}</div>
                <div className="url">
                    <a href={url}>Ir al perfil</a>
                </div>
            </div>
        </div>
    )
}
