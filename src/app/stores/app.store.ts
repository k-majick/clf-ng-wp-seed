import { IUserProfile } from '../components/form-user/form-user.model';
import { IUserMessage } from '../components/form-message/form-message.model';

export interface IAppStore {
  user: IUserProfile[];
  message: IUserMessage[];
}
