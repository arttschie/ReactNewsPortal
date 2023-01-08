import React, {Component} from "react";
import NewsDataService from "../services/news.service";

export default class News extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.getNews = this.getNews.bind(this);
        this.updateNewsTitle = this.updateNewsTitle.bind(this);

        this.state = {
            currentNews: {
                id: null,
                title: "",
                content: ""
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getNews(this.props.match.params.id);
    }

    onChangeTitle(e) {
        const title = e.target.value;

        this.setState(function (prevState) {
            return {
                currentNews: {
                    ...prevState.currentNews,
                    title: title
                }
            };
        });
    }

    onChangeContent(e) {
        const content = e.target.value;

        this.setState(prevState => ({
            currentNews: {
                ...prevState.currentNews,
                content: content
            }
        }));
    }

    getNews(id) {
        NewsDataService.get(id)
            .then(response => {
                this.setState({
                    currentNews: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateNewsTitle() {
        NewsDataService.updateNewsTitle(
            this.state.currentNews.id,
            this.state.currentNews.title
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The news' title was updated successfully!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        const {currentNews} = this.state;

        return (
            <div>
                {currentNews ? (
                    <div className="edit-form">
                        <h4>News</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    value={currentNews.title}
                                    onChange={this.onChangeTitle}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Content</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="content"
                                    value={currentNews.content}
                                    onChange={this.onChangeContent}
                                />
                            </div>
                        </form>

                        <button
                            type="submit"
                            className="badge badge-success"
                            onClick={this.updateNewsTitle}
                        >
                            Update
                        </button>
                        <p>{this.state.message}</p>
                    </div>
                ) : (
                    <div>
                        <br/>
                        <p>Please click on a Tutorial...</p>
                    </div>
                )}
            </div>
        );
    }
}