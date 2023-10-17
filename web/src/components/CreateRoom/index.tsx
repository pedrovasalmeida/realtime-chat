export function CreateRoom() {
  return (
    <div className="sm:ml-auto flex flex-col sm:flex-row justify-center gap-4 mt-8">
      <input
        className="w-auto m-0 p-0 rounded-md px-2 py-2 sm:py-0 text-zinc-900"
        placeholder="Room name"
      />
      <button className="flex items-center justify-center bg-blue-900 w-[168px] border border-zinc-400 rounded-md py-2 hover:brightness-75 duration-300 ease-in-out shadow">
        <span className="tracking-wide text-sm">Create new room</span>
      </button>
    </div>
  )
}
