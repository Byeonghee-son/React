//사용자 정의 기본 컴포넌트 만드는 방법 컴포넌트 항상 대문자로 시작
import logo from '../logo.svg';
import './Hello.css';
const Hello = () => { //만든 컴포넌트 이름이랑 똑같이 함수 구현
    let course = 'K-digital 3기 AI활용 빅데이터 풀스택웹서비스 SW개발자 과정'
    let name = '손병희';
    let git = 'https://github.com/Byeonghee-son';

    return (  //리턴이 무조건 들어가야함 리턴안에는 부모태그가 한개만 자식은 상관없음 <></> 프래그먼트 태그를 쓰면 부모를 2개 이상 사용가능하다!!
        <main className='container'>
            <article data-theme="dark">
                <div>
                    <img src={logo} className='App-logo' alt='logo' />
                </div>
                <footer>
                    <hgroup>
                        <h6>{course}</h6>
                        <h1>{name}</h1>
                        <h2><a href={git}>{git}</a></h2>
                    </hgroup>
                </footer>
            </article>
        </main>
    );
}
export default Hello; // 마지막에 필수로 들어가야함 익스포트 디폴트

