<?php

use Illuminate\Database\Seeder;

class UsuariosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('usuarios')->insert([
            'Nombre' => 'Adrián',
            'Apellido1' => 'Santos',
            'Apellido2' => 'Mena',
            'Expediente' => '21619919',
            'Constraseña' => '1234',
            'Email' => 'santos2menaaa@gmail.com',
            'Telefono' => '608650958'
        ]);
        DB::table('usuarios')->insert([
            'Nombre' => 'Javier',
            'Apellido1' => 'Cai',
            'Apellido2' => 'Lin',
            'Expediente' => '24323323',
            'Constraseña' => '4321',
            'Email' => 'jcl4332@gmail.com',
            'Telefono' => '654345645'
        ]);
    }
}
