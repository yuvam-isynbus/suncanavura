<?php

namespace Database\Factories;

use App\Models\WorkTravel;
use Illuminate\Database\Eloquent\Factories\Factory;

class WorkTravelFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = WorkTravel::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'price' => $this->faker->numberBetween(10000, 50000)
        ];
    }
}