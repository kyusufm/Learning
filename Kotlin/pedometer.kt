fun main() {
    val steps = 4000
    val caloriesBurned = pedometerStepsToCalories(steps);
    println("Walking $steps steps burns $caloriesBurned calories") 
}

fun pedometerStepsToCalories(numberOfSteps: Int): Double {
    val caloriesBurnedforEachStep = 0.04
    val totalCaloriesBurned = numberOfSteps * caloriesBurnedforEachStep
    return totalCaloriesBurned
}