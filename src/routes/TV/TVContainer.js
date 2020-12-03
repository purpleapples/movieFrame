import React from "react";
import TVPresenter from './TVPresenter';
import {tvApi} from '../../api';

export default class extends React.Component{
    constructor(props){
        super(props);        
    }
    state = {        
        topRated:null,
        popular:null,
        airingToday:null,
        error:null,
        loading:true
    }
    
    async componentDidMount(){
        try {
            const {
                data: {results: topRated},
    
            } = await tvApi.topRated();
            //const nowPalying = (await moviesApi.nowpalying()).data.results.nowPlaying;            
            const {
                data: {results: popular},
    
            } = await tvApi.popular();
            const {
                data: {results: airingToday},
    
            } = await tvApi.airingToday();       
            this.setState({
                topRated,
                popular,
                airingToday
            });                       
        } catch (error) {
            this.setState({
                error: "TV정보를 찾을 수 없습니다."
            });
        } finally{
            this.setState({
                loading:false
            });            
        }
    }

    // 함수형 컴포넌트에서 return에 해당된다.
    render(){
        const {
            topRated,
            popular,
            airingToday,
            error,
            loading           
        } = this.state;
        return <TVPresenter 
            topRated={topRated}
            popular={popular}
            airingToday={airingToday}
            error={error}
            loading={loading}
         />;
    }
}