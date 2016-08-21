import React, { PropTypes } from 'react';

import EditorDialog from '../../../../dialogs/EditorDialog';

const HeartBeatDialog = (props) => {
  const {
    fields,
    ...others,
  } = props;

  const submitting = props.submitting;

  const strings = {

  };

  return (
    <EditorDialog id="heartbeat" fa="heartbeat" fields={fields} translations={strings} {...others}>
      Heartbeat dialog - {submitting}
    </EditorDialog>
  );
};

HeartBeatDialog.propTypes = {
  fields: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default HeartBeatDialog;
