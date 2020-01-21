import firebase from './../config/firebase/firebase'

function signupUser(data) {
    return async dispatch => {
        await firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((user) => {
                console.log(user.user.uid)
                console.log(data)
                firebase.firestore().collection('users').doc(user.user.uid).set(data)
                    .then((res) => {
                        console.log(res)
                        firebase.auth().currentUser.sendEmailVerification().then((res)=>{

                            alert()

                               dispatch({
                                type:"SIGNUPUSER"
                            })
                        })
                        .catch((error)=>{
                            console.log(error)
                        })

                    })
                    .catch((error) => {
                        console.log(error)
                    })


            })

            .catch((error) => {
                console.log(error)
            })
    }
}




function signupRes(data) {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((user) => {

                console.log(data)
                firebase.firestore().collection('users').doc(user.user.uid).set(data)
                 .then((res)=>{
                    firebase.auth().currentUser.sendEmailVerification().then((res) => {
                        console.log(res)
                        dispatch({
                         type:"SIGNUPRES"
                     })
                    })
                        .catch((error) => {
                            console.log(error)
                        })
                   
                    })
                    .catch((error)=>{
                     console.log(error)
                    })


            })

            .catch((error) => {
                console.log(error)
            })
    }
}

function Login(data,path) {
    return (dispatch) => {
   console.log(data)
   firebase.auth().signInWithEmailAndPassword(data.email,data.password)
   .then((res)=>{
       console.log(res.user)
       firebase.firestore().collection("users").doc(res.user.uid).get()
       .then((getData)=>{
           console.log(getData.data())
           let userData=getData.data()
           if(userData.gender!==undefined){
         path.push("/user")
           }
       })
   })
   .catch((error)=>{
       console.log(error)
   })
    }
}



export {
    signupUser,
    signupRes,
    Login,
}


