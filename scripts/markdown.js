const defaultText = 'Heading\r\n=======\r\n\r\nSub-heading\r\n-----------\r\n \r\n### Another deeper heading\r\n \r\nParagraphs are separated\r\nby a blank line.\r\n\r\nLeave 2 spaces at the end of a line to do a  \r\nline break\r\n\r\nText attributes *italic*, **bold**, \r\n`monospace`, ~~strikethrough~~ .\r\n\r\nAdventist books:\r\n\r\n  * Steps to Christ\r\n  * The Great Hope\r\n  * Christ Object Lessons\r\n\r\nNumbered list:\r\n\r\n  1. **Steps to Christ**\r\n  2. **The Great Hope**\r\n  3. **Christ Object Lessons**\r\n\r\n~~There is--no passing on~~--the dead `are` dead--not in---\r\n\r\n heaven.[adventistHome](http:\/\/adventist.com)';

var MarkdownViewer = React.createClass({
  getInitialState: function () {
    return {
      rawMarkup: defaultText,
      renderedMarkup: this.renderMarkup(defaultText)
    };
  },

  renderMarkup: function (rawMarkup) {
    var html = marked(rawMarkup, { sanitize: true });
    return { __html: html };
  },

  handleMarkupChange: function (e) {
    this.setState({ rawMarkup: e.target.value });
    this.setState({ renderedMarkup: this.renderMarkup(e.target.value) });
  },

  render: function () {
    return (
      <div className="viewerRow row">
        <div className="markdownDiv col-xs-6">
          <h1 className="markdownHeader text-danger">Raw Markdown</h1>
          <form className="markdownForm">
            <textarea
              className="markdownBox well form-control"
              rows="20"
              width="100%"
              type="textarea"
              placeholder="Enter markdown..."
              value={this.state.rawMarkup}
              onChange={this.handleMarkupChange} />
          </form>
        </div>
        <div className="renderedDiv col-xs-6">
          <h1 className="renderedHeader text-primary">Rendered HTML</h1>
          <div className="renderedMarkup well">
            <span dangerouslySetInnerHTML={this.state.renderedMarkup} />
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <MarkdownViewer />,
  document.getElementById('content')
);