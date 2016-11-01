var React = require("react");
var PageHeader = require("react-bootstrap/lib/PageHeader");
var BundleTool = require("./BundleTool");

module.exports = React.createClass({

  render: function () {
    return (
      <div className="container">
        <PageHeader>bundlr <br /> <small>(Bundle ArcGIS JSAPI with Ops Dashboard extensions)</small></PageHeader>
        <BundleTool />
      </div>
    );
  }
}); 