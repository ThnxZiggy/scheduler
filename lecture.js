const { useEffect } = require("react");

useEffect(()=> {
  console.log('we have rendered')
  console.log('---------')
}) // runs forever because no array

useEffect(()=> {
  console.log('run once')
  
}, []) // runs once because of empty array

useEffect(()=> {
  console.log('number has changed') 
}, [num]) // put variable in array, if variable changes, run useEffect
      // aka runs anytime the variable inside the array changes

setnum(prev => {
  return prev + 1
})

//or

setnum(prev => prev + 1)

