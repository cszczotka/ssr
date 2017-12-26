import React from 'react';
import PropTypes from 'prop-types';

class PageTemplate extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    initialState: PropTypes.string,
    scripts: PropTypes.array,
  };

  render() {
    const { children, initialState, scripts } = this.props;

    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <title>Server Side Rendered React App!!</title>
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
          {initialState && (
            <script
              dangerouslySetInnerHTML={{
               __html: `window.MY_STATE=${JSON.stringify(initialState)}`
             }}
            />
          )}
          {scripts.map((item, index) => {
            return <script key={index} src={item} />;
          })}
        </body>
      </html>
    );
  }
}

export default PageTemplate;
