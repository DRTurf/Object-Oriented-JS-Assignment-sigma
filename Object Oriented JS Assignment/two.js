class Student{
    constructor(name, email){
        this.name = name;
        this.email = email; 
        this.enrollDetails=new Map();
    }

    enroll(){
        this.enrollDetails.set(this.name,this.email);
        console.log(`${this.name} has been enrolled`);
    }

    showCourses(){
        console.log(`${this.name}'s enrolled courses: ${admissionOffice.studentDetails.get(this.name)}`);
    }

}
function Admission(){
    this.studentDetails = new Map();
    this.enrollDetails = new Map();

    this.enrollStudent=(student)=>{
            student.enroll();
            this.studentDetails.set(student.name,[]);
            this.enrollDetails.set(student.name,student.email)
    }
    
    this.assignCourses=(student,...courses)=>{
        if(this.studentDetails.has(student.name)){
            this.studentDetails.get(student.name).push(courses.map(ele=>" "+ele))
            console.log(`${student.name} has enrolled in${this.studentDetails.get(student.name)}.`);
        }
        else{
            console.log("Student has not been enrolled yet");
        }   
    }  
    
    this.showEnrolledStudents=()=>{
        console.log(`Enrolled students:`);
        this.enrollDetails.forEach((value,key)=>{
            console.log(`${key} (${value})`);
        })
    }
    
}


const admissionOffice = new Admission();

const student1=new Student("Mithun","mithun@pw.live");
const student2=new Student("Farman","farman@pw.live");

admissionOffice.enrollStudent(student1);
admissionOffice.enrollStudent(student2);

admissionOffice.assignCourses(student1,"Full Stack Web Development");
admissionOffice.assignCourses(student2,"Data Science Masters");

student1.showCourses();
student2.showCourses();

admissionOffice.showEnrolledStudents();
