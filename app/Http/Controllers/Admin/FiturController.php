<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Fitur;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Requests\FiturRequest;
use App\Http\Requests\FiturStore;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\FiturEdit;

class FiturController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $fiturs = Fitur::all();

        return Inertia('Admin/Fitur/Fitur', [
            'fiturs' => $fiturs
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia('Admin/Fitur/FiturCreate');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(FiturStore $request)
    {
        $data = $request->validated();
        $data['thumbnail'] = Storage::disk('public')->put('fitur', $request->file('thumbnail'));
        $fitur = Fitur::create($data);

        return redirect(route('admin.dashboard.fitur.index'))->with([
            'message' => 'Fitur berhasil ditambahkan',
            'status' => 'success'
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Fitur  $fitur
     * @return \Illuminate\Http\Response
     */
    public function show(Fitur $fitur)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Fitur  $fitur
     * @return \Illuminate\Http\Response
     */
    public function edit(Fitur $fitur)
    {
        return Inertia('Admin/Fitur/FiturEdit', [
            'fitur' => $fitur
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Fitur  $fitur
     * @return \Illuminate\Http\Response
     */
    public function update(FiturEdit $request, Fitur $fitur)
    {

        $data = $request->validated();
        if ($request->file('thumbnail')) {
            $data['thumbnail'] = Storage::disk('public')->put('fitur', $request->file('thumbnail'));
            Storage::disk('public')->delete($fitur->thumbnail);
        } else {
            $data['thumbnail'] = $fitur->thumbnail;
        }

        $fitur->update($data);

        return redirect(route('admin.dashboard.fitur.index'))->with([
            'message' => 'Fitur berhasil ditambahkan',
            'status' => 'success'
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Fitur  $fitur
     * @return \Illuminate\Http\Response
     */
    public function destroy(Fitur $fitur)
    {
        $fitur->delete();
        return redirect(route('admin.dashboard.fitur.index'))->with([
            'message' => 'Comic deleted successfully',
            'type' => 'success'
        ]);
    }
}
