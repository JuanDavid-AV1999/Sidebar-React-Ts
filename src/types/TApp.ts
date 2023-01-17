import { IconType } from 'react-icons'

export interface SidebarMenusItem {
    id: string
    label: string
    Icon: IconType
    url: string
}

export interface SidebarMenuCard {
    id: string
    displaName: string
    photoUrl: string
    title: string
    url: string
}
