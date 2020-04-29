<?php

use Illuminate\Database\Seeder;

class IncidenciaStateLogsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('incidencia_state_logs')->insert([
            'incidencia_id' => 8,
            'user_id'       => 3,
            'state'      => 'doing',
            'comment'          => '',
            'date'     => '2020-04-25 20:45:13'
        ]);

        DB::table('incidencia_state_logs')->insert([
            'incidencia_id' => 8,
            'user_id'       => 5,
            'state'      => 'blocked',
            'comment'          => 'La incidencia se ha bloqueado porque falta el software necesario para llevarla a cabo.',
            'date'     => '2020-04-26 20:45:13'
        ]);

        DB::table('incidencia_state_logs')->insert([
            'incidencia_id' => 8,
            'user_id'       => 3,
            'state'      => 'doing',
            'comment'          => '',
            'date'     => '2020-04-28 20:45:13'
        ]);
        DB::table('incidencia_state_logs')->insert([
            'incidencia_id' => 8,
            'user_id'       => 3,
            'state'      => 'done',
            'comment'          => '',
            'date'     => '2020-04-30 20:45:13'
        ]);
    }
}
