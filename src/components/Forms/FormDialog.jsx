import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextInput from './TextInput';


export default class FormDialog extends React.Component {
    // ClassComponentなのでconstructorの中でstateを作成
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            description: ""
        }

        // 状態が変化する毎に余計な関数や処理が発生しないようbind
        this.inputName = this.inputName.bind(this)
        this.inputEmail = this.inputEmail.bind(this)
        this.inputDescription = this.inputDescription.bind(this)
    }

    // 上記で宣言したstateを管理するFunction
    inputName = (event) => {
        this.setState({ name: event.target.value })
    }
    inputEmail = (event) => {
        this.setState({ email: event.target.value })
    }
    inputDescription = (event) => {
        this.setState({ description: event.target.value })
    }

    render() {
        return(
            <Dialog open={this.props.open} onClose={this.props.handleClose} aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
                <DialogContent>
                    <TextInput
                        label={"お名前(必須)"} multiline={false} rows={1}
                        value={this.state.name} type={"text"} onChange={this.inputName}
                    />
                    <TextInput
                        label={"メールアドレス(必須)"} multiline={false} rows={1}
                        value={this.state.email} type={"email"} onChange={this.inputEmail}
                    />
                    <TextInput
                        label={"お問い合わせ内容(必須)"} multiline={true} rows={5}
                        value={this.state.description} type={"text"} onChange={this.inputDescription}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose}>Disagree</Button>
                    <Button onClick={this.props.handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}