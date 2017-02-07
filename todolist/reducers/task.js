import Immutable from 'immutable';
import statuses from '../statuses'


const initialState = Immutable.fromJS({
    tasksList: []
})

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
        case 'MOVE_LEFT':
        case 'MOVE_RIGHT':
            return task(state, action);
        default:
            return state;
    }
}

const task = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return state.set('tasksList', state.get('tasksList').push(Immutable.fromJS(addTask(action))));
        case 'MOVE_LEFT':
            return moveLeft(state, action);
        case 'MOVE_RIGHT':
            return moveRight(state, action);
        default:
            return state;
    }
}

function addTask(action) {
    return {
        id: action.id,
        name: action.payload.name,
        desc: action.payload.desc,
        hours: action.payload.hours,
        status: statuses[0]
    }
}

function moveLeft(state, action) {
    let id = findById(state, action.payload.get('id'));
    let oldList = state.get('tasksList').get(id)
    let oldStatus = oldList.get('status');
    let objNew;
    if (state.get('tasksList').get(id).get('status') === statuses[0]) {
        objNew = oldList.set('status', statuses[3]);
    } else {
        objNew = oldList.set('status', statuses[getPrevStatus(oldStatus)]);
    }
    let listNew = state.get('tasksList').set(id, objNew)
    return state.set('tasksList', listNew);
}

function moveRight(state, action) {
    let id = findById(state, action.payload.get('id'));
    let oldList = state.get('tasksList').get(id)
    let oldStatus = oldList.get('status');
    let objNew;
    if (state.get('tasksList').get(id).get('status') === statuses[3]) {
        objNew = oldList.set('status', statuses[0]);
    } else {
        objNew = oldList.set('status', statuses[getNextStatus(oldStatus)]);
    }
    let listNew = state.get('tasksList').set(id, objNew)
    return state.set('tasksList', listNew);
}

function getNextStatus(status) {
    for (let i = 0; i < Object.keys(statuses).length; i++) {
        if (statuses[i] === status) {
            return ++i;
        }
    }
}

function getPrevStatus(status) {
    for (let i = 0; i < Object.keys(statuses).length; i++) {
        if (statuses[i] === status) {
            return --i;
        }
    }
}

function findById(state, id) {
    let returnId;
    state.get('tasksList').forEach((task, index) => {
        if (task.get('id') === id) {
            returnId = index;
        }
    })
    return returnId;
}

export default tasks
