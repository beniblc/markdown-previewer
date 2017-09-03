import React, { Component } from 'react';
import marked from 'marked';

class InputText extends Component {
    constructor(props) {
        super(props);

        this.state = {term: example};
    }

    render() {
        return (
            <div className="in-container">
                <div className="input-area">
                    <textarea className=" box1" 
                        value={this.state.term}
                        onChange={event => this.onInputChange(event.target.value) }
                    />
                    <div className="outputText" dangerouslySetInnerHTML={{__html: marked(this.state.term)}} ></div>  
                </div>
                
            </div>
        );        
    }

    onInputChange = (term) => this.setState({term});
}

export default InputText;

var example = [
    "## Markdown Live Preview",
    "",
    "----",
    "### what is Markdown?",
    "see [Wikipedia](http://en.wikipedia.org/wiki/Markdown)",
    "",
    "> Markdown is a lightweight markup language, originally allowing people \"to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)\".",
    "",
    "----",
    "## markdown quick reference",
    "# headers",
    "",
    "*emphasis*",
    "**strong**",
    "",
    "* list",
    "",
    ">block quote",
    "> Quoted text.",
    "> > Quoted quote.",
    "> * Quoted" ,
    "> * List",
    "",
    "    code (4 spaces indent)",
    "[links](http://wikipedia.org)",
    "",
    "* [markdown-js](https://github.com/evilstreak/markdown-js)",
    ""
  ].join("\n")