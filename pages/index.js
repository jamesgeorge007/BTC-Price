import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import BitcoinPrice from '../components/BitcoinPrice';

const Index = (props) => (
    <Layout>
    <div>
        <BitcoinPrice bpi={props.bpi} />
    </div>
    </Layout>
);

Index.getInitialProps = async () => {
  const result = await fetch('http://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await result.json();

  return {
    bpi: data.bpi
  };
}

export default Index;
