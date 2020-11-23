import React, { Component } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

class FormEmail extends Component {
	render() {
		return (
			<Form>
				<FormGroup>
					<Input
						type="textarea"
						name="message"
						id="exampmessageleEmail"
						placeholder="Type in message"
					/>
				</FormGroup>
				<Button>Submit</Button>
			</Form>
		);
	}
}

export default FormEmail;
