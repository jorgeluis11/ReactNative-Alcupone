function getId(state){
	return state.todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId);
	}, -1) + 1
}

export default function reducer(state, action) {
	switch(action.type){
		case "LOADING_GROUPON":
			return Object.assign({}, state, ...state.list, {
				loading:!state.loading
				});
		case "GET_LIST":
			return Object.assign({}, state, ...state.list, {
				list:[...action.result],
				loading:false
				});
		case "TOGGLE_GROUPON":
			state.grouponList.map(toggle=>{
				toggle.active = false;
			});
			state.grouponList[action.id].active = !state.grouponList[action.id].active;
			return Object.assign({}, state, ...state.grouponList, {
				grouponList:[...state.grouponList]
				});
		default:
			return state;
	}

}