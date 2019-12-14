import React,{useState,useEffect} from 'react'
/*
     const [data,setData]=useState(0)
            data=0
     const [data,setData]=useState('')
            data=''
            클래스형
            this.state={
               data:''
            }
     const [data,setData]=useState({movie:[]})
            data={}
     const [data,setData]=useState([])
            data=[]
     const [data,setData]=useState({})

     <App name="홍길동"/>
     class App extends Component{
        constructor(props)  ===> this.props.name
        {
           super(props)
        }
     }

     <App name="심청이"/>

     function App(name){
     }
 */
import axios from 'axios'
function App2(){
    // state선언
    const [data,setData]=useState({movie:[]})
    // 외부데이터를 읽어서 처리 : componentWillMount,componentDidMount...
    useEffect(()=>{
        const movieData= async ()=>{
            const result=await axios.get('http://localhost:3000/movie.json')
            console.log(result.data)
            setData(result.data)
        }
        movieData()
    },[])
    return (
        <ul>
            {data.movie.map((m)=>
              <li><img src={m.poster}/></li>
            )}
        </ul>
    )
}
export default App2