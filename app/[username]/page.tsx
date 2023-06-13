import Image from "next/image";
import Header from "../../components/Header";
import Link from "../../components/Link";

type IUser = {
    username: string,
    name: string;
    bio?: string;
    avatar: string;
    links: {
        title: string;
        url: string;
    }[];
}[]

// Data fetching for server component
async function getData(username: string) {
    // Dummy data
    const users: IUser = [
        {
            username: "pharrell",
            name: "Pharrell Williams",
            bio: "Hello, I'm Pharrell Williams!",
            avatar: "https://d1fdloi71mui9q.cloudfront.net/kOyHLAdQcSwyPLOH0KHg_aq7CNej4S7yc073c",
            links: [
                {
                    "title": "Google",
                    "url": "https://google.com"
                },
                {
                    "title": "Youtube",
                    "url": "https://youtube.com"
                },
                {
                    "title": "Facebook",
                    "url": "https://facebook.com"
                },
                {
                    "title": "Gmail",
                    "url": "https://gmail.com"
                },
                {
                    "title": "Twitter",
                    "url": "https://twitter.com"
                },
                {
                    "title": "Tumblr",
                    "url": "https://tumblr.com"
                }
            ]
        }
    ]

    // Get user by username
    const user = users.find(user => user.username === username);

    return user ?? null;
}

export default async function Profile({ params }: { params: { username: string } }) {
    const username = params.username;
    const userData = await getData(username);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center pt-24">
            <Header title={userData ? "@" + userData?.username : "Unclaimed username"} />
            <div className="max-w-md min-w-[500px] mx-auto bg-gray-900 shadow-md rounded-md p-8">
                {userData ? (<>
                    <h1 className="text-2xl font-semibold text-gray-100 mb-4">{userData?.name}</h1>
                    <Image
                        src={userData?.avatar}
                        alt="Profile"
                        className="rounded-full w-32 h-32 mx-auto mb-4"
                        width={128}
                        height={128}
                    />
                    <p className="text-gray-100 mb-4">{userData?.bio}</p>
                    <ul className="flex flex-col max-w-lg mx-auto space-y-4">
                        {userData?.links.map((link, index) => <Link key={link.url + "_" + index} href={link.url} title={link.title} />)}
                    </ul>
                </>) : <h1 className="text-2xl font-semibold text-gray-100 mb-4">User not found</h1>}
            </div>
        </main>
    )
}