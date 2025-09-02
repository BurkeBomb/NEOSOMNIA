import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neo-graphite to-black">
      <Head>
        <title>Neo Somnia</title>
        <meta name="description" content="We master the modifiers so you can master the moment." />
      </Head>
      <div className="text-center p-8 rounded-2xl shadow-xl bg-black/40 backdrop-blur">
        <div className="mx-auto h-20 w-20 mb-4">
          <img src="/logo.svg" alt="Neo Somnia" className="h-full w-full" />
        </div>
        <h1 className="text-4xl font-bold">Neo Somnia</h1>
        <p className="text-lg mt-2 opacity-80">We master the modifiers so you can master the moment.</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a href="/login-client" className="px-4 py-3 rounded-xl bg-neo-purple/80 hover:bg-neo-purple text-white font-semibold">Login Client</a>
          <a href="/login-staff" className="px-4 py-3 rounded-xl bg-neo-purple/80 hover:bg-neo-purple text-white font-semibold">Login Staff</a>
          <a href="/register" className="px-4 py-3 rounded-xl bg-neo-gold/20 hover:bg-neo-gold/30 text-neo-gold font-semibold">Register</a>
        </div>
      </div>
    </div>
  )
}
