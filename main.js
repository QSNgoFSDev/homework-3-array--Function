// Excercise 3

// ------- Function + Array -----

// 1. Viết hàm 'describeCountry' nhận ba tham số: 'country', 'population' và 'capitalCity'. Dựa vào input này, hàm trả về string với định dạng như sau: 'Finland has 6 million people and its capital city is Helsinki'.

// var country = String.country;
// var population = String.population;
// var capitalCity = String.capitalCity;

function describeCountry(country, population, capitalCity) {
  return (
    country +
    " has " +
    population +
    " millions people abd its capital city is " +
    capitalCity
  );
}

var Germandetails = describeCountry("German", 200, "Brelin");
var Englanddetails = describeCountry("England", 100, "London");
var Frenchdetails = describeCountry("French", 150, "Paris");

console.log(Germandetails);
console.log(Englanddetails);
console.log(Frenchdetails);

// 2. Khai báo hàm với biểu thức hàm
// Dân số thế giới là 7.9 tỷ người. Tạo khai báo hàm 'percentageOfWorld1' nhận một giá trị 'population' và trả về phần trăm dân số thế giới theo dân số đã cho. Ví dụ: Trung Quốc có 1.441 tỷ người, chiếm 18.2% dân số thế giới.

const totalpop = 7.9;
var chinapop = 1.4;
var vietnampop = 0.12;
var indopop = 0.3;

function percentageOfWorld1(population, totalpop) {
  return (population / totalpop) * 100;
}

var Chinapoppercent = percentageOfWorld1(chinapop, totalpop);
var Vietnampoppercent = percentageOfWorld1(vietnampop, totalpop);
var Indonesiapoppercent = percentageOfWorld1(indopop, totalpop);

// Gọi 'percentageOfWorld1' cho 3 dân số của các quốc gia bất kỳ, lưu kết quả vào các biến và in chúng ra console.

console.log(
  "ChiNa has " +
    chinapop +
    " billions people take " +
    Chinapoppercent +
    "% population of the world"
);
console.log(
  "VietNam has " +
    vietnampop +
    " billions take " +
    Vietnampoppercent +
    "% population of the world"
);
console.log(
  "Indo has " +
    indopop +
    " billions people take " +
    Indonesiapoppercent +
    " % population of the world"
);

// Tạo biểu thức hàm thực hiện điều tương tự, gọi là 'percentageOfWorld2' và cũng gọi nó với 3 dân số theo quốc gia (có thể có cùng số dân). (mọi người có thể bỏ qua phần này)

function percentageOfWorld2(popcountry1, popcountry2, popcountry3) {
  return (
    percentageOfWorld1(popcountry1, totalpop) +
    percentageOfWorld1(popcountry2, totalpop) +
    percentageOfWorld1(popcountry3, totalpop)
  );
}

var avg3countries = percentageOfWorld2(1.3, 3, 2);
console.log("total percent of 3 counries is" + avg3countries);

// 3. Hàm gọi hàm
// Tạo một hàm là 'describePopulation'. Hàm này nhận hai đối số là 'country' và 'population', và trả về string như sau: 'China has 1441 million people, which is about 18.2% of the world'.
// Để tính phần trăm 'describePopulation', hãy gọi 'percentageOfWorld1' mà bạn đã tạo trước đó.
// Gọi 'describePopulation' với dữ liệu cho 3 nước bất kỳ.

// 4. Giới thiệu về Array
// Tạo một array chứa 4 giá trị dân số của 4 quốc gia bất kỳ. Lưu array này vào một biến là 'populations'. In ra console xem liệu array có 4 phần tử hay không (true hoặc false).

var population = [1.4, 0.3, 0.12, 1];

population.length === 4 ? true : false;

console.log(population.length === 4 ? true : false);

console.log(population);

// Tạo một array là 'percentages' có chứa phần trăm dân số thế giới của 4 giá trị dân số đó. Sử dụng hàm 'percentageOfWorld1' mà bạn đã tạo trước đó để tính toán 4 giá trị phần trăm.

var Indiapoppercent = percentageOfWorld1(1, totalpop);

var percentages = [
  Chinapoppercent,
  Vietnampoppercent,
  Indonesiapoppercent,
  Indiapoppercent,
];
// 5. Các phép toán cơ bản với array
// Tạo một array chứa tất cả các nước láng giềng của một nước bất kỳ. Chọn một nước có ít nhất 2 hoặc 3 nước láng giềng. Lưu array vào biến 'neighbours'.

var neighbours = ["Laos", "Cam", "China"];
// Ở một số thời điểm, một đất nước mới là 'Utopia' được tạo ra trong vùng lân cận của quốc gia bạn chọn. Vậy hãy thêm nó vào cuối array 'neighbours'.
neighbours.push("Utopia");

console.log(neighbours);

// Không may, sau một thời gian, nước mới này biến mất. Vậy hãy xóa nó khỏi cuối array.

neighbours.pop();
console.log(neighbours);
// Nếu array 'neighbours' không chứa nước 'Germany', hãy in ra console rằng: 'Probably not a central European country :D'.

console.log(
  neighbours.includes("Germany")
    ? True
    : "Probably not a central European country :D"
);
// Thay đổi tên của một trong các nước láng giềng của bạn. Để thực hiện điều đó, hãy tìm chỉ mục của đất nước trong array 'neighbours', rồi sử dụng nó để thay đổi array ở vị trí chỉ mục đó. Chẳng hạn, nếu bạn tìm thấy 'Sweden' trong array, hãy thay nó bằng 'Republic of Sweden'.

