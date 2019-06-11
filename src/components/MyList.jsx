import React, { Component } from 'react';
import '../App.css';
import logo from './netflix.png';

class MyList extends Component {

    removeMyListItem(movie) {
        this.props.removeMyListItem(movie);
    }

    addRecommendationToMyList(movie) {
        this.props.addRecommendationToMyList(movie);
    }

    render() {
        console.log('this.props in myList', this.props);
        return (
            <div>
                <div className="navbar">
                <img className="img-responsive" src={logo} alt='neflix' />
                </div>
                <div
                    className="MyList container">
                    <h4 className="section-title">My List ({this.props.myList.length})</h4>          
                    <div className="content-wrapper container">
                        {
                            this.props.myList.length > 0
                                ? this.props.myList.map((movie, index) => {
                                    return (
                                        <div
                                            className="movie"
                                            key={movie.id}>
                                            <div className="movie-content">
                                                <img
                                                    className="img-responsive"
                                                    src={movie.img}
                                                    alt={movie.title} />
                                                <div

                                                    className="movie-menu">
                                                    <p className="movie-text">
                                                        {movie.title}
                                                    </p>
                                                </div>

                                            </div>
                                            <button className="movie-remove" onClick={() => this.removeMyListItem(movie)}>
                                                Remove
                                            </button>
                                        </div>
                                    );
                                })
                                : <div>Your list is empty.</div>
                        }
                    </div>
                </div>
                <div
                    className="Recommendations container">
                    <h4 className="section-title">Recommendations ({this.props.recommendations.length})</h4>
                    <div className="content-wrapper container">
                        {
                            this.props.recommendations.length > 0
                                ?
                                this.props.recommendations.map(movie => {
                                    return (
                                        <div
                                            className="movie"
                                            key={movie.id}>
                                            <div className="movie-content">
                                                <img
                                                    src={movie.img}
                                                    alt={movie.title} />
                                                <div 
                                                    className="movie-menu">
                                                    <p className="movie-text">
                                                        {movie.title}
                                                    </p>
                                                </div>
                                            </div>
                                            <button className="movie-remove" onClick={() => this.addRecommendationToMyList(movie)}>
                                                ADD
                                            </button>
                                        </div>
                                    );
                                })
                                :
                                <div>No Recommendations...</div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default MyList;