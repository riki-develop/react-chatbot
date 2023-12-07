import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import NoProfile from '../assets/img/no-profile.png'
import MoreJapan from '../assets/img/morejapan.png'

const Chat = (props) => {
    const isQuestion = (props.type === 'question')
    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse'
    return(
        <ListItem className={classes}>
        <ListItemAvatar>
            {/* return内での条件分岐の書き方 */}
            {isQuestion ? (
                <Avatar alt="icon" src={MoreJapan} />
            ) : (
                <Avatar alt="icon" src={NoProfile} />
            )}
            {/* return内での条件分岐の書き方 */}
        </ListItemAvatar>
        <div className="p-chat__bubble">{props.text}</div>
      </ListItem>
    )
}

export default Chat