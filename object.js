

class Person{
    name;
    age;
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
}


class Class{
    className;
    inScore;
    constructor(className,inScore){
        this.className=className;
        this.inScore=inScore;
    }
}


class Student extends Person{
    grade;
    diem;
    constructor(grade,diem,name,age){
        super(name,age)
        this.grade=grade;
        this.diem=diem;
        this.dtb=0;

    }
    agv(){
        this.dtb=Math.ceil(this.diem.reduce((a,b) => a+=b, 0)/this.diem.length)

        return 'trung binh diem' ,this.dtb
    }

    classification(){
        if(this.dtb>8){
           return 'gioi';
        }else if(this.dtb<=8 && this.dtb>5){
            return 'kha';
        }else{
            return 'yeu';
        }
        
       
    }
    lowhigh(){
        return{
            low: Math.min(...this.diem),
            high: Math.max(...this.diem)
        }
    }


}

const st =new Student(7,[3,4,9,8,8,8],'huy',22);
console.log(st.agv(),st.classification(),st.lowhigh())