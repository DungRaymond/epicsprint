import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Epic Sprint - everything, from a dev desk</title>
        <link rel="icon" href="/epic.png" />
      </Head>

      {/* <main className="flex flex-col items-center w-full flex-1 px-20 text-center"> */}
      <main className="flex flex-col w-full flex-1 px-6 text-center">
        <nav  id="main-navbar" className="grid grid-flow-row grid-rows-10">
          <a
            className="flex items-center justify-center"
            href="/"
            rel="noopener noreferrer"
          >
            <img src="/epic.png" alt="Vercel Logo" className="h-20 mr-4" />
          </a>
        </nav>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/epic.png" alt="Vercel Logo" className="h-12 ml-4" />
        </a>
      </footer>
    </div>
  )
}
