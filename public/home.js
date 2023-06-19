function Home() {
  return (
    //premade card from context.js
    <Card
      txtcolor="black"
      header="MIT Bank Home"
      title="Welcome to the bank"
      text="Join our bank by creating an account. Login to checkout your balance. When you get new funds or need funds go to deposit and withdraw. You can now attach your account through Google login. Welcome and Thank you for choosing MIT Bank"
      body={<img src="bank.png" className="img-fluid" alt="Responsive image" />}
    />
  );
}
