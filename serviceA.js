const amqp = require("amqplib");

const sendMessage = async () => {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    const exchange = "microservices";
    const routingKey = "someEvent";
    const message = "Hello, Rodrigo";

    channel.assertExchange(exchange, "direct", { durable: false });
    channel.publish(exchange, routingKey, Buffer.from(message));

    console.log("Event published:", message);

    setTimeout(() => {
      connection.close();
    }, 500);
  } catch (error) {
    console.error("Error occurred while publishing event:", error);
  }
};

sendMessage();
