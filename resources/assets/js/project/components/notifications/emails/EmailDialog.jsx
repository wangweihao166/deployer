import React, { PropTypes } from 'react';

import EditorDialog from '../../../../dialogs/EditorDialog';

const EmailDialog = (props) => {
  const {
    fields,
    ...others,
  } = props;

  const submitting = props.submitting;

  const strings = {

  };

  return (
    <EditorDialog id="notifyemail" fa="envelope" fields={fields} translations={strings} {...others}>
      Emails dialog - {submitting}
    </EditorDialog>
  );
};

EmailDialog.propTypes = {
  fields: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default EmailDialog;
