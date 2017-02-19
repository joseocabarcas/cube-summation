<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Entities\Matriz;

class CubeController extends Controller
{
    //
    public function index(Request $request)
    {
    	$request->session()->forget('matriz');
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

        if (!$matriz)
            return response()->json(['err' => 'Por favor cree la matriz'], 500);

        $index = $request->only('x', 'y', 'z');
        $value = $request->input('w');

        if ($index['x'] > $matriz->getN() || $index['y'] > $matriz->getN() || $index['z'] > $matriz->getN())
        	return response()->json(['err' => 'Estos valores no coinciden con el tamaño de la matriz'], 400);

        if (!$matriz->validateT())
            return response()->json(['err' => 'Tests finalizados'], 500);

        $matriz->update($index['x'] - 1, $index['y'] - 1, $index['z'] - 1, $value);

        return response()->json(['ok' => true]);
    }

    public function postQuery(Request $request)
    {


        $this->validate($request, [
            'x1' => 'required|min:1',
            'x2' => 'required|min:1',
            'y1' => 'required|min:1',
            'y2' => 'required|min:1',
            'z1' => 'required|min:1',
            'z2' => 'required|min:1',
        ]);

        $matriz = $request->session()->get('matriz');

        if (!$matriz)
            return response()->json(['err' => 'Por favor cree la matriz'], 500);

        $index = $request->only('x1', 'x2', 'y1', 'y2', 'z1', 'z2');
        
        if($index['x2']-1 < $index['x1']-1 || $index['y2']-1 < $index['y1']-1 || $index['z2']-1 < $index['z1']-1)
            return response()->json(['error' => 'Los indices de X tienen que ser mayores a los de Y'], 400);

        if(!$matriz->validateT())
            return response()->json(['error' => 'Tests finalizados'], 500);

        $result = $matriz->query($index['x1']-1, $index['y1']-1, $index['z1']-1, $index['x2']-1, $index['y2']-1, $index['z2']-1);

        
        return response()->json(['result' => $result]);
    }
}
