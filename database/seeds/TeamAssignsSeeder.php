<?php

use Illuminate\Database\Seeder;

class TeamAssignsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('team_assigns')->insert([
            'id_user' => 5,
            'id_team' => 1
        ]);

        DB::table('team_assigns')->insert([
            'id_user' => 4,
            'id_team' => 2
        ]);
        DB::table('team_assigns')->insert([
            'id_user' => 4,
            'id_team' => 3
        ]);
        DB::table('team_assigns')->insert([
            'id_user' => 5,
            'id_team' => 2
        ]);
        DB::table('team_assigns')->insert([
            'id_user' => 5,
            'id_team' => 3
        ]);
    }
}
