import React, { useState } from "react";

// BMI Category Helper
const getBMICategory = (bmi) => {
  if (bmi === 0) return { category: "", color: "text-gray-400" };
  if (bmi < 18.5) return { category: "Underweight", color: "text-yellow-400" };
  if (bmi >= 18.5 && bmi < 24.9)
    return { category: "Normal Weight", color: "text-green-400" };
  if (bmi >= 25 && bmi < 29.9)
    return { category: "Overweight", color: "text-orange-400" };
  return { category: "Obese", color: "text-red-600" };
};

// Activity Factors for TDEE
const activityLevels = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  veryActive: 1.9,
};

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activity, setActivity] = useState("");
  const [bmi, setBmi] = useState(0);
  const [bmr, setBmr] = useState(0);
  const [tdee, setTdee] = useState(0);
  const [message, setMessage] = useState("");

  const calculateAll = (e) => {
    e.preventDefault();

    // Validation
    if (
      !height ||
      !weight ||
      !age ||
      !gender ||
      !activity ||
      height <= 0 ||
      weight <= 0 ||
      age <= 0
    ) {
      setMessage("Please fill in all fields with valid values.");
      setBmi(0);
      setBmr(0);
      setTdee(0);
      return;
    }

    // BMI
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    const calculatedBmi = w / (h * h);
    setBmi(calculatedBmi.toFixed(1));

    // BMR (Harris-Benedict Equation)
    let calculatedBmr = 0;
    if (gender === "male") {
      calculatedBmr = 88.36 + 13.4 * w + 4.8 * height - 5.7 * age;
    } else if (gender === "female") {
      calculatedBmr = 447.6 + 9.2 * w + 3.1 * height - 4.3 * age;
    }

    setBmr(calculatedBmr.toFixed(0));

    // TDEE = BMR × Activity Factor
    const calculatedTdee = calculatedBmr * activityLevels[activity];
    setTdee(calculatedTdee.toFixed(0));

    setMessage("");
  };

  const { category, color } = getBMICategory(parseFloat(bmi));

  return (
    <div className="md:min-h-screen bg-black flex items-center justify-center p-4 font-sans">
      <div className="max-w-4xl w-full bg-[#1a1a1a] shadow-2xl rounded-lg overflow-hidden md:flex relative min-h-[500px]">
        

        {/* Left Form */}
        <div className="md:w-3/5 p-8 lg:p-12 z-10 text-white">
          <header className="mb-8">
            <p className="text-xs tracking-widest text-red-500 font-medium mb-1">
              GET INTO SHAPE, NOW!
            </p>
            <h1 className="text-3xl font-bold tracking-wide">BMI CALCULATOR</h1>
          </header>

          <p className="text-sm text-gray-400 mb-8">
            Calculate your Body Mass Index (BMI), Basal Metabolic Rate (BMR),
            and Total Daily Energy Expenditure (TDEE) to understand your body’s
            needs better.
          </p>

          <form onSubmit={calculateAll} className="space-y-4">
            {/* Height / Weight */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Height / cm"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full bg-[#2a2a2a] text-white p-3 rounded-md focus:ring-red-500 focus:border-red-500 border border-transparent placeholder-gray-500 outline-none"
              />
              <input
                type="number"
                placeholder="Weight / kg"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-[#2a2a2a] text-white p-3 rounded-md focus:ring-red-500 focus:border-red-500 border border-transparent placeholder-gray-500 outline-none"
              />
            </div>

            {/* Age / Gender */}
            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full bg-[#2a2a2a] text-white p-3 rounded-md border border-transparent placeholder-gray-500 outline-none"
              />
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full bg-[#2a2a2a] text-gray-300 p-3 rounded-md border border-transparent outline-none"
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

            {/* Activity Factor */}
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full bg-[#2a2a2a] text-gray-300 p-3 rounded-md border border-transparent outline-none"
            >
              <option value="">Select an activity factor</option>
              <option value="sedentary">
                Sedentary (little or no exercise)
              </option>
              <option value="light">Lightly Active (1–3 days/week)</option>
              <option value="moderate">
                Moderately Active (3–5 days/week)
              </option>
              <option value="active">Active (6–7 days/week)</option>
              <option value="veryActive">
                Very Active (intense exercise daily)
              </option>
            </select>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-md transition duration-300 mt-6"
            >
              CALCULATE
            </button>

            {message && (
              <p className="text-red-400 text-center pt-2">{message}</p>
            )}
          </form>
        </div>

        {/* Right Result */}
        <div className="md:w-2/5 flex flex-col items-center justify-center p-8 lg:p-12 text-center z-10 bg-red-600/10 md:bg-transparent">
          <p className="text-xl font-light text-white mb-4">Your BMI is</p>
          <div className="text-9xl font-extrabold tracking-tight text-white mb-4">
            {bmi || "--"}
          </div>
          <p className={`text-2xl font-semibold ${color}`}>{category}</p>

          {bmr > 0 && (
            <div className="mt-6 text-gray-300 text-sm space-y-1">
              <p>
                <span className="font-semibold text-white">BMR:</span> {bmr}{" "}
                kcal/day
              </p>
              <p>
                <span className="font-semibold text-white">TDEE:</span> {tdee}{" "}
                kcal/day
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
