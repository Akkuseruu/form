import React, {useEffect} from 'react'


export default function FormLogin() {

const start = useEffect(() => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  console.log(storedUser);
},[])

  return (
    <div>
        <h1>FormLogin</h1>
    </div>
  )
}
