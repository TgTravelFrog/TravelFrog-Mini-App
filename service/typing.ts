export enum UpdateChatDirection {
    before = "before",
    after = "after"
}

export enum GroupType {
    GROUP = 'group',
    PRIVY = 'privy',
}

export enum MessageType {
    FONT = 'font',
    TRANSFER = 'transfer',
}

export class UpdateUsersDto {
    iconUrl?: string;

    name?: string;

    summary?: string;
}