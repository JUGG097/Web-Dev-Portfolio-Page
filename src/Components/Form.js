import React, { Component } from "react";
import {
	Form,
	FormGroup,
	Input,
	Button,
	Label,
	Modal,
	ModalHeader,
	ModalBody,
} from "reactstrap";

class FormEmail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "",
			name: "Anonymous",
			email: "Anonymous.com",
			email_anon: "",
			modal: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	render() {
		return (
			<div className="text-center">
				<Button color="danger" onClick={this.toggleModal}>
					Send
				</Button>
				<Modal
					isOpen={this.state.modal}
					toggle={this.toggleModal}
					className="my-color-2"
				>
					<ModalHeader toggle={this.toggleModal}>
						Send Message
					</ModalHeader>
					<ModalBody>
						<Form>
							<FormGroup>
								<Label for="message">Message</Label>
								<Input
									type="textarea"
									name="message"
									id="exampmessageleEmail"
									placeholder="Type in message"
									value={this.state.message}
									onChange={this.handleChange}
								/>
							</FormGroup>
							<FormGroup>
								<Label for="email">Contact Email</Label>
								<Input
									type="email"
									name="email_anon"
									placeholder="Email adresss"
									value={this.state.email_anon}
									onChange={this.handleChange}
								></Input>
							</FormGroup>
							<Button onClick={this.handleSubmit}>Send</Button>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	}

	toggleModal() {
		this.setState({
			modal: !this.state.modal,
		});
	}
	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
		// console.log(event.target.name);
	}

	handleSubmit() {
		// event.preventDefault();
		const templateId = "template_vr7ngz8";

		this.sendFeedback(templateId, {
			message_html: this.state.message,
			from_name: this.state.name,
			reply_to: this.state.email,
			anon_mail: this.state.email_anon,
		});
	}

	sendFeedback(templateId, variables) {
		window.emailjs
			.send("service_5oe1bbw", templateId, variables)
			.then((res) => {
				console.log("Email successfully sent!");
				alert("Message Sent!!!");
			})
			// Handle errors here however you like, or use a React error boundary
			.catch((err) =>
				console.error(
					"Oh well, you failed. Here some thoughts on the error that occured:",
					err
				)
			);
	}
}

export default FormEmail;
