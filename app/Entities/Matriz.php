<?php
namespace App\Entities;

class Matriz
{

    private $matriz, $n, $m;

    public function __construct($t, $n, $m)
    {
        $this->t = $t;
        $this->n = $n;
        $this->m = $m;
        $this->build($n);
    }
    
    // Metodo para actualizar un valor en especifico de la matriz
    public function update($x, $y, $z, $w)
    {
        $this->matriz[$x][$y][$z] = $w;
    }

    // Metodo para hacer la "query" a la matriz
    public function query($x1, $y1, $z1, $x2, $y2, $z2)
    {
        $sum = 0;
        for ($i = $x1; $i <= $x2; $i++) {
            for ($j = $y1; $j <= $y2; $j++) {
                for ($k = $z1; $k <= $z2; $k++) {
                    $sum += $this->matriz[$i][$j][$k];
                }
            }
        }
        return $sum;
    }

    // Metodo para retornar la matriz construida
    public function getMatriz()
    {
        return $this->matriz;
    }

    // Metodo para obtener N
    public function getN()
    {
        return $this->n;
    }

    // Metodo para obtener M
    public function getM()
    {
        return $this->m;
    }

    // Metodo para obtener T
    public function getT()
    {
        return $this->t;
    }

    public function validateT()
    {
        $ope= session('operaciones');
        if ($ope >= $this->m) {
            session()->forget('matriz');
            return false;
        } else {
            session()->put('operaciones', $ope + 1 );
        }
        return true;
    }

    // Metodo interno para construir la matriz 3D
    private function build($n)
    {
        for ($i = 0; $i <= $n; $i++) {
            for ($j = 0; $j <= $n; $j++) {
                for ($k = 0; $k <= $n; $k++) {
                    $this->matriz[$i][$j][$k] = 0;
                }
            }
        }
    }
}