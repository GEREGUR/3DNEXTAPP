import dynamic from "next/dynamic";

const Scene = dynamic(() => import('./components/Scene'), {ssr: false})

export default function Home() {
  return (
    <main className="h-full text-4xl text-center bg-white">
      <Scene />
      <h1 className="h-full m-40 text-4xl text-cente absolute text-white">HELLO</h1>
    </main>
  )
}
