import React from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';
import { RaisedButton, TextField } from 'material-ui';
import Paper from 'material-ui/Paper';

const style = {
  height: 600,
  width: 320,
  padding: 20,
  margin: '20px 0px 20px 0px',
};

const style2 = {
  color: 'white',
};

export default function Chat() {
  const history = useHistory();

  const next = (ev) => {
    ev.preventDefault();
    const QuizTitle = ev.target.quiztitle.value;
    const Totalmarks = ev.target.totmarks.value;
    const Passingmarks = ev.target.passmarks.value;
    const Time = ev.target.time.value;
    const totalquestion = ev.target.totalquestion.value;

    const QuizDetail = {
      Title: QuizTitle,
      Totalmarks,
      Passingmarks,
      Totaltime: Time,
      TotalQuestion: totalquestion,
    };

    console.log(QuizDetail);

    if (QuizTitle === '' || Totalmarks === '' || Passingmarks === '' || Time === '') {
      alert('Please Fill Required Fields');
    } else {
      firebase.database().ref('QuizDetail').set(QuizDetail);
      history.push('/CreateQuestion');
    }
  };

  return (
    <div>
      <div>
        <center>
          <Paper style={style} elevation={3}>
            <h1>Thanks for Creat Quiz!</h1>
            <form onSubmit={next}>
              <TextField type="text" name="quiztitle" hintText="Title" floatingLabelText="Quiz Title" /> <br />
              <TextField type="number" name="totmarks" hintText="Total Marks" floatingLabelText="Total Marks" /> <br />
              <TextField type="number" name="passmarks" hintText="Passing Marks" floatingLabelText="Passing Marks" /><br />
              <TextField type="number" name="time" hintText="Total Time" floatingLabelText="Total Time" /><br />
              <TextField type="number" name="totalquestion" hintText="Total Question" floatingLabelText="Total Question" /><br /><br />

              <RaisedButton primary={true} type="submit"><span style={style2}> Next Step </span> </RaisedButton>
            </form>
          </Paper>
        </center>
      </div>
    </div>
  );
}
