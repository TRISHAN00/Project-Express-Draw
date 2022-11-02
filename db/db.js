const Ticket = require("../model/Ticket");

class MyDB {
  constructor() {
    this.tickets = [];
  }

  /**
   * Create Tickets
   * @param {string} username
   * @param {number} price
   * @returns {Ticket}
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    return this.tickets.push(ticket);
  }

  /**
   * Bulk buy tickets
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @return {Array.<Ticket>}
   */
  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }

  //   get all tickets
  allTickets() {
    return this.tickets;
  }

  /**
   * find single ticket by ID
   * @param {string} ticketId
   * @returns
   */
  findById(ticketId) {
    const ticket = this.tickets.find((ticket) => ticket.id === ticketId);
    return ticket;
  }

  /**
   * find tickets by username
   * @param {string} username
   * @returns {Ticket}
   */
  findTicketByUsername(username) {
    const tickets = this.tickets.filter(
      (ticket) => ticket.username === username
    );
    return tickets;
  }

  /**
   *
   * @param {number} ticketId
   * @param {{username: string, price: number}} ticketBody
   * @param {Ticket}
   */
  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.price = ticketBody.price ?? ticket.price;
    ticket.updateAt = new Date();

    return ticket;
  }

  deleteById(ticketId) {
    let index = this.tickets.findIndex((ticket) => ticket.id === ticketId);
    if (index !== -1) {
      this.tickets.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  draw(winnerCount) {
    let indexes = new Array(winnerCount);
    for (let i = 0; i < indexes.length; i++) {
      let index = Math.floor(Math.random() * this.tickets.length);
      while (indexes.includes(index)) {
        let index = Math.floor(Math.random() * this.tickets.length);
      }
      indexes.push(index);
    }

    const winners = this.tickets.map((index) => this.tickets[index]);
    return winners;
  }
}

const myDb = new MyDB();
module.exports = myDb;
