import { Link } from "@inertiajs/react";
import Paginator from "../paginator";
import { data } from "autoprefixer";

const noData = () => {
    return (
        <tr>
            <td colSpan={2}>Tidak ada data</td>
        </tr>
    );
};

export default function Menu({ datas, meta }) {
    return (
        <div className="container mx-auto flex flex-col justify-center py-6">
            <h4 className="mb-4">Tambahkan menu makanan yang ada di resto</h4>
            <div className="w-full bg-white shadow-md rounded-sm p-12">
                <Link href="/tambah-menu" as="button" className="bg-sky-500 text-white p-2">
                    {" "}
                    + Tambah Menu
                </Link>
                <table className="w-full my-8 text-center">
                    <thead className="bg-slate-200 p-3">
                        <tr className="p-4">
                            <th className="px-6 py-3">#</th>
                            <th className="px-6 py-3">Nama Menu</th>
                            <th className="px-6 py-3">Foto</th>
                            <th className="px-6 py-3">Harga</th>
                            {/* <th>Aksi</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {Boolean(datas) && datas.length > 0
                            ? datas.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="px-6 py-3">{index + 1}</td>
                                    <td className="px-6 py-3">
                                        {item.nama_menu}
                                    </td>
                                    <td className="px-6 py-3 flex items-center justify-center">
                                        <img src={`/images/${item.foto_menu}`} width={50} />
                                    </td>
                                    <td className="px-6 py-3">
                                        {item.harga}
                                    </td>
                                    <td>
                                    {/* <Link href={route('menu.edit')} method="get" data={{ id: item.id }}>Edit</Link> |
                                    <Link href={route('menu.destroy')} as="button" method="post" data={{ id: item.id }}>Hapus</Link> */}
                                    </td>
                                </tr>
                            ))
                            : noData() }
                    </tbody>
                </table>
                {/* <Paginator meta={meta} /> */}
            </div>
        </div>
    );
}
