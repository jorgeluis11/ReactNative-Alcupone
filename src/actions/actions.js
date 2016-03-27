import ReduxThunk from 'redux-thunk'

let actions = {
		// },
        toggleGroupon: function(id){
            return {
                type:"TOGGLE_GROUPON",
                id
            }
        },
        loading: function(){
            return {
                type:"LOADING_GROUPON",
            }
        },

		getGrouponList: function() {
        return async function(dispatch) {
            var response = await fetch(`http://gruponaso.herokuapp.com/?start=0&index=0&list=gustazos`)
            .then((response) => {
                return response.json();
            });
            
            dispatch({
                    type: "GET_LIST",
                    result: response.items,
              })
            return response
        }
    },
        getToggledList: function(list) {
        return function(dispatch) {
            if (list.length === 0) 
                {
                    dispatch({
                    type: "GET_LIST",
                    result: []})
                };

            var newList = list.filter((elem,i) => {
                    return elem.active 
                      
                }); 

            newList = newList.map((elem,i) => { 
                    return elem.name;
                }).join(",");

            fetch(`http://gruponaso.herokuapp.com/?start=0&index=0&list=${newList}`)
            .then((response) => {
                return response.json();
            })
            .then((data)=>{
                dispatch({
                    type: "GET_LIST",
                    result: data.items})
            });

            // console.log("response", response)
            
            // Promise.all([
               
                // ])
            
        }
    }
}



// let getData = function() {
//     //The thunk is also passed the state as a second parameter, but it's not
//     //needed very frequently.
//     return async function(dispatch) {
//         //These actions use the meta property to denote what they are doing.
//         //Another solution is to use separate action types.
//         // dispatch({
//         //     type: "GET_LIST",
//         //     meta: 'request',
//         // });
//         //Normally, you'd have an ajax call, or some other asynchronous action
//         //beside a setTimeout.
//         var response = await fetch(`https://notaso.com/api/v2/professors/?format=json`)
//       	.then((response) => {
//       		  dispatch({
//                 type: "GET_LIST",
//                 todo: response.json().results(),
//             });
//         })
      
//     }
// };



export default actions