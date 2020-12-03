import React from "react";
import HomePresenter from './HomePresenter';
import {moviesApi} from '../../api'

export default class extends React.Component{
    constructor(props){
        super(props);        
    }

    state = {
        nowPlaying:null,
        upcoming:null,
        popular:null,
        error:null,
        loading:true

    }
    // 함수에 async 적용하여 비동기 속성 추가
    
    async componentDidMount(){
        // data :{result:, [{}, {}, {}]}
        
        try {
                const {
                    data: {results: nowPlaying},
        
                } = await moviesApi.nowPlaying();
                //const nowPalying = (await moviesApi.nowpalying()).data.results.nowPlaying;            
                const {
                    data: {results: upcoming},
        
                } = await moviesApi.upcoming();
                const {
                    data: {results: popular},
        
                } = await moviesApi.popular();       
                this.setState({
                    nowPlaying,
                    upcoming,
                    popular
                });                       
        } catch (error) {
            this.setState({
                error: "영화정보를 찾을 수 없습니다."
            });
        } finally{
            this.setState({
                loading:false
            });            
        }
    }

    // 함수형 컴포넌트에서 return에 해당된다.
    render(){

        const {nowPlaying, upcoming, popular, error, loading} = this.state;

        return <HomePresenter 
            nowPlaying={nowPlaying}
            upcoming={upcoming}
            popular={popular}
            error={error}
            loading={loading}
        />;
    }
}