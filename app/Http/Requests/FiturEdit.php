<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\Fitur;

class FiturEdit extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return Auth::user()->hasRole('admin');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(Fitur $fitur)
    {
        return [
            'name' => 'nullable|string' . $fitur->id,
            'deskripsi' => 'nullable|string',
            'thumbnail' => 'nullable|image',
        ];
    }
}
