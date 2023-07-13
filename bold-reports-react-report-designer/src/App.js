/* eslint-disable */
import React from 'react';
import './App.css';
//Report designer source
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-designer.min';
import '@boldreports/javascript-reporting-controls/Scripts/bold.report-viewer.min';
import '@boldreports/javascript-reporting-controls/Content/material/bold.reports.all.min.css';
import '@boldreports/javascript-reporting-controls/Content/material/bold.reportdesigner.min.css';
//Data-Visualization
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.bulletgraph.min';
import '@boldreports/javascript-reporting-controls/Scripts/data-visualization/ej.chart.min';
//Reports react base
import '@boldreports/react-reporting-components/Scripts/bold.reports.react.min';

var designerStyle = {
  'height': '700px',
  'width': '100%'
};

function App() {
  return (
    <div style={designerStyle}>
      <BoldReportDesignerComponent
      id="reportdesigner_container"
      serviceUrl={'https://demos.boldreports.com/services/api/ReportDesignerWebApi'}>
      </BoldReportDesignerComponent>
    </div>
  );
}

export default App;