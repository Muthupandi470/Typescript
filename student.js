var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var student = /** @class */ (function () {
    function student(_name, _rollNo, _marks) {
        this._name = _name;
        this._rollNo = _rollNo;
        this._marks = _marks;
    }
    Object.defineProperty(student.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(student.prototype, "rollNo", {
        get: function () {
            return this._rollNo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(student.prototype, "marks", {
        get: function () {
            return __spreadArray([], this._marks, true);
        },
        set: function (newMarks) {
            if (newMarks.length === 3 && newMarks.every(function (mark) { return mark >= 0 && mark <= 100; })) {
                this._marks = __spreadArray([], newMarks, true);
            }
            else {
                throw new Error("Invalid marks. Please provide 3 marks between 0-100");
            }
        },
        enumerable: false,
        configurable: true
    });
    student.prototype.calculateTotal = function () {
        return this._marks.reduce(function (sum, mark) { return sum + mark; }, 0);
    };
    student.prototype.calculateAverage = function () {
        return this.calculateTotal() / this._marks.length;
    };
    student.prototype.calculateGrade = function () {
        var average = this.calculateAverage();
        if (average >= 90)
            return 'A+';
        if (average >= 80)
            return 'A';
        if (average >= 70)
            return 'B';
        if (average >= 60)
            return 'C';
        if (average >= 50)
            return 'D';
        return 'F';
    };
    student.prototype.displayReportCard = function () {
        console.log("REPORT CARD");
        console.log("Name: ".concat(this._name));
        console.log("Roll No: ".concat(this._rollNo));
        console.log("Marks:");
        this._marks.forEach(function (mark, i) { return console.log("Subject ".concat(i + 1, ": ").concat(mark)); });
        console.log("Total: ".concat(this.calculateTotal()));
        console.log("Average: ".concat(this.calculateAverage().toFixed(2)));
        console.log("Grade: ".concat(this.calculateGrade()));
    };
    return student;
}());
var a = new student("Muthupandi", 101, [93, 96, 87]);
a.displayReportCard();
