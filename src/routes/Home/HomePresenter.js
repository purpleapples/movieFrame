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

const HomePresenter = ({       
    nowPlaying,
    upcoming,
    popular,
    error,
    loading,
}) => {
    return (
        <>
        <Helmet>
            <title> Movies | movieFrame</title>            
        </Helmet>
        {
         loading ? (<Loader />) : (
             <Container>
                 { nowPlaying && nowPlaying.length >0 &&(
                    <Section title="현재 상영작">
                    {
                        nowPlaying.map(movie => (
                                <Poster
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title}
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                isMovie={true}
                                year={movie.release_date && movie.release_date.substring(0, 4)}
                                />
                            ))
                    }
                    </Section>
                 )}
                 { upcoming && upcoming.length >0 &&(
                    <Section title="개봉예정작">
                    {
                        upcoming.map(movie => (
                                <Poster
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title}
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                isMovie={true}
                                year={movie.release_date && movie.release_date.substring(0, 4)}
                                />
                            ))
         }
     </Section>
                 )}
                 { popular && popular.length >0 &&(
                    <Section title="인기 상영작">
                    {
                        popular.map(movie => (
                                <Poster
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title}
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                isMovie={true}
                                year={movie.release_date && movie.release_date.substring(0, 4)}
                                />
                            ))
         }
     </Section>
                 )}
        {error && (<Message color={"e74c3c"} text={error}/>)}
             </Container>
         )
         }
        </>
    );
};

export default HomePresenter;