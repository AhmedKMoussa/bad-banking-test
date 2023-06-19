//information for firebase app
const firebaseConfig = {
  apiKey: "AIzaSyC4cD92PUoOH-B_TsfmT-NNF1dIiATuf88",
  authDomain: "full-stack-bank-30cb8.firebaseapp.com",
  projectId: "full-stack-bank-30cb8",
  storageBucket: "full-stack-bank-30cb8.appspot.com",
  messagingSenderId: "946875310949",
  appId: "1:946875310949:web:8ecd72cefc0bb5a005778c",
  measurementId: "G-KETVZ7EV4D",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function Login(props) {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    //context card for login
    <Card
      bgcolor="secondary"
      header="Login"
      status={status}
      body={
        show ? (
          <LoginForm
            setUser={props.setUser}
            setShow={setShow}
            setStatus={setStatus}
          />
        ) : (
          <LoginMsg setShow={setShow} setStatus={setStatus} />
        )
      }
    />
  );
}
//once loggined in should receive a success message
function LoginMsg(props) {
  return (
    <>
      <h5>Success</h5>
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => props.setShow(true)}
      >
        Authenticate again
      </button>
    </>
  );
}
//login process
function LoginForm(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handle() {
    //login without authentication
    /*fetch(`/account/login/${email}/${password}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus('');
            props.setShow(false);
            props.setUser(data);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });*/
    //login with authentication through firebase
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        console.log(firebaseUser);
        fetch(`/account/login/${email}/${password}`)
          .then((response) => response.text())
          .then((text) => {
            try {
              const data = JSON.parse(text);
              props.setStatus("");
              props.setShow(false);
              props.setUser(data);
              console.log("JSON:", data);
            } catch (err) {
              props.setStatus(text);
              console.log("err:", text);
            }
          });
        //success
      } else {
        //error codes
      }
    });
    promise.catch((e) => console.log(e.message));
  }
  //login through google authentication
  function handleGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider) //popup window
      .then(function (result) {
        console.log(result);
        const gmail = encodeURI(result.additionalUserInfo.profile.name);
        console.log(gmail);
        fetch(`/account/login/${gmail}/${gmail}`)
          .then((response) => response.text())
          .then(async (text) => {
            try {
              const data = JSON.parse(text);
              props.setStatus("");
              props.setShow(false);
              props.setUser(data);
              console.log("JSON:", data);
            } catch (err) {
              console.log(err);
              props.setStatus(text);
              console.log("err:", text);

              const url = `/account/create/${gmail}/${gmail}/${gmail}`;
              await fetch(url);
              const res = await fetch(`/account/login/${gmail}/${gmail}`);
              const text = await res.text();
              const data = JSON.parse(text);
              props.setStatus("");
              props.setShow(false);
              props.setUser(data);
            }
          });
      })
      .catch(function (error) {
        console.log(error.code);
        console.log(error.message);
      });
  }

  return (
    <>
      Email
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <br />
      Password
      <br />
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <br />
      <button type="submit" className="btn btn-light" onClick={handle}>
        Login
      </button>
      <br />
      <br />
      <button type="submit" className="btn btn-light" onClick={handleGoogle}>
        Google Login
      </button>
    </>
  );
}
