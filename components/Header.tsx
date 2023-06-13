type HeaderProps = {
    title: string;
}

const Header = ({ title }: HeaderProps) => {
    return <header className="fixed top-0 left-0 w-full bg-opacity-20 backdrop-filter backdrop-blur-lg">
        <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg py-4 px-8">
            <h1 className="text-2xl font-semibold text-white">{title}</h1>
        </div>
    </header>
}

export default Header;