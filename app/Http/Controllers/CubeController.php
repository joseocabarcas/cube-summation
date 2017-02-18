<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Entities\Matriz;

class CubeController extends Controller
{
    //
    public function index(Request $request)
    {
    	$request->session()->flush();
    	return view('home');
    }

    public function postCreate(Request $request)
    {
        $this->validate($request, [
        	't' => 'required|integer|between:1,50',
            'm' => 'required|integer|between:1,1000',
            'n' => 'required|integer|between:1,100',
        ]);

        $t = $request->input('t');
        $n = $request->input('n');
        $m = $request->input('m');

        $matriz = new Matriz($t, $n, $m);
        $request->session()->put('matriz', $matriz);
        $request->session()->put('operaciones', 0);

    	return response()->json(['ok' => 'true']);
    }

    public function postUpdate(Request $request)
    {

        $this->validate($request, [
            'x' => 'required|integer|min:1',
            'y' => 'required|integer|min:1',
            'z' => 'required|integer|min:1',
            'w' => 'required|integer|between:-1000000000,1000000000',
        ]);

        $matriz = $request->session()->get('matriz');

        if (!$matriz) {
            return response()->json(['err' => 'Por favor cree la matriz'], 500);
        }

        $index = $request->only('x', 'y', 'z');
        $value = $request->input('w');

        if ($index['x'] > $matriz->getN() || $index['y'] > $matriz->getN() || $index['z'] > $matriz->getN()) {
            return response()->json(['err' => 'Estos valores no coinciden con el tamaño de la matriz'], 400);
        }

        if (!$this->checkTests($matriz)) {
            return response()->json(['err' => 'Tests finalizados'], 500);
        };

        $matriz->update($index['x'] - 1, $index['y'] - 1, $index['z'] - 1, $value);

        return response()->json(['ok' => true]);
    }

    public function postQuery(Request $request)
    {
    	return response()->json();
    }
}
