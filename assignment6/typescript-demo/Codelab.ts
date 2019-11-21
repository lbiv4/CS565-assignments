import { Guest } from "./Guest";

export class Codelab {
  constructor(public guests: Guest[]) {
    this.guests = guests;
  }

  getGuestsComing() {
    return this.guests.filter(guest => guest.coming);
  }
}
