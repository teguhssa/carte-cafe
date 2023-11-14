<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Resources\MenuCollection;
use App\Http\Requests\MenuStoreRequest;
use App\Http\Requests\MenuUpdateRequest;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $datas = new MenuCollection(Menu::paginate(10));
        return Inertia::render("Homepage", [
            'datas' => $datas
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('AddMenu');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MenuStoreRequest $request)
    {
        $image = $request->file('fotoMenu');

        $newNameImage = "menu-" . $request->namaMenu . "." . $image->extension();

        $image->move(public_path("images"), $newNameImage);

        $menu = new Menu();
        $menu->nama_menu = $request->namaMenu;
        $menu->foto_menu = $newNameImage;
        $menu->harga = $request->harga;
        $menu->save();

        return redirect()->back()->with('message', "Berhasil tambah menu");
    }

    /**
     * Display the specified resource.
     */
    public function show(Menu $menu)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Menu $menu, Request $request)
    {
        return Inertia::render('EditMenu', [
            'menu' => $menu->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Menu $menu)
    {
        if ($request->fotoMenu != "") {
            $image = $request->file('fotoMenu');

            $newNameImage = "menu-" . $request->namaMenu . "." . $image->extension();

            $image->move(public_path("images"), $newNameImage);
        }
       
        $menu = Menu::find($request->id);

        $menu->nama_menu = $request->namaMenu;
        $menu->harga = $request->harga;
        if ($request->fotoMenu != "") {
            $menu->foto_menu = $image;
        }
        $menu->save();

        return to_route('menu')->with("message", "Berhasil update Data");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Menu $menu, Request $request)
    {
        $menu = Menu::find($request->id);

        $menu->delete();

        return to_route('menu')->with("message", "Berhasil hapus Data");
    }
}
