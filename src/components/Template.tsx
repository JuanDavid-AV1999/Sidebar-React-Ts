import { FC } from 'react'
import { DefaultProps } from '../types'
import { SidebarMenusItem, SidebarMenuCard } from '../types'
import { SidebarMenu } from '../components'
import { FcAdvertising } from 'react-icons/fc'
import profileImg from '../assets/img/Avatar.jpg'

interface TemplateProps extends DefaultProps {
    title: string
}

export const Template: FC<TemplateProps> = ({ title }) => {
    const items: Array<SidebarMenusItem> = [
        { id: '1', label: 'holo', Icon: FcAdvertising, url: '/' },
        { id: '2', label: 'holo', Icon: FcAdvertising, url: '/' },
        { id: '3', label: 'holo', Icon: FcAdvertising, url: '/' },
    ]

    const card: SidebarMenuCard = {
        id: 'card01',
        displaName: 'Juan David Algarin Valencia',
        title: 'Desarrollador',
        photoUrl: profileImg,
        url: '/',
    }

    return (
        <section>
            <SidebarMenu items={items} card={card} />
        </section>
    )
}
