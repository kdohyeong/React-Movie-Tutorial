import React, { Component } from 'react';
import Movie from './Components/Movie';



class App extends Component {

  // render: componentWillMount() -> render() -> componentDidMount()
  // Update :  componentWillReceiveProps() -> shouldComponentUpdate() === true (props가 바뀌면)-> componentWillUpdate() -> render() -> componentDidUpdate()
//   componentWillMount() {  
//   console.log('will mount');   //사이클의 시작
// }
  // componentDidMount(){
  //   console.log('did mount');  // 성공적으로 컴포넌트가 자리잡음
  // }

 state = {}


  // componentDidMount(){
  //   setTimeout(function(){
  //     console.log('hello')
  //   } , 1000)
      //     
      // this.setState({
    //   setTimeout(() => {
  //     this.setState({                   ///5초 뒤 state 변화
       
  //     })
  //   }, 5000)
  // }
  
    // setTimeout(() => {               //최신문법
    //   this.setState({
    //     movies : [ 
    //         { 
    //           title:"Full Metal Jacket",
    //           poster:'https://t1.daumcdn.net/cfile/205CF91249EC79F00F',
    //         },
    //         { 
    //           title:  "Oldboy",
    //           poster: 'https://upload.wikimedia.org/wikipedia/ko/4/48/Old_Boy.jpg',
    //         }, 
    //         { 
    //           title:"Star wars",
    //           poster:'http://image.yes24.com/goods/63804529/800x0'
    //         }
    //         ,        ////스테이를 그대로 두고 한개를 추가
    //         {
    //           title: "Trainspotting",
    //           poster: 'https://i.pinimg.com/236x/e2/4b/81/e24b816991658cff4108913100b8ded2.jpg'
    //         }
    //     ]
    //   })                       
    // }, 5000)

    componentDidMount(){
     this._getMovies();
    }

    _renderMovies = () => {
      const movies = this.state.movies.map((movie) => {
        console.log(movie)
          return <Movie title={movie.title} 
                        poster={movie.medium_cover_image} 
                        key={movie.id}
                        genres={movie.genres}
                        synopsis={movie.synopsis} />   //매핑해서 여러번 반복
        })
        return movies
      }
    //AJAX 어떤 URL이던 간단히 api를 써서 가져옴
      // AJAX는 URL을 자바스크립트로 비동기화 방법으로 불러온다. //promise는 비동기식이므로 다른작업과 동시진행 순차적으로 진행할 필요가 없음!

              // Response
              // type: "cors"
              // url: "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
              // redirected: false   
              // status: 200  좋다는뜻
              // ok: true    잘된다는뜻
              // statusText: ""
              // headers: Headers {}
              // body: ReadableStream    바이트스트림으로 들어왔음 -> json으로 바꿔줘야댐
              // bodyUsed: false   아직 사용안했음

    // async 비동기식으로 이전작업안기다림 그냥 실행
      _getMovies = async () => {  
      const movies = await this._callApi()
  
   //await -> 끝나기를 기다림 not 성공적 수행 callApi에 리턴값이 뭐던간에 movies에 받을거야!
      this.setState({
        movies
      })
    }
    
    _callApi = () => {
       return fetch ("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
      .then(potato => potato.json())       // 바이트스트림에서 json으로 타입변환
      // .then(json => console.log(json))   
      .then(json => json.data.movies) 
      .catch(err => console.log(err))
    }

      render() { 
        // console.log('did render');
          //컴포넌트가 리액트에 존재하게 됌  // ? 참이면 렌더 거짓이면 로딩 // 없으면 처음 5초 스테이트없으니 에러
        return (
          <div> 
          {this.state.movies ? this._renderMovies() : 'Loading'}    
          </div>
        );
      }
    }
  
    export default App;
