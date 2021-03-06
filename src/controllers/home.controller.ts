import {Request, Response} from 'express';
import {model, Schema} from 'mongoose';

const userDataSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: String
}, {collection: 'users'});

const UserData = model('UserData', userDataSchema);

/* GET home page. */
function index(req: Request, res: Response) {
  UserData.find()
    .then(doc => res.json(doc));
}

export const HOME_CONTROLLER = {
  index
};
