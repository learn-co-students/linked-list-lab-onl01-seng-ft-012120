function getName(node){
    return node.name
}

function headNode(list, collection){
    return collection[list]
}

function next(node, collection){
    let indx = node.next
    return collection[indx]
}

function nodeAt(indx, list, collection){
    let node = headNode(list, collection)
    for(let i = 0; i < indx; i++){
        node = next(node, collection)
    }
    return node
}

function addressAt(indx, list, collection){
    let node
    if (indx === 0)
    return list
    else
    node = nodeAt(indx-1, list, collection)
    return node['next']
}

function indexAt(node, collection, list){
    let count = 0
    let currNode = headNode(list, collection)
    while(currNode !== node){
        count++
        currNode = next(currNode, collection)
    }
    return count
}

function insertNodeAt(indx, node, head, collection){
    let prevNode = nodeAt(indx-1, head, collection)
    let nextNode = nodeAt(indx, head, collection)
    let prevIndx = indexAt(prevNode, collection, head)
    let nextIndx = indexAt(nextNode, collection, head)
    let prevAddress = addressAt(prevIndx, head, collection)
    let nextAddress = addressAt(nextIndx, head, collection)
    prevNode.next = node
    let newNode = collection[node]
    newNode.next = nextAddress
}

function deleteNodeAt(indx, head, collection){
    let prevNode
    let currNode = headNode(head, collection)
    for(let i = 0; i < indx; i++){
        prevNode = currNode
        currNode = next(currNode, collection)
    }
    prevNode.next = currNode.next
}
let firstNode = {name: 'susie', next: 'rkjasj'}
let secondNode = {name: 'sam', next: 'asnan'}
let lastNode = {name: 'charlie', next: null}
let collection = {rkjasj: secondNode, asnan: lastNode, whana: firstNode}
let linkedList = 'whana'
