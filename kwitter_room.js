
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAYHEar4MV0Ai_WuGmprf6vASRMDg8qDRg",
      authDomain: "classtest-da00f.firebaseapp.com",
      projectId: "classtest-da00f",
      storageBucket: "classtest-da00f.appspot.com",
      messagingSenderId: "871724382069",
      appId: "1:871724382069:web:cc4b94cea5a65dfb4f453c"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

      function addRoom()
      {
            room_name = document.getElementById("room_name").value;
            
            firebase.database().ref("/").child(room_name).update({
                  purpose : "adding room name"
            });

            localStorage.setItem("room_name", room_name);

            window.location = "index.html";
      }

      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name)
            window.location = "index.html";
      };

      function logout() {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html";

      }

      function send()
      {
            msg= document.getElementById("msg").value;
            firebase.database() .ref(room_name).push({
                  name: user_name,
                  like:0
            });

            document.getElementById("msg").value = "";
      }
    

      //End code

getData();


