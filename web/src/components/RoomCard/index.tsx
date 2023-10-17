import Link from 'next/link'
import { TbArrowsJoin2 } from 'react-icons/tb'
import { FiDelete } from 'react-icons/fi'

export function RoomCard() {
  return (
    <div className="flex flex-col border border-zinc-500 rounded-md">
      <div className="flex gap-4 items-center pt-4 px-2">
        <span className="text-sm text-zinc-200">Room Name</span>
        <span className="text-green-800 bg-green-300 px-2 rounded-full text-[10px] border border-green-500">
          Free
        </span>
      </div>
      <div className="flex items-center justify-between w-full border-t mt-4">
        <Link
          href="/room"
          className="flex items-center justify-center gap-2 w-full py-2 cursor-pointer duration-300 ease-in-out hover:bg-zinc-800 rounded-bl-md"
        >
          <TbArrowsJoin2 size={14} />
          <span className="text-sm">Join</span>
        </Link>

        <div className="h-full w-[1px] bg-zinc-50" />

        <div className="flex items-center justify-center gap-2 w-full py-2 cursor-not-allowed duration-300 ease-in-out rounded-br-md opacity-40">
          <FiDelete size={14} />
          <span className="text-sm">Delete</span>
        </div>
      </div>
    </div>
  )
}
