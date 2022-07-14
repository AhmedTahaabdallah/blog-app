import { MongoClient } from "mongodb";

const handler = async(req, res) => {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (!email || !email.includes('@')) {
            res.status(422).json({ message: 'invalid email address!' });
            return;
        }
        if (!name || !name.trim() === '') {
            res.status(422).json({ message: 'invalid name!' });
            return;
        }
        if (!message || !message.trim() === '') {
            res.status(422).json({ message: 'invalid message!' });
            return;
        }

        const newMessage = {
            email,
            name,
            message
        };

        let client;

        try {
            client = await MongoClient.connect(process.env.mongo_url);
        } catch (error) {
            res.status(500).json({ message: 'Could not connect to database!' });
            return;
        }

        const db = client.db();

        try {
            const result = await db.collection('message').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({ message: 'Storing Message Failed!' });
            return;
        }
        client.close();
        console.log(newMessage);

        res.status(201).json({ message: 'Successful Store Message.', newMessage });
    }
};

export default handler;