import React from "react";
import DetailPresenter from './DetailPresenter';
import {moviesApi, tvApi} from '../../api';
// Contrainer의 역할 : App에서 사용되는 기능, 상태,
// 구현하고 Presenter에 전달


export default class extends React.Component{
    // 생성자가 할 일
    constructor(props){
        super(props);        
        
        const {
            location: {pathname}        
        } = props;

        this.state = {
            result:null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        }
    }
    state = {
        movieDetail:null,
        tvDetail:null
    }
    async componentDidMount(){
        // id 가지고 오기 -> match.params
        // 만약에 id가 안들어오면 HOME으로 이동 history의 push 함수 이용
        // 사용자의 요청을 서버가 받고 재요청하는것 : redirect        
        const {match: {params: {id}},
               history: {push}
        } = this.props;

        const parsedId = parseInt(id);
        let result = null;
        const {isMovie } = this.state;

        if(isNaN(parsedId)){
            // Home으로 redirect
            return push("/");
        }
        const {data} = await moviesApi.movieDetail(parsedId);
        
        

        try {        
            if (isMovie){
                ({data:result} = await moviesApi.movieDetail(parsedId));
                                
            }else{
                ({data:result} = await tvApi.showDetail(parsedId));
            }
        // const {data:{result}} = await isMovie ?  moviesApi.movieDetail(parsedId)
        //                         : tvApi.showDetail(parsedId);
        } catch (error) {
            this.setState({
                error:"영화를 찾을 수 없습니다."
            })
        }finally{
            this.setState({
                loading:false, result
                }                
            )
        }
    }
    // 함수형 컴포넌트에서 return에 해당된다.
    render(){
        const {result, error, loading} = this.state;
        return <DetailPresenter result={result} error={error} loading={loading} />;
    }
}