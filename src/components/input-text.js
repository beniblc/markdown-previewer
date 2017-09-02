import React, { Component } from 'react';
import marked from 'marked';

class InputText extends Component {
    constructor(props) {
        super(props);

        this.state = {term: example};
    }

    render() {
        return (
            <form className="input-area">
                <textarea className="box1" 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value) }
                />
                
                <div className="outputText" dangerouslySetInnerHTML={{__html: marked(this.state.term)}} ></div>
            </form>
        );        
    }

    onInputChange = (term) => this.setState({term});
}

export default InputText;

var example = [
    "# hello, This is Markdown Live Preview",
    "",
    "----",
    "## what is Markdown?",
    "see [Wikipedia](http://en.wikipedia.org/wiki/Markdown)",
    "",
    "> Markdown is a lightweight markup language, originally created by John Gruber and Aaron Swartz allowing people \"to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)\".",
    "",
    "----",
    "## usage",
    "1. Write markdown text in this textarea.",
    "2. Click 'HTML Preview' button.",
    "",
    "----",
    "## markdown quick reference",
    "# headers",
    "",
    "*emphasis*",
    "",
    "**strong**",
    "",
    "* list",
    "",
    ">block quote",
    "",
    "    code (4 spaces indent)",
    "[links](http://wikipedia.org)",
    "",
    "----",
    "## changelog",
    "* 17-Feb-2013 re-design",
    "",
    "----",
    "## thanks",
    "* [markdown-js](https://github.com/evilstreak/markdown-js)",
    ""
  ].join("\n")