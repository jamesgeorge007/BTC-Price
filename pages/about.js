import Layout from '../components/Layout';

const About =  () => (
    <Layout>
    <div className="jumbotron" style={{width: '100%'}}>
        <h2 className="lead" style={{fontSize: '2em', textAlign: 'left'}}>About</h2>
        <p className="lead">Shows the current price of BitCoin from an API using server side rendering capability as provided by Next-js.</p>
    </div>
    </Layout>
);

export default About;
