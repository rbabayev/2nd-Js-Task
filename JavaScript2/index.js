// 1. Valyuta konvertorunu yaz. İstifadəçi ABŞ dolları miqdarını daxil edir, çevirmək istədiyi
// valyutu seçir: EUR, UAH və ya AZN, və cavab olaraq müvafiq məbləği alır.
var dollar = prompt("Enter Dollar$ : ");
var money = prompt("Enter money (eur,uah,azn) :  ");

if ((money.toLowerCase = "eur")) {
  console.log("dollar -> eur = " + Number(dollar) * 0.93);
} else if ((money.toLowerCase = "uah")) {
  console.log("dollar -> uah = " + Number(dollar) * 39.26);
} else if ((money.toLowerCase = "azn")) {
  console.log("dollar -> azn = " + Number(dollar) * 1.7);
} else {
  console.log("Wrong money type !");
}

// 2. İstifadəçidən alış-verişin məbləğini soruş və endirimlə ödəmə məbləğini göstər: 200-dən
// 300-ə qədər - 3% endirim, 300-dən 500-ə qədər - 5% endirim, 500-dən yuxarı - 7% endirim.
var cash = prompt("Purchase cost : ");

if (200 < cash < 300) {
  console.log(
    "Original cost" + Number(cash) + "\nDiscount cost : " + Number(cash) * 0.97
  );
} else if (300 < cash < 500) {
  console.log(
    "Original cost" + Number(cash) + "\nDiscount cost : " + Number(cash) * 0.95
  );
} else if (500 < cash) {
  console.log(
    "Original cost" + Number(cash) + "\nDiscount cost : " + Number(cash) * 0.93
  );
} else {
  console.log("!!! Error !!!");
}

// 3. İstifadəçidən cevrenin uzunlugu və kvadratın perimetri soruş və belə bir dairənin göstərilən
// kvadrata sığacağını müəyyənləşdir.
var circleLength = prompt("Cevrenin uzunlugunu daxil edin (π olaraq) : ");
var squarePerimetr = prompt("Dordbucagin perimetrini daxil edin : ");
var verification = circleLength * 4;

if (squarePerimetr >= verification) {
  console.log("Correct size");
} else {
  console.log("Wrong size");
}

// 4. İstifadəçiyə 3 sual ver, hər bir sual üç cavab variantı ilə. Hər doğru cavab üçün 2 bal verilir.
// Suallardan sonra istifadəçiyə qazanılan bələdçi balı göstər.
var score = 0;

var answer1 = prompt(
  "Question 1: Azerbaycanin paytaxti haradir ?\nA) Gence\nB) Baki\nC) Naxcivan"
);
if (answer1.toUpperCase() === "B") {
  score += 2;
}

var answer2 = prompt(
  "Question 2: En son futbol uzre dunya cempionu hansi olke oldu ?\nA) Argentina\nB) Azerbaycan\nC) Fransa"
);
if (answer2.toUpperCase() === "A") {
  score += 2;
}

var answer3 = prompt(
  "Question 3: Dunyanin en boyuk olkesi hansidir ?\nA) Rusiya \nB) Amerika\nC) Cin"
);
if (answer3.toUpperCase() === "A") {
  score += 2;
}

console.log("User score : " + score);

// 5. Tarixi soruş (gün, ay, il) və onun ardınca gələn tarixi göstər. Növbəti ay, il və ya dövr
// keçidini nəzərə alın, həmçinin dövr varlığını.
var startDay = prompt("Start day: ");
var startMonth = prompt("Start month: ");
var startYear = prompt("Start year: ");

var startDate = new Date(startYear, startMonth, startDay);

var nextDay = new Date(startDate.getTime() + 24 * 60 * 60 * 1000);
var nextMonth = new Date(startDate.getMonth() + 1);
var nextYear = new Date(startDate.getFullYear() + 1);

var nextDate = new Date(nextYear, nextMonth, nextDay);

console.log("Start date: " + startDate.toLocaleDateString());
console.log("Next date: " + nextDate.toLocaleDateString());
// Ev tapşırığı №3
// 6. Həftə gününün çıxışını dövrə salın: "Həftə günü. Növbəti günü görmək istəyirsiniz?" və
// istifadəçi OK düyməsini basana qədər belə davam edir.
while (true) {
  var currentDate = new Date();
  console.log("Today's date: " + currentDate.toLocaleDateString());
  var answer = prompt("Want to see the next date? (Ok/No)");
  if (answer.toLowerCase() === "ok") {
    currentDate.setDate(currentDate.getDate() + 1);
  } else {
    break;
  }
}

// 7. Bütün 2-dən 9-a qədər rəqəmlərin vurma cədvəlini göstərin. Hər rəqəmi 1-dən 10-a qədər
// rəqəmlərlə vurun.
for (var i = 2; i < 10; i++) {
  for (var j = 1; j <= 10; j++) {
    var result = i * j;
    console.log(i + " x " + j + " = " + result);
  }
}
// —-----------------------------------
// Avtomobil haqqında məlumatları təsvir edən obyekt yaradın (istehsalçı, model, buraxılış ili,
// orta sürət), və bu obyekt ilə işləmək üçün aşağıdakı funksiyaları yaradın.
var car = {
  istehsalci: "Mercedes",
  model: "C 300",
  buraxilisIli: 2018,
  ortaSuret: 120,
};
// 1. Avtomobil haqqında məlumatları ekrana çıxaran funksiya.
function carData(car) {
  console.log("İstehsalçı: " + car.istehsalci);
  console.log("Model: " + car.model);
  console.log("Buraxılış ili: " + car.buraxilisIli);
  console.log("Orta sürət: " + car.ortaSuret + " km/h");
}
// 2. Verilən məsafəni orta sürətlə qət edərkən lazım olan zamanı hesablamaq üçün funksiya
// yaradın. Sürət əsasında hər 4 saatda bir sürücünün 1 saatlik istirahət etməsinin vacib
// olduğunu nəzərə alın.
function timeFinder(mesafe, ortaSuret) {
  var totalTime = mesafe / ortaSuret;
  var restTime = Math.floor(totalTime / 4);
  var totalRestTime = totalTime + restTime;

  return totalRestTime;
}
