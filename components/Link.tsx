type LinkProps = {
    href: string;
    title: string;
}

const Link = ({ href, title }: LinkProps) => {
    return <li>
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-600 text-white py-2 px-4 rounded-md block text-center"
        >
            {title}
        </a>
    </li>
}

export default Link;