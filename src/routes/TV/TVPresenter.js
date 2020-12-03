import React from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from '../../components/Loader';
import Section from '../../components/Section';
import Poster from '../../components/Poster';
import Message from '../../components/Message';

const Container = styled.div`
    padding:20px;

`;
const TVPresenter = ({
    topRated,
    popular,
    airingToday,
    error,
    loading,
}) => {     
    
    return (       
        <>
        <Helmet>
            <title> TV | movieFrame</title>            
        </Helmet>          
        {loading ? (<Loader />) : (                   
            <Container>               
            {topRated && topRated.length >0 && (
                <Section title="인기상영작">
                    {
                        topRated.map(tv =>  
                            (<Poster 
                                key={tv.id}
                                id={tv.id}
                                title={tv.original_name}
                                imageUrl={tv.poster_path}
                                rating={tv.vote_average}
                                isMovie={false}
                                year={tv.first_air_date && tv.first_air_date}
                            /> 
                            )                            
                        )
                    }
                </Section>
            )}

            {popular && popular.length > 0 && (
                <Section title="인기작">
                    {popular.map(tv =>
                        (<Poster 
                            key={tv.id}
                            id={tv.id}
                            title={tv.original_name}
                            imageUrl={tv.poster_path}
                            rating={tv.vote_average}
                            isMovie={false}
                            year={tv.first_air_date && tv.first_air_date}
                        />) )}
                </Section>
            )}
            {airingToday && airingToday.length > 0 && (
                <Section title="미완결 작품">
                    {airingToday.map(tv => 
                        (<Poster 
                            key={tv.id}
                            id={tv.id}
                            title={tv.original_name}
                            imageUrl={tv.poster_path}
                            rating={tv.vote_average}
                            isMovie={false}
                            year={tv.first_air_date && tv.first_air_date}
                        />) )}
                </Section>
            )}
            {error && (<Message color={"e74c3c"} text={error}/>)}
        </Container>)}            
        </>
    );
};

export default TVPresenter;