import { CreateRoom } from '@/components/CreateRoom'
import { RoomCard } from '@/components/RoomCard'

export default function Home() {
  return (
    <main className="flex flex-col p-8">
      <h1 className="font-bold text-2xl">Welcome to GoChat!</h1>
      <h3 className="mt-2">
        Please, choose a room to join or create a new room. :)
      </h3>
      <CreateRoom />
      <section className="flex flex-col mt-4">
        <div className="mt-2 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-[1600px]">
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
          <RoomCard />
        </div>
        {/* <p className="mt-2">There is no room created yet :(</p> */}
      </section>
    </main>
  )
}
