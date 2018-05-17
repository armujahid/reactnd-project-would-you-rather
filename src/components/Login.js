import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Login extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="userSelect">Select User</Label>
          <Input type="select" name="select" id="userSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <Button>Login</Button>
      </Form>
    );
  }
}