neighbours.unshift("Sweeden");
neighbours[0] = "Republic of Sweden";
console.log(neighbours);
// 6. Đội nào chiến thắng?

// Có hai đội thể dục dụng cụ: Dolphins và Koalas! Mỗi đội thi đấu 3 lần, sau đó tính trung bình 3 lượt điểm số (điểm trung bình mỗi đội). Một đội sẽ giành chiến thắng chỉ khi có số điểm trung bình ít nhất là gấp đôi so với điểm của đội còn lại. Nếu không, sẽ không có đội nào thắng cả!

function calcAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

function checkWinner(avgDolphins, avgKoalas) {
  return avgDolphins >= 2 * avgKoalas
    ? console.log("Koalas win " + avgDolphins + " vs. " + avgKoalas)
    : avgKoalas >= 2 * avgDolphins
    ? console.log("Dolphins win " + avgKoalas + " vs. " + avgDolphins)
    : console.log("no one wins");
}

var DolphinsScores1 = 44;
var DolphinsScores2 = 23;
var DolphinsScires3 = 71;

var KoalasScore1 = 65;
var KoalasScore2 = 54;
var KoalasScore3 = 49;

// test dataset 1

var avgDolphinsTest1 = calcAverage(
  DolphinsScores1,
  DolphinsScores2,
  DolphinsScires3
);
console.log(avgDolphinsTest1);

var avgKoalasTest1 = calcAverage(KoalasScore1, KoalasScore2, KoalasScore3);
console.log(avgKoalasTest1);

// test check winner function 1:

var Winner1 = checkWinner(avgDolphinsTest1, avgKoalasTest1);
console.log(Winner1);

// undefined in console, still log the no one wins.

// data set 2

var DolphinsScores1 = 85;
var DolphinsScores2 = 54;
var DolphinsScires3 = 41;

var KoalasScore1 = 23;
var KoalasScore2 = 34;
var KoalasScore3 = 27;

// test dataset 2

var avgDolphinsTest2 = calcAverage(
  DolphinsScores1,
  DolphinsScores2,
  DolphinsScires3
);
console.log(avgDolphinsTest2);

var avgKoalasTest2 = calcAverage(KoalasScore1, KoalasScore2, KoalasScore3);
console.log(avgKoalasTest2);

// test check winner function dataset 2:

var Winner2 = checkWinner(avgDolphinsTest2, avgKoalasTest2);
console.log(Winner2);

// Tạo hàm 'calcAverage' để tính trung bình của 3 điểm số.
// Tạo hàm 'checkWinner' nhận điểm trung bình của mỗi đội làm tham số ('avgDolphins' và 'avgKoalas'), sau đó in đội thắng ra console cùng với số điểm giành chiến thắng theo luật trên. Ví dụ: "Koalas win (30 vs. 13)".
// Dùng hàm 'checkWinner' để xác định đội chiến thắng cho cả Dữ liệu 1 và Dữ liệu 2.

// Dữ liệu kiểm tra:
// Dữ liệu 1: Dolphins ghi được 44, 23 và 71 điểm. Koalas ghi được 65, 54 và 49 điểm.
// Dữ liệu 2: Dolphins ghi được 85, 54 và 41 điểm. Koalas ghi được 23, 34 và 27 điểm.

// 7. Xây dựng Tip calculator
// Steve đang xây dựng tip calculator: Tip 15% hóa đơn nếu giá trị hóa đơn trong khoảng 50-300, và với giá trị khác thì tip 20%.

// Viết hàm 'calcTip' nhận giá trị hóa đơn bất kỳ làm đầu vào và trả về tiền tip tương ứng, tính toán theo các quy tắc ở trên (bạn có thể xem lại code từ thử thách tip calculator đầu tiên nếu cần). Kiểm tra hàm sử dụng giá trị hóa đơn là 100.

function calcTip(ordersvalue) {
  return ordersvalue >= 50 && ordersvalue <= 300
    ? (ordersvalue * 15) / 100
    : (ordersvalue * 20) / 100;
}
// Giờ hãy dùng array. Hãy tạo array 'bills' có chứa dữ liệu kiểm tra bên dưới.
// Tạo array 'tips' có chứa giá trị tiền tip cho từng hóa đơn, tính từ hàm mà bạn đã tạo trước đó. Tạo array 'total' có chứa tổng giá trị, tức là bill+tip.

ordersvalue = [125, 555, 44];
tip = [
  calcTip(ordersvalue[0]),
  calcTip(ordersvalue[1]),
  calcTip(ordersvalue[2]),
];
console.log(tip);

function Total(ordersvalue, tip) {
  return ordersvalue + tip;
}

// is there any way to format this math shorter

// total = [Total[0], Total[1], Total[2]];

total = [
  ordersvalue[0] + tip[0],
  ordersvalue[1] + tip[1],
  ordersvalue[2] + tip[2],
];

console.log(total);
// Dữ liệu kiểm tra:
// 125, 555 và 44.

// 8. Write a function that takes two numbers and returns their sum.

function Sumof2num (num1,num2)
  return num1 + num2

// 9. Write a function that takes a string and returns the number of vowels it contains. ????
