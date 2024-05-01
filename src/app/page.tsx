import dynamic from "next/dynamic";

const Scene = dynamic(() => import('./components/Scene'), {ssr: false})

export default function Home() {
  return (
    <main className="h-full text-4xl text-center bg-white">
      <Scene />
    </main>
  )
}
