<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServicesSeeder extends Seeder
{
  /**
   * Run the database seeds.
   */
  public function run(): void
  {
    DB::table('services')->insert(
      [
        [
          'id' => 1,
          'created_by' => '1',
          'name_long' => '...',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 2,
          'created_by' => '1',
          'name_long' => '...',
          'department_id' => 5,
          'notes' => '',
        ],

        [
          'id' => 3,
          'created_by' => '1',
          'name_long' => 'Koncertni glasovir Steinway D-274',
          'department_id' => 1,
          'notes' => '(nije moguć najam izvan Dvorane)'
        ],

        [
          'id' => 4,
          'created_by' => '1',
          'name_long' => 'Koncertni glasovir Grotrian-Steinweg',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 5,
          'created_by' => '1',
          'name_long' => 'Orgulje',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 6,
          'created_by' => '1',
          'name_long' => 'Čembalo Neupert',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 7,
          'created_by' => '1',
          'name_long' => 'Pianino Essex',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 8,
          'created_by' => '1',
          'name_long' => 'Harfa',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 9,
          'created_by' => '1',
          'name_long' => 'Ugađanje instrumenata',
          'department_id' => 1,
          'notes' => 'U dogovoru s korisnikom.',
        ],

        [
          'id' => 10,
          'created_by' => '1',
          'name_long' => 'Dodatni stolci (do 300 komada)',
          'department_id' => 1,
          'notes' => 'Do 300 komada.',
        ],

        [
          'id' => 11,
          'created_by' => '1',
          'name_long' => 'Stolac za kontrabas (do 8 komada)',
          'department_id' => 1,
          'notes' => 'Do 8 komada.',
        ],

        [
          'id' => 12,
          'created_by' => '1',
          'name_long' => 'Fotelje (do 50 komada)',
          'department_id' => 1,
          'notes' => 'Do 50 komada.',
        ],

        [
          'id' => 13,
          'created_by' => '1',
          'name_long' => 'Ukrasne fotelje (do 10 kom)',
          'department_id' => 1,
          'notes' => 'Do 10 kom.',
        ],

        [
          'id' => 14,
          'created_by' => '1',
          'name_long' => 'Dodatni pultovi za note (do 100 komada)',
          'department_id' => 1,
          'notes' => 'Do 100 komada.',
        ],

        [
          'id' => 15,
          'created_by' => '1',
          'name_long' => 'Dirigentski pult za note',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 16,
          'created_by' => '1',
          'name_long' => 'Svečana govornica LISINSKI',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 17,
          'created_by' => '1',
          'name_long' => 'Govornica drvo-pleksi',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 18,
          'created_by' => '1',
          'name_long' => 'Govornica pleksi',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 19,
          'created_by' => '1',
          'name_long' => 'Dirigentski podij',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 20,
          'created_by' => '1',
          'name_long' => 'Zastava Republike Hrvatske 6 m u Dvorani',
          'department_id' => 1,
          'notes' => 'U Dvorani.',
        ],

        [
          'id' => 21,
          'created_by' => '1',
          'name_long' => 'Zastava Republike Hrvatske 3 m (2 komada) u Dvorani',
          'department_id' => 1,
          'notes' => '2 komada u Dvorani.',
        ],

        [
          'id' => 22,
          'created_by' => '1',
          'name_long' => 'Zastava grada Zagreba 6 m u Dvorani',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 23,
          'created_by' => '1',
          'name_long' => 'Zastava grada Zagreba 3m',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 24,
          'created_by' => '1',
          'name_long' => 'Grb Republike Hrvatske u Dvorani',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 25,
          'created_by' => '1',
          'name_long' => 'Aluminijski praktikabl, 2 x 1 x 0,3 m',
          'department_id' => 1,
          'notes' => '6 kom.',
        ],

        [
          'id' => 26,
          'created_by' => '1',
          'name_long' => 'Aluminijski praktikabl, 2 x 1 x 0, 6 m (6 kom)',
          'department_id' => 1,
          'notes' => '6 kom.',
        ],

        [
          'id' => 27,
          'created_by' => '1',
          'name_long' => 'Stol dimenzije d 1, 80 x š 0 , 75 x v 0, 75 m (30 komada)',
          'department_id' => 1,
          'notes' => '30 kom.',
        ],

        [
          'id' => 28,
          'created_by' => '1',
          'name_long' => 'Stol dimenzije d 1, 80 x š 0, 75 x v 0, 75 m sa zaštitnom stolnom navlakom (20 komada)',
          'department_id' => 1,
          'notes' => '20 kom.',
        ],

        [
          'id' => 29,
          'created_by' => '1',
          'name_long' => 'Paravan smeđi 2, 6 x 1,2 m (33 komada)',
          'department_id' => 1,
          'notes' => '33 kom.',
        ],

        [
          'id' => 30,
          'created_by' => '1',
          'name_long' => 'Paravan crni 2, 3 x 1, 3 m (10 komada)',
          'department_id' => 1,
          'notes' => '10 kom.',
        ],

        [
          'id' => 31,
          'created_by' => '1',
          'name_long' => 'Baletni pod 150 m2 (5 rola d 15 x š 2 m)',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 32,
          'created_by' => '1',
          'name_long' => 'Lampice za notne pultove (50 komada) i produžni strujni kabel',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 33,
          'created_by' => '1',
          'name_long' => 'Sustav simultanog prevođenja - 2 jezika (do 100 prijamnika)',
          'department_id' => 1,
          'notes' => '2 jezika (do 100 prijamnika).',
        ],

        [
          'id' => 34,
          'created_by' => '1',
          'name_long' => 'Sustav simultanog prevođenja - 2 jezika (do 200 prijamnika)',
          'department_id' => 1,
          'notes' => '2 jezika (do 200 prijamnika).',
        ],

        [
          'id' => 35,
          'created_by' => '1',
          'name_long' => 'Sustav simultanog prevođenja - 2 jezika (300 prijamnika)',
          'department_id' => 1,
          'notes' => '2 jezika (300 prijamnika).',
        ],

        [
          'id' => 36,
          'created_by' => '1',
          'name_long' => 'Sustav simultanog prevođenja - do 9 jezika (do 100 prijamnika)',
          'department_id' => 1,
          'notes' => 'Do 9 jezika (do 100 prijamnika).',
        ],

        [
          'id' => 37,
          'created_by' => '1',
          'name_long' => 'Sustav simultanog prevođenja - do 9 jezika (do 300 prijamnika)',
          'department_id' => 1,
          'notes' => 'Do 9 jezika (do 300 prijamnika).',
        ],

        [
          'id' => 38,
          'created_by' => '1',
          'name_long' => 'Sustav simultanog prevođenja - do 9 jezika (do 600 prijamnika)',
          'department_id' => 1,
          'notes' => 'Do 9 jezika (do 600 prijamnika).',
        ],

        [
          'id' => 39,
          'created_by' => '1',
          'name_long' => 'Sustav simultanog prevođenja - do 9 jezika (do 900 prijamnika)',
          'department_id' => 1,
          'notes' => 'Do 9 jezika (do 900 prijamnika).',
        ],

        [
          'id' => 40,
          'created_by' => '1',
          'name_long' => 'Sustav simultanog prevođenja - do 9 jezika (do 1200 prijamnika)',
          'department_id' => 1,
          'notes' => 'Do 9 jezika (do 1200 prijamnika).',
        ],

        [
          'id' => 41,
          'created_by' => '1',
          'name_long' => 'HAZER MDG ATMe',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 42,
          'created_by' => '1',
          'name_long' => 'Look Solutions Unique 2.1 Haze dim mašina',
          'department_id' => 1,
          'notes' => '1 kom.',
        ],

        [
          'id' => 43,
          'created_by' => '1',
          'name_long' => 'Follow spot Robert Juliat Arthur LED',
          'department_id' => 1,
          'notes' => '1 kom.',
        ],

        [
          'id' => 44,
          'created_by' => '1',
          'name_long' => 'Robe Robin LEDBeam 350',
          'department_id' => 1,
          'notes' => '6 kom.',
        ],

        [
          'id' => 45,
          'created_by' => '1',
          'name_long' => 'CLF Yara LED PAR RGBW',
          'department_id' => 1,
          'notes' => '10 kom.',
        ],

        [
          'id' => 46,
          'created_by' => '1',
          'name_long' => 'Prolights Lumipix 16H LED Bar',
          'department_id' => 1,
          'notes' => '10 kom.',
        ],

        [
          'id' => 47,
          'created_by' => '1',
          'name_long' => 'Prolights Sunrise2 LED Blinder',
          'department_id' => 1,
          'notes' => '6 kom.',
        ],

        [
          'id' => 48,
          'created_by' => '1',
          'name_long' => 'Astera Ax9 Power PAR',
          'department_id' => 1,
          'notes' => '8 kom.',
        ],

        [
          'id' => 49,
          'created_by' => '1',
          'name_long' => 'Televizor LCD 65” 4K s podnim stalkom',
          'department_id' => 1,
          'notes' => '2 kom.',
        ],

        [
          'id' => 50,
          'created_by' => '1',
          'name_long' => 'Rad dodatnog inspicijenta',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 51,
          'created_by' => '1',
          'name_long' => 'Rad majstora rasvjete',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 52,
          'created_by' => '1',
          'name_long' => 'Rad tonskog majstora',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 53,
          'created_by' => '1',
          'name_long' => 'Rad tonskog tehničara',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 54,
          'created_by' => '1',
          'name_long' => 'Usluge marketinga',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 55,
          'created_by' => '1',
          'name_long' => 'Pomoć pri montaži scenografije',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 56,
          'created_by' => '1',
          'name_long' => 'Pomoć pri montaži izložbe',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 57,
          'created_by' => '1',
          'name_long' => 'Rad dodatnog tehničkog radnika',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 58,
          'created_by' => '1',
          'name_long' => 'Rad dodatnog tehničkog radnika',
          'department_id' => 1,
          'notes' => '',
        ],

        [
          'id' => 60,
          'created_by' => '1',
          'name_long' => 'Projekcijsko platno 13 x 6 m',
          'department_id' => 1,
          'notes' => 'Projekcijska tehnika',
        ],

        [
          'id' => 61,
          'created_by' => '1',
          'name_long' => 'Projekcijsko platno 19 x 9 m',
          'department_id' => 1,
          'notes' => 'Projekcijska tehnika',
        ],

        [
          'id' => 62,
          'created_by' => '1',
          'name_long' => 'Projekcijsko platno 4 x 3m',
          'department_id' => 1,
          'notes' => 'Projekcijska tehnika',
        ],

        [
          'id' => 63,
          'created_by' => '1',
          'name_long' => 'Projekcijsko platno 7 x 7m',
          'department_id' => 1,
          'notes' => 'Projekcijska tehnika',
        ],

        [
          'id' => 64,
          'created_by' => '1',
          'name_long' => 'Videoprojektor Panasonic PT-MZ670 + platno',
          'department_id' => 1,
          'notes' => 'Projekcijska tehnika',
        ],

        [
          'id' => 65,
          'created_by' => '1',
          'name_long' => 'Mali komplet rasvjete',
          'department_id' => 3,
          'notes' => 'Ukupna snaga 40 kW, regulator 100 kanala, reflektori F 2, 5 kW (6 komada), F 5 kW (8 komada), \nPAR 64 (30 komada), P 2 kW (6 komada), AVOLITES PEARL EXPERT,rad dvojice rasvjetljivača.',
        ],

        [
          'id' => 66,
          'created_by' => '1',
          'name_long' => 'Veliki komplet rasvjete',
          'department_id' => 3,
          'notes' => 'Ukupna snaga 160 kW. regulator 100 kanala, reflektori: F 2, 5 kW (10 komada), 9.000.00 F 5 kW (15 komada), \nPAR 64 (50 komada),P 2 kW (10 komada),AVOLITES PEARL EXPERT, rad dvojice rasvjetljivača i majstora rasvjete.',
        ],

        [
          'id' => 67,
          'created_by' => '1',
          'name_long' => 'Veliki komplet + inteligentna rasvjeta (18 moving headova) + HAZER MDG ATMe',
          'department_id' => 3,
          'notes' => '',
        ],

        [
          'id' => 68,
          'created_by' => '1',
          'name_long' => 'Mali komplet standardne rasvjete',
          'department_id' => 3,
          'notes' => 'Ukupna snaga 30 kW,regulator ETC ELEMENT 60, reflektori:\nQuartet 22/40 650 W (6 komada) Strand F 1 kW (4 komada)\nNocturne 500 W (16 komada) Alto PC 1 kW (4 komada)\nCantata 26/44 1 kW (6 komada) 1 kW PC (6 komada), 1 kW spot (2 komada),\nrad rasvjetljivača.',
        ],

        [
          'id' => 69,
          'created_by' => '1',
          'name_long' => 'Veliki komplet standardne rasvjete',
          'department_id' => 3,
          'notes' => 'Ukupna snaga 50 kW, regulator ETC ELEMENT 60, reflektori:\nQuartet 22/40 650 W (10 komada) Strand F 1 kW (4 komada)\nNocturne 500 W (32 komada) Alto PC 1 kW (4 komada)\nCantata 26/44 1 kW (12 komada) 1 kW PC (12 komada) 1 kW spot (2 komada),\nrad rasvjetljivača i majstora rasvjete.',
        ],

        [
          'id' => 70,
          'created_by' => '1',
          'name_long' => 'Ozvučenje za govorne priredbe',
          'department_id' => 2,
          'notes' => 'JBL Vertec line array VT 4888DP+4882DP 40 kW: 24 kanalni mix-pult u režiji Yamaha DM 2000, mikrofoni Shure,\nSennheiser, AKG, (max. 6 kom), CD/MD reproduktor, rad tonskog tehničara.',
        ],

        [
          'id' => 71,
          'created_by' => '1',
          'name_long' => 'Malo koncertno ozvučenje',
          'department_id' => 2,
          'notes' => 'Ozvučenje za filmske projekcije JBL Vertec line array VT4888DP+4882DP 40 kW, 48-kanalni mix-pult Yamaha PM5DRH, 60-kanalni mikrofonski spliter Klark Teknik DN 1248, mikrofoni: Shure, Sennheiser, AKG, EV, DI-BSS, bežični Shure\nUHF-R (6 kom.) Bežični Shure ULX-D (4 kom), monitorski zvučnici JBL SRX 712M (6 kom), surround JBL Control\n322C, Dolby processor CP-5, CD reproduktor, rad tonskog majstora i tonskog tehničara, Vertec line array zvučnici.',
        ],

        [
          'id' => 72,
          'created_by' => '1',
          'name_long' => 'Veliko koncertno ozvučenje',
          'department_id' => 2,
          'notes' => 'JBL Vertec line array VT 4888DP+4882DP 40 kW, 48-kanalni mix-pult Yamaha PM5D, 60-kanalni mikrofonski spliter\nKlark Teknik DN 1248, mikrofoni: Shure, Sennheiser, AKG, EV, DIBSS, bežični Shure UHF-R (6 kom), bežični Shure\nULX-D (4 kom), monitorski razglas: 48 kanalni mix-pult Yamaha M7CL, monitorski zvučnici JBL SRX 712M (12 kom)\nVRX 915M (2 kom), surround JBL Control 322C, Dolby processor CP-5, CD reproduktor, rad tonskog majstora i\ndvojice tonskih tehničara.',
        ],

        [
          'id' => 73,
          'created_by' => '1',
          'name_long' => 'Malo ozvučenje 6 kw',
          'department_id' => 2,
          'notes' => '40-kanalni tonski pult, do tri mikrofona; CD, reproduktor; rad tonskog tehničara.',
        ],

        [
          'id' => 74,
          'created_by' => '1',
          'name_long' => 'Koncertno ozvučenje 6 kW',
          'department_id' => 2,
          'notes' => '32-kanalni tonski pult, Yamaha QL1 do 30 mikrofona, CD reproduktor, 40-kanalni mikrofonski razdjelnik, do 6\nmonitorskih zvučnika, rad tonskog majstora i tonskog tehničara.',
        ],

        [
          'id' => 75,
          'created_by' => '1',
          'name_long' => 'Ozvučenje u foajeu VD',
          'department_id' => 2,
          'notes' => '2 kW 16-kanalni tonski pult, do 16 mikrofona, elektronički efekt, CD reproduktor, rad tonskog tehničara',
        ],

        [
          'id' => 76,
          'created_by' => '1',
          'name_long' => 'Ozvučenje u foajeu MD',
          'department_id' => 2,
          'notes' => '1 kW do 3 mikrofona, elektronički efekt, CD reproduktor, rad tonskog tehničara.',
        ],

        [
          'id' => 77,
          'created_by' => '1',
          'name_long' => 'Ozvučenje u ostalim prostorima',
          'department_id' => 2,
          'notes' => '1 kW do 3 mikrofona, CD reproduktor, rad tonskog tehničara.',
        ],

        [
          'id' => 79,
          'created_by' => '1',
          'name_long' => 'Ozvučenje za ambijentalnu glazbu u prostoru za publiku FMD',
          'department_id' => 2,
          'notes' => 'Foaje Male dvorane',
        ],

        [
          'id' => 80,
          'created_by' => '1',
          'name_long' => 'Ozvučenje za ambijentalnu glazbu u prostoru za publiku FVD',
          'department_id' => 2,
          'notes' => 'Foaje Velike dvorane',
        ],

        [
          'id' => 81,
          'created_by' => '1',
          'name_long' => 'Bežični mikrofon',
          'department_id' => 6,
          'notes' => '',
        ],

        [
          'id' => 82,
          'created_by' => '1',
          'name_long' => 'Dodatni elektronički tonski efekti',
          'department_id' => 6,
          'notes' => '',
        ],

        [
          'id' => 84,
          'created_by' => '1',
          'name_long' => 'Mikrofonski razdjelnik (spliter) max 40 kanala MD',
          'department_id' => 6,
          'notes' => 'Mala dvorana',
        ],

        [
          'id' => 85,
          'created_by' => '1',
          'name_long' => 'Mikrofonski razdjelnik (spliter) max. 60 kanala VD',
          'department_id' => 6,
          'notes' => 'Velika dvorana',
        ],

        [
          'id' => 86,
          'created_by' => '1',
          'name_long' => 'Korištenje visećeg stereo mikrofona u VD (max. 2 komada)',
          'department_id' => 6,
          'notes' => 'Velika dvorana',
        ],

        [
          'id' => 87,
          'created_by' => '1',
          'name_long' => 'Dokumentarno snimanje govornih priredbi',
          'department_id' => 6,
          'notes' => '',
        ],

        [
          'id' => 88,
          'created_by' => '1',
          'name_long' => 'Usluga korištenja internetske veze za prijenos uživo',
          'department_id' => 6,
          'notes' => '',
        ],

        [
          'id' => 89,
          'created_by' => '1',
          'name_long' => 'Usluga uređenja prostora Dvorane',
          'department_id' => 6,
          'notes' => 'Velika dvorana, Mala dvorana i ostali prostori.',
        ],

      ]

    );
  }
}
