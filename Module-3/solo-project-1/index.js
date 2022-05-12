let value = document.getElementById("input")
let actualNumber = value.textContent
value.textContent = actualNumber

let conversionOne = document.getElementById("conversion1")
// meter to feet & vice virse
let valueInFeet = actualNumber * 3.281
let valueInMeters = actualNumber / 3.281
let meterToFeetConversion = actualNumber + " meters" + " = " + valueInFeet.toFixed(3) + " feet"
let feetToMeterConversion = actualNumber + " feet" + " = " + valueInMeters.toFixed(3) + " meters"
let conversion1 = meterToFeetConversion + " | " + feetToMeterConversion

conversionOne.textContent = conversion1

let conversionTwo = document.getElementById("conversion2")
// leter to gallons and vice virsa
let valueInLiters = actualNumber * 3.785
let valueInGallons = actualNumber / 3.785
let gallonsToLiters = actualNumber + " gallons" + " = " + valueInLiters.toFixed(3) + " liters"
let litersToGallons = actualNumber + " liters" + " = " + valueInGallons.toFixed(3) + " gallonss"
let conversion2 = gallonsToLiters + " | " + litersToGallons
conversionTwo.textContent = conversion2

let conversionThree = document.getElementById("conversion3")
let valueInKilograms = actualNumber / 2.205
let valueInPounds = actualNumber * 2.205
let poundsToKilogram = actualNumber + " pounds" + " = " + valueInKilograms.toFixed(3) + " kilos"
let kilosToPounds = actualNumber + " kilos" + " = " + valueInPounds.toFixed(3) + " pounds"
let conversion3 = kilosToPounds + " | " + poundsToKilogram

conversionThree.textContent = conversion3


