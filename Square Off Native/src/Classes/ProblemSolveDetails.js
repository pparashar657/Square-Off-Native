
export default class ProblemSolveDetail {
    trackingId
    xoo
    quantity
    ticket
    processedAt
    markedUnder
    newId
    comments
    lastUpdatedTime

    constructor(trackingId, xoo, quantity, ticket, processedAt, markedUnder, newId, comments, lastUpdatedTime) {
        this.trackingId = trackingId
        this.xoo = xoo
        this.quantity = quantity
        this.ticket = ticket
        this.processedAt = processedAt
        this.markedUnder = markedUnder
        this.newId = newId
        this.comments = comments
        this.lastUpdatedTime = lastUpdatedTime
    }
}
