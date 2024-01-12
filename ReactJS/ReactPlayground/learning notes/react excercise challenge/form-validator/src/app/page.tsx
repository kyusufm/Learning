import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const validateForm(){
    
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h2>Form validator</h2>
        <form onSubmit={() => validateForm()}>
          <input type="text" className="className" />
          <input type="email" className="email" />
          <input type="password" className="password" />
        </form>
      </div>
    </main>
  )
}
