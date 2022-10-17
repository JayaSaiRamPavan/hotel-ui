export class ReservationDto {
    userId?: number;
    roomId?: number;
    date?: string;

    constructor(userId: number, roomId : number, date : string) {
        this.userId = userId;
        this.roomId = roomId;
        this.date = date;
    }
}

