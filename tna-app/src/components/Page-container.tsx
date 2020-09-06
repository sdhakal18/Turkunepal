import React, { PureComponent, ReactNode } from 'react';

interface Props {
  content?: string;
}

export default class PageContainer extends PureComponent<Props> {
  public render(): ReactNode {
    return (
      <div className="main-page">
        <div className="folded-container">
          <div className="before" />
          <div className="after" />
        </div>
        <div className="page-container">{this.props.children}</div>
      </div>
    );
  }
}
