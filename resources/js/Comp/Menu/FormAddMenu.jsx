import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm, usePage } from "@inertiajs/react";
import Alert from "../alert";

export default function FormAddMenu() {
    const { errors, flash } = usePage().props;

    const { data, setData, post } = useForm({
        namaMenu: "",
        fotoMenu: null,
        harga: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        post("/store-menu", {
            onSuccess: () => {
                setData({
                    namaMenu: "",
                    fotoMenu: null,
                    harga: "",
                });
            },
        });
    }


    return (
        <div className="container mx-auto flex flex-col justify-center py-6">
            <div className="w-full bg-white shadow-md rounded-sm p-12">
                {flash.message === null ? "" :  <Alert message={flash.message} />}
                <h3 className="mb-6 text-sky-300">Tambahkan Menu</h3>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <InputLabel htmlFor="nama_menu" value="Nama Menu" />
                        <TextInput
                            id="nama_menu"
                            type="text"
                            name="nama_menu"
                            value={data.namaMenu}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("namaMenu", e.target.value)
                            }
                        />
                        <InputError message={errors.namaMenu} />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="foto_menu" value="Foto Menu" />

                        <div className="flex items-center justify-center w-full">
                            <label
                                htmlFor="fotoMenu"
                                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100 "
                            >
                                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg
                                        className="w-8 h-8 mb-4 text-slate-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 16"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                        />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">
                                            Click to upload
                                        </span>{" "}
                                        or drag and drop
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        SVG, PNG, JPG or GIF
                                    </p>
                                </div>
                                <input
                                    id="fotoMenu"
                                    name="fotoMenu"
                                    type="file"
                                    className="hidden"
                                    onChange={(e) =>
                                        setData("fotoMenu", e.target.files[0])
                                    }
                                />
                            </label>
                        </div>
                        <InputError message={errors.fotoMenu} />
                    </div>
                    <div className="mt-4">
                        <InputLabel htmlFor="harga" value="Harga Menu" />
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-sky-500 border rounded-e-0 border-sky-100 rounded-s-md">
                                <p className="text-white">Rp</p>
                            </span>
                            <input
                                type="number"
                                id="harga"
                                className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:border-indigo-500 focus:ring-indigo-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                                value={data.harga}
                                onChange={(e) =>
                                    setData("harga", e.target.value)
                                }
                            />
                        </div>
                        <InputError message={errors.harga} />
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <button className="bg-green-500 text-white px-5 py-2">
                            Simpan
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
