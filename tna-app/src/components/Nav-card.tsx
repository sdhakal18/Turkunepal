import React, { PureComponent, ReactNode } from 'react';

interface Props {
  text?: string;
  icon?: string;
}

export default class NavCard extends PureComponent<Props> {
  public render(): ReactNode {
    const { text, icon } = this.props;
    return (
      <div className="Nav-card">
        {!icon ? <span>{text}</span> : <img src={icon} alt="Icon" />}
      </div>
    );
  }
}
