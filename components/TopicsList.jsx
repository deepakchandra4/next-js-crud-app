import Link from "next/link";
import RemoveButton from "./RemoveButton";
import {HiPencilAlt} from 'react-icons/hi'

export default function TopicLists () {
    return(
        <>
        <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 max-w-3xl mx-auto items-start">
            <div>
                <h2 className="text-2xl font-bold"> Topics Title</h2>
                <div>Topics Description</div>
            </div>

            <div>
                <RemoveButton/>
                <Link href={"/editTopic/123"}>
                    <HiPencilAlt size={24}/>
                </Link>
            </div>
        </div>
        </>
    )
}