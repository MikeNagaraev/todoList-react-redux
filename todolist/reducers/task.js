const task = (action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                name: action.payload.name,
                desc: action.payload.desc,
                hours: action.payload.hours
            }
        default:
            return state;
    }
}

const tasks = (state = { 0:[], 1:[], 2:[], 3:[] }, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            var obj = Object.assign({}, state);
            obj[0].push(task(action));
            return obj
        case 'MOVE_LEFT':
            var obj = Object.assign({}, state);
            return left(obj, action.payload);
        case 'MOVE_RIGHT':
            var obj = Object.assign({}, state);
            return right(obj, action.payload);
        default:
            return state;
    }
}

function findObject(tasks, id) {
    let todoObj = {}
    for (let i = 0; i < Object.keys(tasks).length; i++) {
        for (let j = 0; j < tasks[i].length; j++) {
            if (tasks[i][j].id === id) {
                todoObj.stateId = i;
                todoObj.idInStateArray = j;
                return todoObj;
            }
        }
    }
}

function left(tasks, action) {
    let todoObj = findObject(tasks, action.id);
    if (todoObj.stateId >= 0) {
        let repaceTodo = tasks[todoObj.stateId].splice(todoObj.idInStateArray, 1)
        if (todoObj.stateId > 0) {
            tasks[todoObj.stateId - 1].push(repaceTodo[0])
        } else {
            tasks[Object.keys(tasks).length - 1].push(repaceTodo[0])
        }
    }
    return tasks;
}

function right(tasks, action) {
    let todoObj = findObject(tasks, action.id);
    if (todoObj.stateId >= 0) {
        let repaceTodo = tasks[todoObj.stateId].splice(todoObj.idInStateArray, 1)
        if (todoObj.stateId < Object.keys(tasks).length - 1) {
            tasks[todoObj.stateId + 1].push(repaceTodo[0])
        } else {
            tasks[0].push(repaceTodo[0])
        }
    }
    return tasks;
}

export default tasks
