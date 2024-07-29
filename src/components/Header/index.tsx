interface HeaderProps{
    title: string;
    description?: string
}

export function Header({title, description = ''}: HeaderProps) {
    document.title = `Nexus-Commerce | ${title}`
    document.querySelector('[name=description]')?.setAttribute('content', description)

    return null
}
