<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Transaction;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $inv = "INV" . date('ymd') . strtoupper(Str::random(5));

        $trx = new Transaction();

        $trx->invoice = $inv;
        $trx->jumlah_bayar = $request->jumlah_bayar;
        $trx->total_tagihan = $request->total_tagihan;
        $trx->kembalian = $request->kembalian;

        $carts = Cart::where('isDeleted', 0)->get();

        foreach ($carts as $cart) {
            $cart->isDeleted = 1;
            $cart->save();
        }

        $trx->save();

        return redirect()->back()->with('message','Pembayaran Berhasil!!');

    }

    /**
     * Display the specified resource.
     */
    public function show(Transaction $transaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Transaction $transaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Transaction $transaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transaction $transaction)
    {
        //
    }
}
