
export default class Package {
    trackingId
    sourceNode
    targetNode
    groupId
    reconcilationState
    processingState
    transactionType
    shipmenttype
    currentNode
    lastUpdatedTime

    constructor(trackingId, sourceNode, targetNode, groupId, reconcilationState, processingState, transactionType, shipmenttype, currentNode, lastUpdatedTime) {
        this.trackingId = trackingId
        this.sourceNode = sourceNode
        this.targetNode = targetNode
        this.groupId = groupId
        this.reconcilationState = reconcilationState
        this.processingState = processingState
        this.transactionType = transactionType
        this.shipmenttype = shipmenttype
        this.currentNode = currentNode
        this.lastUpdatedTime = lastUpdatedTime
    }

}
