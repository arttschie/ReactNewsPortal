import React, { Component } from "react";
import NewsDataService from "../services/news.service";

export default class AddNews extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeContent = this.onChangeContent.bind(this);
        this.saveNews = this.saveNews.bind(this);
        this.newNews = this.newNews.bind(this);

        this.state = {
            id: null,
            title: "",
            content: "",

            submitted: false
        };
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeContent(e) {
        this.setState({
            content: e.target.value
        });
    }

    saveNews() {
        var data = {
            title: this.state.title,
            content: this.state.content
        };

        NewsDataService.create(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    title: response.data.title,
                    content: response.data.content,

                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    newNews() {
        this.setState({
            id: null,
            title: "",
            content: "",

            submitted: false
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>You submitted successfully!</h4>
                        <button className="btn btn-success" onClick={this.newNews}>
                            Add news
                        </button>
                    </div>
                ) : (
                    <div>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                required
                                value={this.state.title}
                                onChange={this.onChangeTitle}
                                name="title"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Content"
                                required
                                value={this.state.content}
                                onChange={this.onChangeContent}
                                name="content"
                            />
                        </div>

                        <button onClick={this.saveNews} className="btn btn-success">
                            Submit
                        </button>
                    </div>
                )}
            </div>
        );
    }
}
