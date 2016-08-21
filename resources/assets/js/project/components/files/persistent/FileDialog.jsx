import React, { PropTypes } from 'react';

import EditorDialog from '../../../../dialogs/EditorDialog';

const FileDialog = (props) => {
  const {
    fields,
    ...others,
  } = props;

  const submitting = props.submitting;

  const strings = {

  };

  return (
    <EditorDialog id="sharefile" fa="fa-folder" fields={fields} translations={strings} {...others}>
      Persistent file dialog - {submitting}
    </EditorDialog>
  );
};

FileDialog.propTypes = {
  fields: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default FileDialog;
