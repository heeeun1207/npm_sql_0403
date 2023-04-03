import mysql from 'mysql'

class Pokemon {
    constructor(name, type, level){
        this.name = name;
        this.type = type;
        this.level = level;
    }
    get info(){
        return `이름: ${this._name}, 타입: ${this._type}, 레벨:${this._level}`;
    }
    set name(value) {
        if (typeof value === "string"){
            this._name = value;
        }
        else {
            console.log("문자열로 입력해주세요")
        }
    }
    
    set type(value) {
        if (typeof value ==="string"){
            this._type = value;
        }
        else {
            console.log("문자열로 입력해주세요")
        }
    }
    set level(value) {
        if(typeof value === "number"){
            this._level = value;
        }
        else{
            console.log("숫자로 입력해주세요")
        }
    }
}

//* 데이터베이스 연결 정보 configuaration "정의" 라는 단어를 줄여서 config 라고 부른다.
//* 데이터베이스 모듈이 필요한 정보에 대해 "객체"로 받는 것을 조건으로 둔것에 주목
//* 실제 서비스에서는 config 파일을 환경변수등(시스템에 의존하는 변수) 으로 활용한다. 

const dbConfig ={
    host: 'localhost',
    user: 'root',
    password:'kkai0114@@',
    database:'POKEMON',
    port:'3306',
    connectionLimit:'5',
    waitForConnections:true
};

//* javascript -14 예제의 5번 코드인 '객체를 반환하는 함수' 참고

function convertPokemonToJSON(pokemon) {
    return JSON.stringify({
        name:pokemon._name,
        type:pokemon._type,
        level:pokemon._level,
    })
}

//* 보통의 경우
//* class를 선언한 코드와 JSON으로 변환하는 함수코드는 분리되어있다.
//* 본 예제에서는 굳이 JSON으로 바꾸지 않아도 데이터베이스에 create(생성) 되지만,
//* 실무에서 JSON으로 내보내고 가져오눈 경우가 많다.
//* 하나의 '객체'를 다른 '객체'로 변환하는 것을 '직렬화' 라고 한다.
//* JSON 포멧은 다른 언어에서도 (파이썬)등 범용성이 무궁무진 하고
//* 분리되는 과정 자체가 서비스 측면에서는 보완적으로도 중요하다.
//* nodejs 특성상 JSON.parse()가 메서드가 내장 메서드이기 때문에, 상당히 간편하다.

function savePokemonJSONToDatabase(pokemonJSON) {
    const connection = mysql.createConnection(dbConfig);

    connection.connect((err)=>{
        if(err){
            console.error('연결실패',err);
            return;
        }
        console.log('3306 포트로 연결 성공');

        //* JSON 데이터 파싱하여 결과적으로 다시 객체가 된다.
        const pokemonData = JSON.parse(pokemonJSON);

        //* 포켓몬 정보 삽입 쿼리 
        const query =`INSERT INTO POKEMON.dbConfig(name,type,level) VALUES(?,?,?)`;

        /*
        *쿼리문은 기본 기초가 '무엇을' '어디에' '어떻게' 이다.
        *영어의 어순을 그대로 따르는게 특징이다.
        *삽입하겠다 (INSERT INTO)
        *pokemon 이라는 테이블에 열(column)은 name, type, level 세칸이다.
        *그리고 그 열에 들어갈 데이터는 ? 로 표시 된다.
        *이때 ? 는 '값'이 아니라 '깂의 위치'를 의미하므로 '함수의 매개변수'와 같다.
        */

        const values = [pokemonData.name, pokemonData.type, pokemonData.level];

        //* 쿼리 실행

        connection.query(query, values, (err, results)=>{
            if(err) {
                console.error('쿼리 실행 실패', err);
                return;
            }
            console.log('결과문 확인',results);

            //* 연결 종료 
            connection.end();
        })
    })
}

/*
* connect()
* query()
* end()
* 위 세개의 메서드는 세트로 사용되는 경우가 많기 떄문아,
* 마치 HTTP 모듈의  writeHead, write, end 메서드와 꼭 닮았다.
* 이렇게 "묶음단위" 로 실행되는 동작형태를 공학적 용어로 트랜잭션(transaction)이라고 한다.
*/

const pikachu = new Pokemon("피카츄","전기",10);
const pikachuJSON = convertPokemonToJSON(pikachu);
savePokemonJSONToDatabase(pikachuJSON);

