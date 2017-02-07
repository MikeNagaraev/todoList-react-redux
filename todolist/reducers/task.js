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
            console.log('add', state.get('tasksList'))
            return state.get('tasksList').push(Immutable.fromJS(addTask(action)));
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
        status: statuses.TODO
    }
}

function moveLeft(state, action) {

}

function moveRight(state, action) {}

function findObject(state, id) {}

export default tasks
