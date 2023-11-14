import { Link, usePage } from "@inertiajs/react";

export default function Navbar() {
    const { component } = usePage()
    
    return (
        <>
            <div className="text-white py-3 bg-sky-500">
                <div className="container px-4 mx-auto flex items-center gap-4">
                    <img src="/img/cashier.svg" width={40} />
                    <h1>Carte Resto</h1>
                </div>
            </div>
            <div className="bg-white shadow-md w-full px-4 py-2 mx-auto">
                <div className="container flex items-center gap-4">
                    <Link href="/" as="button" className={component === "Homepage" ? 'text-sky-500 border-b-2 border-sky-500' : ""}>Food</Link>
                    <Link href="/transaction" as="button"  className={component === "Transaction" ? 'text-sky-500 border-b-2 border-sky-500' : ""}>Transaction</Link>
                </div>
            </div>
        </>
    );
}
