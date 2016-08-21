import React, { PropTypes } from 'react';

import EditorDialog from '../../../../dialogs/EditorDialog';

const FileDialog = (props) => {
  const {
    fields,
    ...others,
  } = props;

  const submitting = props.submitting;

  const strings = {
    create: Lang.get('projectFiles.create'),
    edit: Lang.get('projectFiles.edit'),
    warning: Lang.get('projectFiles.warning'),
  };

  return (
    <EditorDialog id="sharefile" fa="folder" fields={fields} translations={strings} {...others}>
      Persistent file dialog - {submitting}
    </EditorDialog>
  );
};

FileDialog.propTypes = {
  fields: PropTypes.object.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default FileDialog;
