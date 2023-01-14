import Image from 'next/image'
import Link from 'next/link'

const errorPage = () => {
    return (
        <div>
            <Image src='/errorpage.webp' width={1440} height={50}></Image>
            <Link href='/'>
            <button> Back to home</button>
            </Link>
        </div>
    );
};

export default errorPage;