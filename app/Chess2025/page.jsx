import QRCode from 'react-qr-code';

export const metadata = {
  title: 'Redirecting to Chess Competition 2025 Registration',
  description: 'Redirecting to Chess Competition 2025 Registration Form'
};

export default async function Page() {

  const registrationUrl = 'https://forms.gle/X5Jm2YAWj2Jydm4D8';
  const route = "Chess2025"
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
          <div className="m-4 text-center">
            <div className="relative inline-block">
              <QRCode value={`https://studentconsciousclub.in/${route}`} />
              <img
                src="logo.png"
                alt="SCC"
                className="absolute top-1/2 left-1/2 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
