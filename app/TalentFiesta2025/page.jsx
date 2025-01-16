export const metadata = {
  title: 'Redirecting to Talent Fiesta 2025 Registration',
  description: 'Redirecting to Talent Fiesta 2025 Registration Form'
};

export default async function Page() {
  // Server-side redirect
  const registrationUrl = 'https://forms.gle/rw38dYmkXCTF54HF7';
  
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${registrationUrl}`} />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
          <p className="mb-4">If you are not redirected automatically, </p>
          <a 
            href={registrationUrl}
            className="text-primary-500 hover:text-primary-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>
        </div>
      </div>
    </>
  );
}
