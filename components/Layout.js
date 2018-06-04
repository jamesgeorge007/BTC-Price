import Navbar from './Navbar';
import Head from 'next/head';

const Layout = (props) => (
    <div>
        <Head>
            <title>
                BTC-Price
                </title>
            </Head>
    <Navbar />
    {props.children}
    </div>
);

export default Layout;