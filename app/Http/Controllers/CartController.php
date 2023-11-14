<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Menu;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $menusWithCarts = Cart::with(['menu'])->where('isDeleted', '=', 0)->get();
        return Inertia::render("Transaction", [
            "menus" => Menu::all(),
            "carts" =>  $menusWithCarts
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $noOrder = "Order" . date('ymd') . strtoupper(Str::random(5));

        $cart = Cart::where('menu_id', $request->id)
            ->where('isDeleted', 0)
            ->first();
            
        if ($cart) {
            // Jika menu_id sudah ada di cart, update qty dan total
            $cart->qty += $request->qty;
            $cart->total += $request->harga;
        } else {
            // Jika menu_id belum ada di cart, buat entri baru
            $cart = new Cart();
            $cart->qty = $request->qty;
            $cart->no_order = $noOrder;
            $cart->menu_id = $request->id;
            $cart->total = $request->harga;
        }

        $cart->save();

        return redirect()->back()->with('message', 'Berhasil memasukan ke dalam keranjang');
    }

    /**
     * Display the specified resource.
     */
    public function show(Cart $cart)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cart $cart)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cart $cart)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $cart, Request $request)
    {
        $carts = Cart::where('isDeleted', 0)->get();

        foreach ($carts as $cart) {
            $cart->isDeleted = 1;
            $cart->save();
        }

        return redirect()->back()->with('message','Berhasil mengosongkan cart');
    }
}
