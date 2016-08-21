import React, { PropTypes } from 'react';

import EditorDialog from '../../../../dialogs/EditorDialog';

const SlackDialog = (props) => {
  const {
    fields,
    ...others,
  } = props;

  const submitting = props.submitting;

  const strings = {

  };

  return (
    <EditorDialog id="notification" fa="slack" fields={fields} translations={strings} {...others}>
      Slack dialog - {submitting}
    </EditorDialog>
  );
};

SlackDialog.propTypes = {
  fields: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default SlackDialog;
