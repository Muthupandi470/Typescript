interface StudentDetails {
    name: string;
    rollNo: number;
    marks: number[];
    calculateTotal(): number;
    calculateAverage(): number;
    calculateGrade(): string;
}
class student1 implements StudentDetails {
    constructor(
        private _name: string,
        private _rollNo: number,
        private _marks: number[]
    ) {}
    get name(): string {
        return this._name;
    }
    get rollNo(): number {
        return this._rollNo;
    }
    get marks(): number[] {
        return [...this._marks];
    }
    set marks(newMarks: number[]) {
        if (newMarks.length === 3 && newMarks.every(mark => mark >= 0 && mark <= 100)) {
            this._marks = [...newMarks];
        } else {
            throw new Error("Invalid marks. Please provide 3 marks between 0-100");
        }

    }
    calculateTotal(): number {
        return this._marks.reduce((sum, mark) => sum + mark, 0);
    }
    calculateAverage(): number {
        return this.calculateTotal() / this._marks.length;
    }
    calculateGrade(): string {
        const average = this.calculateAverage();
        if (average >= 90) return 'A+';
        if (average >= 80) return 'A';
        if (average >= 70) return 'B';
        if (average >= 60) return 'C';
        if (average >= 50) return 'D';
        return 'F';
    }
    displayReportCard(): void {
        console.log("REPORT CARD");
        console.log(`Name: ${this._name}`);
        console.log(`Roll No: ${this._rollNo}`);
        console.log("Marks:");
        this._marks.forEach((mark, i) => console.log(`Subject ${i + 1}: ${mark}`));
        console.log(`Total: ${this.calculateTotal()}`);
        console.log(`Average: ${this.calculateAverage().toFixed(2)}`);
        console.log(`Grade: ${this.calculateGrade()}`);
}
}
let My = new Student("Muthupandi",101,[93,96,87]);
My.displayReportCard();
