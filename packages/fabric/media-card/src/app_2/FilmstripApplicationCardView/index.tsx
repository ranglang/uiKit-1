import * as React from 'react';
import ViewModel from '../ViewModel';
import CardFrame from '../../shared/CardFrame';
import IconImage from '../../shared/IconImage';
import CardDetails from '../shared/CardDetails';

import { minWidth, maxWidth } from '../shared/width';

export interface StandaloneApplicationCardViewProps extends ViewModel {}

export default class StandaloneApplicationCardView extends React.Component<
  StandaloneApplicationCardViewProps
> {
  render() {
    const {
      link,
      context,
      title,
      icon,
      preview,
      user,
      users,
      details,
      actions,
      onAction,
    } = this.props;
    return (
      <CardFrame
        minWidth={minWidth({ hasPreview: false })}
        maxWidth={maxWidth({ hasPreview: false })}
        href={link && link.url}
        icon={
          context.icon && (
            <IconImage src={context.icon.url} alt={context.icon.label || ''} />
          )
        }
        text={context.text}
      >
        <CardDetails
          title={title}
          icon={icon}
          user={user}
          thumbnail={preview}
          users={users}
          actions={actions}
          details={details}
          onAction={onAction}
        />
      </CardFrame>
    );
  }
}
