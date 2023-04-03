//! 다시 기본기 , 그리고 객체 
//1. 객체 리터럴 , 정적인 key ,value 작성
const staticObjectLitreral = {
  id : 'heeny',
  password : "941207",
  email : "heen1207@gmail.com"
}
console.log(staticObjectLitreral);

//2. 객체 리터럴 , 동적인 key , value 작성
const initializeObjectLiteral ={};
initializeObjectLiteral.id = "heeny";
initializeObjectLiteral.password ="941207";
initializeObjectLiteral.email = "heen1207@gmail.com";
console.log(initializeObjectLiteral);

//3. 내장 객체 생성자 함수 활용 동적인 ket , value 작성
const initializeObjectConsturtor=new Object ();
//Object 라는 내장 '생성자 함수 선언'
initializeObjectConsturtor.id ="heeny";
initializeObjectConsturtor.password="941207"
initializeObjectConsturtor.email="heen1207@gamil.com";
console.log(initializeObjectConsturtor);

//4. 생성자함수 활용 정적인 key .value 작성
class ConsturctionObject {
  constructor (id, password,email){
    this.id =id;
    this.password =password ;
    this.email = email ;
  }
  // setter 에 의해 '데이터타입'을 원하는 것만 받을 수 있도록 '제한' 걸기 
  set id(value){
    if(typeof (value) === "string"){
      this._id = value ;
    }
  }
  set password(value){
    if(typeof (value) === "string"){
      this._password = value ;
    }
}
set email(value){
  if(value.includes("@")){
    this._email = value ;
    }
  }
}
const makeInstance = new ConsturctionObject("heeny","941207","heen1207@gmail.com");
console.log(makeInstance);

//5. 단순한 객체를 리런하는 함수 
function returnObject (id,password,email){
  let objectValue = {
    id : id,
    password : password,
    email : email 
  }
  return objectValue;
}
const returnObjectValue = returnObject("heeny","941207","heen1207@gmail.com");
console.log(returnObjectValue);

//6. class 작성법을 지원하기 전 생성자 함수 제작 방식 
function oldSchoolConstructor(id,password,email){
  this.id =id;
  this.password =password;
  this.email =email;
}

const oldSchoolInstance = new oldSchoolConstructor("heeny",
"941207","heen@gmail.com");
console.log(oldSchoolInstance);




