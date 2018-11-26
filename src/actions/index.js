export const INCREMENT='INCREMENT'
export const DECREMENT='DECREMENT'

export const increment=()=>{//Action Creator
  return  {type:INCREMENT }//Action
}

export const decrement=()=>{
  return  {
      type:DECREMENT
    }
}
