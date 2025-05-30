// Custom 404 page for Next.js static optimization
export default function Custom404() {
  return (
    <div style={{textAlign: 'center', padding: '4rem 1rem'}}>
      <h1 style={{fontSize: '4rem', marginBottom: '1rem'}}>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist or has been moved.</p>
    </div>
  );
}
