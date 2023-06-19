function Balance(props) {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    <Card
      bgcolor="info"
      header="Balance"
      status={status}
      body={
        show ? (
          <BalanceForm
            user={props.user}
            setShow={setShow}
            setStatus={setStatus}
          />
        ) : (
          <BalanceMsg setShow={setShow} />
        )
      }
    />
  );
}

function BalanceMsg(props) {
  return (
    <>
      <h5>Success</h5>
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => {
          props.setShow(true);
          props.setStatus("");
        }}
      >
        Check balance again
      </button>
    </>
  );
}

function BalanceForm(props) {
  const [balance, setBalance] = React.useState("");

  function handle() {
    //fetching the account from the api
    fetch(`/account/findOne/${props.user.email}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          props.setStatus(`$ ${data.balance}`);
          props.setShow(false);
          setBalance(data.balance); //setting the balance to have access
          console.log("JSON:", data);
        } catch (err) {
          props.setStatus(text);
          console.log("err:", text);
        }
      });
  }

  return (
    <>
    {/* displaying the users name */}
      User
      <br />
      <p>{props.user.name}</p> 
      <button type="submit" className="btn btn-light" onClick={handle}>
        Check Balance
      </button>
    </>
  );
}
