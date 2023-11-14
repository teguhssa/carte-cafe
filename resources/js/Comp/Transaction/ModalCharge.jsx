import TextInput from "@/Components/TextInput";
import { router } from "@inertiajs/react";
import { useState } from "react";

const noData = () => {
    return (
        <tr>
            <td colSpan={4}>Tidak ada data</td>
        </tr>
    );
};

export default function ModalCharge ({carts, open, setOpen}) {
    const totalHarga = carts.reduce((acc, d) => acc + d.total, 0);
    const [close, setClose] = useState(true);
    const [payment, setPayment] = useState(0)
    const [kembalian, setKembalian] = useState(0)

    function handlePay () {
        if (payment < totalHarga) return alert("Pembayaran Kurang!!")

        router.post('/payment/store', {
            jumlah_bayar: payment,
            total_tagihan: totalHarga,
            kembalian: payment - totalHarga
        })
        setPayment(0)
        setKembalian(0)
        setOpen(false)
        setClose(false);
    }

    function handleChange(e) {
        setPayment(e.target.value)
        setKembalian(payment - totalHarga)
    }

    function handleClose() {
        setOpen(false)
        setClose(false);
    }
    return(
        <>
            <div className={`absolute ${open ? 'block' : 'hidden'} top-0 left-0 bottom-0 bg-white rounded shadow-lg p-5 w-full z-10`}>
                <h3 className="font-bold text-xl">Detail Pesanan</h3>
                <div className="grid grid-cols-2 gap-4 justify-between">
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
                                    <td className="px-6 py-3">{index + 1}</td>
                                    <td className="px-6 py-3">
                                        {item.menu.nama_menu} x {item.qty}
                                    </td>
                                    <td className="px-6 py-3 flex items-center justify-center">
                                        <img src={`/images/${item.menu.foto_menu}`} width={50} />
                                    </td>
                                    <td className="px-6 py-3">
                                        {item.total}
                                    </td>
                                </tr>
                            ))
                            : noData() }
                            </tbody>
                            <tfoot className="bg-slate-200">
                                <tr>
                                    <th colSpan={4}>Total: {totalHarga}</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <div className="p-6">
                        <h4 className="font-bold text-xl text-center">Uang Pembeli</h4>
                        <div className="mt-4">
                        <TextInput
                            id="uang_pembeli"
                            type="text"
                            name="uang_pembeli"
                            value={payment}
                            className="mt-1 block w-full"
                            onChange={(e) => handleChange(e)}
                        />
                        </div>
                        <div className="flex gap-4 my-4">
                            <button className="p-3 border w-full" onClick={() => handleClose()}>close</button>
                            <button className="p-3 w-full bg-sky-500 text-white" onClick={() => handlePay()}>pay</button>
                        </div>
                        <h4 className="text-red-500">Kembalian: {kembalian}</h4>
                    </div>
                </div>
            </div>
        </>
    )
}