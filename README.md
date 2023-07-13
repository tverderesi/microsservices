# microsservices

microsservices is a dirty quick implementation of Event Driven Architecture using RabbitMQ, made for learning purposes.

## Features

- Provides a simple and quick way to understand Event Driven Architecture with RabbitMQ
- Demonstrates event publishing and subscription between microservices
- Easy to grasp and modify for learning and experimentation

## Installation

1.  Clone the repository:
    ```
    git clone https://github.com/your-username/microsservices.git
    ```

2.  Install the dependencies:
     ```
    git clone https://github.com/your-username/microsservices.git
     ```

4.  Start the microservices:
    - Service A (Event Publisher):
    ```
    node serviceA.js
    ```
    - Service B (Event Subscriber):
    ```
    node serviceB.js
    ```

4. Access the services:

- Service A: Open a web browser and visit `http://localhost:3000`
- Service B: Check the console output for received events

## Configuration

The package requires RabbitMQ to be installed and running. Make sure you have RabbitMQ installed locally or provide the necessary configuration details in the code, such as hostname, port, username, and password, if RabbitMQ is running on a remote server. You can find instructions on how to install RabbitMQ [here](https://www.rabbitmq.com/download.html)

## Contributing

Contributions are welcome! If you'd like to contribute to this microsservices package, please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

This package is licensed under the [MIT License](LICENSE).
