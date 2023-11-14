import { useState } from "react";

const noData = () => {
    return (
        <tr>
            <td colSpan={4}>Tidak ada data</td>
        </tr>
    );
};

export default function ModalBill({ carts, print, setPrint }) {
    const totalHarga = carts.reduce((acc, d) => acc + d.total, 0);
    const currentDate = new Date();
    const [close, setClose] = useState(true);
    const formattedDate = currentDate.toISOString().split('T')[0];

    function handleClose() {
        setPrint(false)
        setClose(false);
    }

    return (
        <>
            <div className="absolute p-4 w-full top-0 left-0 bottom-0 bg-white rounded shadow z-10">
                <div className="flex items-center justify-end text-xl font-bold">
                    <h4>{formattedDate}</h4>
                </div>
                <div className="">
                    <table className="w-full my-8 text-center">
                        <thead className="bg-slate-200 p-3">
                            <tr className="p-4">
                                <th className="px-6 py-3">#</th>
                                <th className="px-6 py-3">Nama Menu</th>
                                <th className="px-6 py-3">Foto</th>
                                <th className="px-6 py-3">Harga</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Boolean(carts) && carts.length > 0
                                ? carts.map((item, index) => (
                                      <tr key={item.id}>
                                          <td className="px-6 py-3">
                                              {index + 1}
                                          </td>
                                          <td className="px-6 py-3">
                                              {item.menu.nama_menu} x {item.qty}
                                          </td>
                                          <td className="px-6 py-3 flex items-center justify-center">
                                              <img
                                                  src={`/images/${item.menu.foto_menu}`}
                                                  width={50}
                                              />
                                          </td>
                                          <td className="px-6 py-3">
                                              {item.total}
                                          </td>
                                      </tr>
                                  ))
                                : noData()}
                        </tbody>
                    </table>
                </div>
                    <div className="flex items-center justify-between bg-white p-4">
                        <h4 className="font-bold text-xl">Total : {totalHarga}</h4>
                        <button className="bg-sky-500 px-4 py-2 text-white" onClick={() => handleClose()}>Close</button>
                    </div>
            </div>
        </>
    );
}
