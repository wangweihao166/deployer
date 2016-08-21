import React, { PropTypes } from 'react';

import EditorDialog from '../../../../dialogs/EditorDialog';

const NotificationDialog = (props) => {
  const {
    fields,
    ...others,
  } = props;

  const submitting = props.submitting;

  const strings = {
    create: Lang.get('notifications.create'),
    edit: Lang.get('notifications.edit'),
    warning: Lang.get('notifications.warning'),
  };

  return (
    <EditorDialog id="notification" fa="slack" fields={fields} translations={strings} {...others}>
      Slack dialog - {submitting}
    </EditorDialog>
  );
};

NotificationDialog.propTypes = {
  fields: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default NotificationDialog;
