import { FC, useState } from 'react'
import { DefaultProps } from '@/types'
import { SidebarMenusItem, SidebarMenuCard } from '@/types'
import { SidebarMenu } from '@/components'
import { FcAdvertising, FcAbout, FcAlarmClock } from 'react-icons/fc'
import profileImg from '@/assets/img/Avatar.jpg'

interface TemplateProps extends DefaultProps {
    title?: string
}

export const Template: FC<TemplateProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const items: Array<SidebarMenusItem> = [
        { id: '1', label: 'Home', Icon: FcAdvertising, url: '/' },
        { id: '2', label: 'Config', Icon: FcAbout, url: '/config' },
        { id: '3', label: 'Test', Icon: FcAlarmClock, url: '/test' },
    ]

    const card: SidebarMenuCard = {
        id: 'card01',
        displaName: 'Juan David',
        title: 'Develorper',
        photoUrl: profileImg,
        url: '/',
    }

    return (
        <section>
            <SidebarMenu items={items} card={card} isOpen={isOpen} setIsOpen={setIsOpen} />
            <section
                style={{
                    width: '100%',
                    height: '100%',
                    marginLeft: isOpen ? '300px' : '68px',
                    transition: 'var(--transition)',
                    padding: '20px',
                }}
            >
                {children}
            </section>
        </section>
    )
}
