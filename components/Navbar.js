import Link from 'next/link';

const Navbar = () => (
    <div>
    <ul>
    <li><Link href='/'><a>Index</a></Link></li>
    <li><Link href='/about'><a>About</a></Link></li>
    </ul>
    <style jsx>{`
        ul{
            background: #333;
            color: #fff;
            list-style: none;
            display: flex;
        }
        ul li{
            font-size: 18px;
            margin-right: 20px;
        }
        ul li a{
            color: #fff;
            text-decoration: none;
            
        }
    `}
    </style>
    </div>
);

export default Navbar;