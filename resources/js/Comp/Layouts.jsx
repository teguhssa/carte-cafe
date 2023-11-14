import { Head } from "@inertiajs/react";
import Navbar from "./Navbar";

export default function Layouts({ children }) {
    return (
        <div className="min-h-screen bg-slate-200">
            <Head title="Carte Cafe" />
            <Navbar />
            {children}
        </div>
    );
}
