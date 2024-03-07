import { connect } from 'mongoose';

export class Database {
  public initDb = async (): Promise<void> => {
    try {
      console.log(process.env.MONGODB_URI);
      await connect(process.env.MONGODB_URI || '');
      console.log('Connected to MongoDB database');
    } catch (error) {
      console.log(`Unable to connect to database, error:  ${error}`);
    }
  }
}