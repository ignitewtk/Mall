import { AnyAction, createSlice } from '@reduxjs/toolkit'
import { createSelector } from 'reselect'
// import { client } from '../../api/client'
// import { StatusFilters } from '../filters/filtersSlice'

interface InitialState {
    message: string,
    obj: {}
}

const initialState: InitialState = {
    message: 'idle',
    obj: {},
}

// Method 1 to define a slice
export const test1Slice = createSlice({
    name: 'test1',
    initialState,
    reducers: {
        func: state => {
            return {
                message: state.message + 'test1',
                obj: {}
            }
        }
    }
})

// Method 2 to define a slice
export function test2Reducer(state = initialState, action: AnyAction) {
    return {
        message: "test2",
        obj: {}
    }
//   switch (action.type) {
//     case 'todos/todoAdded': {
//       const todo = action.payload
//       return {
//         ...state,
//         entities: {
//           ...state.entities,
//           [todo.id]: todo,
//         },
//       }
//     }
//     case 'todos/todoToggled': {
//       const todoId = action.payload
//       const todo = state.entities[todoId]
//       return {
//         ...state,
//         entities: {
//           ...state.entities,
//           [todoId]: {
//             ...todo,
//             completed: !todo.completed,
//           },
//         },
//       }
//     }
//     case 'todos/colorSelected': {
//       const { color, todoId } = action.payload
//       const todo = state.entities[todoId]
//       return {
//         ...state,
//         entities: {
//           ...state.entities,
//           [todoId]: {
//             ...todo,
//             color,
//           },
//         },
//       }
//     }
//     case 'todos/todoDeleted': {
//       const newEntities = { ...state.entities }
//       delete newEntities[action.payload]
//       return {
//         ...state,
//         entities: newEntities,
//       }
//     }
//     case 'todos/allCompleted': {
//       const newEntities = { ...state.entities }
//       Object.values(newEntities).forEach((todo) => {
//         newEntities[todo.id] = {
//           ...todo,
//           completed: true,
//         }
//       })
//       return {
//         ...state,
//         entities: newEntities,
//       }
//     }
//     case 'todos/completedCleared': {
//       const newEntities = { ...state.entities }
//       Object.values(newEntities).forEach((todo) => {
//         if (todo.completed) {
//           delete newEntities[todo.id]
//         }
//       })
//       return {
//         ...state,
//         entities: newEntities,
//       }
//     }
//     case 'todos/todosLoading': {
//       return {
//         ...state,
//         status: 'loading',
//       }
//     }
//     case 'todos/todosLoaded': {
//       const newEntities = {}
//       action.payload.forEach((todo) => {
//         newEntities[todo.id] = todo
//       })
//       return {
//         ...state,
//         status: 'idle',
//         entities: newEntities,
//       }
//     }
//     default:
//       return state
//   }
}

export const { func } = test1Slice.actions