import Layout from '../components/Layout';

export default function Error({ statusCode }) {
  return (
    <Layout>
      <main style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h1>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</h1>
        <p>Sorry, the page you are looking for does not exist or an error has occurred.</p>
      </main>
    </Layout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
