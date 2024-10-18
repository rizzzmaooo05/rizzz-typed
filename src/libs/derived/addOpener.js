import addStyleSheet from '../principal/addStyleSheet.js'
import addText from '../principal/addText.js'
import addCursor from '../principal/addCursor.js'
import querySelector from '../principal/querySelector.js'

export default function addOpener(query) {
  addStyleSheet(query);
  addText(querySelector(query));
  addCursor(querySelector(query));
}
