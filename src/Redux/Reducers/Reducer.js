export const data = [


      {
        id:1,
        completed: false,
        task: "learn Node js"
    },
    {
        id:2,
        completed: true,
        task:" do checkpoint API"
    },
    {
        id:3,
        completed: false,
        task:"learn mongo db "
    }
]


export const Reducer = (state=data, action)=>{
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
            case 'REMOVE_TODO' :   
            return state.filter(el=> el.id !== action.payload)
        case 'TOGGLE_TODO' :
            return state.map(el => el.id === action.payload ? {...el,completed:!el.completed} : el)
        case 'EDIT_TODO' :
            return state.map(el=> el.id === action.payload.id ? {...el, task:action.payload.task} : el)
        default:
            return state;
    }
}