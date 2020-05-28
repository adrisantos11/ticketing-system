<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsuariosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name'      => 'Maria Belén',
            'surname1'  => 'Mena',
            'surname2'  => 'Román',
            'exp'       => '23423323',
            'password'  => Hash::make('123456'),
            'email'     => 'mbmena1966@gmail.com',
            'phone'     => '660200506',
            'role'      => 'visitor',
            'image_url' => '/images/default-profile-image.jpg'
        ]);

        DB::table('users')->insert([
            'name'      => 'Javier',
            'surname1'  => 'Cai',
            'surname2'  => 'Lin',
            'exp'       => '24323323',
            'password'  => Hash::make('123456'),
            'email'     => 'jcl4332@gmail.com',
            'phone'     => '654345645',
            'role'      => 'supervisor'
        ]);

        DB::table('users')->insert([
            'name'      => 'Adrian',
            'surname1'  => 'Santos',
            'surname2'  => 'Mena',
            'exp'       => '21619919',
            'password'  => Hash::make('123456'),
            'email'     => 'santos2menaaa@gmail.com',
            'phone'     => '608650958',
            'role'      => 'supervisor',
            'image_url' => '/images/adrian-santos.png'
        ]);

        DB::table('users')->insert([
            'name'      => 'Emilio Manuel',
            'surname1'  => 'Santos',
            'surname2'  => 'Cañon',
            'exp'       => '21616161',
            'password'  => Hash::make('123456'),
            'email'     => 'manolitogafotas1966@gmail.com',
            'phone'     => '123456789',
            'role'      => 'technical',
            'image_url' => '/images/emilio-manuel-santos.png'
        ]);

        DB::table('users')->insert([
            'name'      => 'Pablo',
            'surname1'  => 'Elias',
            'surname2'  => 'Caballero',
            'exp'       => '12345678',
            'password'  => Hash::make('123456'),
            'email'     => 'pablitoelias.elias@gmail.com',
            'phone'     => '123456789',
            'role'      => 'technical',
            'image_url' => '/images/pablo-elias.jpeg'
        ]);

        DB::table('users')->insert([
            'name'      => 'Adrian',
            'surname1'  => 'Santos',
            'surname2'  => 'Mena 2',
            'exp'       => '00000000',
            'password'  => Hash::make('123456'),
            'email'     => 'adrian.santos2mena@gmail.com',
            'phone'     => '123456789',
            'role'      => 'technical',
            'image_url' => '/images/default-profile-image.jpg'
        ]);

        DB::table('users')->insert([
            'name'      => 'Usuario',
            'surname1'  => 'Visitante',
            'surname2'  => 'Nº 1',
            'exp'       => '11111111',
            'password'  => Hash::make('123456'),
            'email'     => 'ejemplo@gmail.com',
            'phone'     => '000000000',
            'role'      => 'visitor',
            'image_url' => '/images/default-profile-image.jpg'
        ]);
    }
}
