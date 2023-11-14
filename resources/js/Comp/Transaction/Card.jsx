import Helper from "@/helper/helper";
export default function Card({ menus, handleCart }) {
    return (
        <>
            {menus.map((item, index) => (
                <div
                    className="bg-white shadow-md hover:cursor-pointer max-h-48"
                    onClick={() => handleCart(item)}
                    key={item.id}
                >
                    <div className="w-full">
                        <img
                            src={`/images/${item.foto_menu}`}
                            className="w-full max-h-24 object-cover"
                        />
                    </div>
                    <div className="px-4 my-2 text-center">
                        <h3 className="font-bold">{item.nama_menu}</h3>
                        <h4 className="text-sky-500">
                            {Helper.toIdr(item.harga)}
                        </h4>
                    </div>
                </div>
            ))}
        </>
    );
}
