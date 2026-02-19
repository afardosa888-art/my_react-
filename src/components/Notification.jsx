function Notification() {
  const isAdmin = true;

  return (
    <div style={{backgroundColor:"red"}}>
      <h1>Dashboard</h1>
          {isAdmin && <p>Admin Panel Access</p>}
          {isAdmin && <h2>fariimo ayaa kuyalo</h2>}
    </div>
  );
}
export default Notification;