import exp from "constants"
import Image from "next/image"

import PlusIcon from '../../../public/icons/plus.svg'
import SearchIcon from '../../../public/icons/search.svg'
import { MouseEventHandler } from "react"
import { IconButton } from "@chakra-ui/react"


const IconBtn = ({icon, onClick}:{icon: IconType, onClick?: MouseEventHandler<HTMLButtonElement>}) => {
    return (
        <IconButton bg={"transparent"} aria-label={icon.src} onClick={onClick} rounded={'full'}>
            <Icon icon={icon} />
        </IconButton>
    )
}

export const Icon = ({icon, className}:{icon: IconType, className?: string}) => {
    return <span className={`material-symbols-rounded ${className}`}>{icon.src}</span>
}

export default IconBtn

export const Icons = {
    search: {
        src: 'Search'
    },
    plus: {
        src: 'Add'
    },
    tag: {
        src: 'Style'
    },
    lightMode: {
        src: 'light_mode'
    },

    darkMode: {
        src: 'dark_mode'
    },

    NotesStack: {
        src: 'note_stack'
    },
    ShoppingMode: {
        src: 'shoppingmode'
    },
}

export type IconType = {
    src: string
}