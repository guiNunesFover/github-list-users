import { GithubNotificationStatusEnum } from '../enum/github-notification.enum';

export class GithubNotificationModel
{
    status: GithubNotificationStatusEnum;
    title: string;
    message: string[];
    extraInfo?: any;
    stateVisible?: string; // Estado visual do component
}
