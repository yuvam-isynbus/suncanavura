<?php

namespace Database\Factories;

use App\Models\Application;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ApplicationFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Application::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "birth_date" => $this->faker->dateTimeBetween('-30 years', '-18 years'),
            'uuid' => $this->faker->uuid,
            "id_number" => $this->faker->numberBetween(10000001, 99999999),
            "id_start_date" => $this->faker->dateTimeBetween('-20 years', '-10 years'),
            "id_end_date" => $this->faker->dateTimeBetween('-9 years', '-1 years'),
            "country" => $this->faker->randomElement(["Hrvatska", "BiH", "Srbija"]),
            "street_address" => $this->faker->streetName,
            "home_number" => $this->faker->numberBetween(1, 99),
            "city" => $this->faker->city,
            "postal_code" => $this->faker->postcode,
            "university" => $this->faker->company . ' University',
            "university_program" => $this->faker->randomElement(["Preddiplomski", "Diplomski", "Integrirani", "Postdiplomski"]),
            "university_year" => $this->faker->randomElement(["1", "2", "3","4","5"]),
            "university_course" => $this->faker->sentence(5),
            "university_start_date" => $this->faker->dateTimeBetween('-4 years', '-2 years'),
            "university_end_date" => $this->faker->dateTimeBetween('+1 years', '+4 years'),
            "languages" => [],
            "health" => "OK",
            "terms" => true,
            "user_id" => 1,
            "created_at" => $date = $this->faker->dateTimeBetween('-1 years', '-2 days'),
            "updated_at" => $date,
        ];
    }
}
