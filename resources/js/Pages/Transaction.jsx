import Alert from "@/Comp/Alert";
import Layouts from "@/Comp/Layouts";
import Card from "@/Comp/Transaction/Card";
import Cart from "@/Comp/Transaction/Cart";
import ModalBill from "@/Comp/Transaction/ModalBill";
import ModalCharge from "@/Comp/Transaction/ModalCharge";

import { router, usePage } from "@inertiajs/react";
import { useState } from "react";

export default function Transaction({ menus, carts }) {
    const { flash } = usePage().props;
    const [display, setDisplay] = useState(false);
    const [open, setOpen] = useState(false);
    const [print, setPrint] = useState(false);

    function handleCart(item) {
        setDisplay(true);

        router.post("transaction/store", {
            id: item.id,
            qty: 1,
            harga: item.harga,
        });
    }

    return (
        <Layouts>
            <div className="container mx-auto relative">
                {print ? <ModalBill carts={carts} print={print} setPrint={setPrint} /> : ""}
                
                {open ? (
                    <ModalCharge carts={carts} open={open} setOpen={setOpen} />
                ) : (
                    ""
                )}
                {flash.message !== null ? (
                    <Alert className="mt-4" message={flash.message} />
                ) : (
                    ""
                )}
                <div className="grid grid-cols-2 gap-6 mt-10">
                    <div className="grid grid-cols-3 gap-4 max-h-72">
                        <Card menus={menus} handleCart={handleCart} />
                    </div>
                    <div className="p-4 bg-white max-h-md max-w-3xl text-center">
                        <Cart carts={carts} open={open} setOpen={setOpen} setPrint={setPrint} />
                    </div>
                </div>
            </div>
        </Layouts>
    );
}
