import NotificationDialog from '../../components/notifications/slack/NotificationDialog';
import { SLACK_DIALOG } from '../../../dialogs/constants';
import editorDialog from '../../../dialogs/editor';

export default editorDialog({
  dialog: SLACK_DIALOG,
  fields: ['id', 'project_id'],
})(NotificationDialog);
