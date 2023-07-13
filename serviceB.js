const amqp = require("amqplib");

const receiveMessage = async () => {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    const exchange = "microservices";
    const routingKey = "someEvent";
    const queue = "serviceB";

    channel.assertExchange(exchange, "direct", { durable: false });
    const { queue: queueName } = await channel.assertQueue(queue, {
      exclusive: true,
    });
    channel.bindQueue(queueName, exchange, routingKey);

    console.log("Waiting for events...");

    channel.consume(
      queueName,
      (message) => {
        console.log("Received event:", message.content.toString());
      },
      { noAck: true }
    );
  } catch (error) {
    console.error("Error occurred while receiving events:", error);
  }
};

receiveMessage();
