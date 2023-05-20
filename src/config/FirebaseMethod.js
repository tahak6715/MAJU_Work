import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "firebase/auth";
  import { getDatabase, set, ref, onValue, push, remove } from "firebase/database";

  import app from "./FirebaseSetup";
  
  const auth = getAuth(app);
  const db = getDatabase(app);
  
  let ResturantSignup = (obj) => {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then((res) => {
          obj.id = res.user.uid;
          const reference = ref(db, `users/${obj.id}`);
          set(reference, obj)
            .then(() => {
            //   resolve("Data Send Successfully in Database and User Created");
            onValue(reference, (data) => {
                if (data.exists()) {
                  resolve(data.val());
                } else {
                  reject("Data Not Found :(");
                }
              });
            })
            .catch((err) => {
              reject(err.message);
            });
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  };


  let ResturantLogin = (obj) => {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then((res) => {
          const reference = ref(db, `users/${res.user.uid}`);
          onValue(reference, (data) => {
            if (data.exists()) {
              resolve(data.val());
            } else {
              reject("Data Not Found :(");
            }
          });
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  };
 

  let PostImages = (obj,ImageData) => {

      return new Promise( (resolve,reject) =>{
        // let refer = ref(db,`${nodeName}/`)
        const referenc = ref(db,`users/${obj.id}/Images/${ImageData.ImagesName}`)
        set(referenc,ImageData)
        .then((succ) =>{
            resolve("data send successfully")
        })
        .catch((err) =>{
            reject(err.message)
        })
    })
     }

 

     let GetAllResturantData = (nodeName) => {
      return new Promise( (resolve,reject) =>{
        let refer = ref(db,`${nodeName}/`)
        onValue(refer, (dt) =>{
            if(dt.exists()){
                let a  = Object.values(dt.val()) 
                // console.log(dt.val())
                resolve(a)
            }
        })
    })                                    
    };

  
     let UserSignup = (obj) => {
      return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
          .then((res) => {
            obj.id = res.user.uid;
            const reference = ref(db, `usersData/${obj.id}`);
            set(reference, obj)
              .then(() => {
              //   resolve("Data Send Successfully in Database and User Created");
              onValue(reference, (data) => {
                  if (data.exists()) {
                    resolve(data.val());
                  } else {
                    reject("Data Not Found :(");
                  }
                });
              })
              .catch((err) => {
                reject(err.message);
              });
          })
          .catch((err) => {
            reject(err.message);
          });
      });
    };
  

    
  let UserLogin = (obj) => {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then((res) => {
          const reference = ref(db, `usersData/${res.user.uid}`);
          onValue(reference, (data) => {
            if (data.exists()) {
              resolve(data.val());
            } else {
              reject("Data Not Found :(");
            }
          });
        })
        .catch((err) => {
          reject(err.message);
        });
    });
  };
 
  let PostReview = (obj,Review) => {

    return new Promise( (resolve,reject) =>{
      // let refer = ref(db,`${nodeName}/`)
      const referenc = ref(db,`usersData/${obj.id}/Review/${Review.ResturantName}`)
      set(referenc,Review)
      .then((succ) =>{
          resolve("data send successfully")
      })
      .catch((err) =>{
          reject(err.message)
      })
  })
   }


   let GetAllUserData = (nodeName) => {
    return new Promise( (resolve,reject) =>{
      let refer = ref(db,`${nodeName}/`)
      onValue(refer, (dt) =>{
          if(dt.exists()){
              let a  = Object.values(dt.val()) 
              // console.log(dt.val())
              resolve(a)
          }
      })
  })                                    
  };
  
  export {
    ResturantSignup,
    ResturantLogin,
    PostImages,
    UserSignup,
    UserLogin,
    GetAllUserData,
    GetAllResturantData,
    PostReview,
  };