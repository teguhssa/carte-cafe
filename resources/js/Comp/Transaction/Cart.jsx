import { router } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function Cart({ carts, setOpen, setPrint }) {
    const { flash } = usePage().props;
    const totalHarga = carts.reduce((acc, d) => acc + d.total, 0);

    function handleClear() {
        router.post("/transaction/clear", { data: 1 });
    }
    return (
        <div className="relative">
          
            <div className="p-4">
                <h2 className=" mb-5 text-xl font-bold">Pesanan</h2>
                <div className="flex flex-col">
                    {Boolean(carts) && carts.length > 0 ? (
                        carts.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between my-4"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-1/2">
                                        <img
                                            src={`/images/${item.menu.foto_menu}`}
                                            alt={item.menu.nama_menu}
                                            className="w-full max-h-24"
                                        />
                                    </div>
                                    <h4 className="font-bold">
                                        {item.menu.nama_menu}
                                    </h4>
                                </div>
                                <div className="flex gap-4">
                                    <p className="font-bold"> x {item.qty}</p>
                                    <p className="text-sky-500 font-bold">
                                        {" "}
                                        Rp. {item.total}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Tidak ada pesanan</p>
                    )}
                </div>
                <div className="mt-8">
                    <button
                        className="w-full border-2 border-red-600 p-2 text-red-600"
                        onClick={() => handleClear()}
                    >
                        Clear Cart
                    </button>
                    <div className="flex gap-2 mt-4">
                        <button className="w-full bg-green-600 text-white p-2">
                            Save Bill
                        </button>
                        <button className="w-full bg-green-600 text-white p-2" onClick={() => setPrint(true)}>
                            Print Bill
                        </button>
                    </div>
                    <button className="w-full bg-sky-500 text-white p-2 mt-4" onClick={() => setOpen(true)}>
                        Charge Rp. {totalHarga}
                    </button>
                </div>
            </div>
        </div>
    );
}
