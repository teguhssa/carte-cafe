import { Link } from "@inertiajs/react"

export default function Paginator ({meta}) {
    const prev = meta.links[0].url
    const next = meta.links[meta.links.length - 1].url
    const current = meta.current_page
    return (
        <div className="flex justify-center items-center gap-4">
            {prev && <Link href={prev} className="bg-sky-500 p-2 text-white">&laquo;</Link>}
            <p>{current}</p>
            {next && <Link href={next} className="bg-sky-500 p-2 text-white">&raquo;</Link>}
        </div>
    )
}