import Image from 'next/image'

export default function FormValidator() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1 className="h1">welcome to form validator</h1>

        <form onSubmit={}>
          <input type="text" className="className" />
          <input type="email" className="email" />
          <input type="password" className="password" />
        </form>
      </div>
    </main>
  )
}