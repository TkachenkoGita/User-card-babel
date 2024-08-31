const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

function App() {
  const userInfo = {
    imgSrc:
      "https://i3.wp.com/static.vecteezy.com/system/resources/previews/006/627/154/non_2x/beard-logo-illustration-barbershop-logo-template-haircut-men-vector.jpg",
    name: "Mayur Devle",
    profession: "UI/UX DESIGNER",
    activity: "92%",
    rating: "85%",
    gender: "male",
  };
  return (
    <>
      <UserInfo user={userInfo} />
    </>
  );
}

function UserInfo({ user }) {
  const { name, profession, activity, rating, gender, imgSrc } = user;
  const userAvatar = {
    color: gender === "male" ? "white" : "#f9bde8",
  };
  return (
    <>
      <article>
        <img className="container-right" />
        <span>
          <div className="content-block">
            <div className="img-div">
              <img src={imgSrc} alt={name} />
            </div>
            <div className="user-info">
              <p style={userAvatar}>{name}</p>
              <p className="user-prof">{profession}</p>
            </div>

            <div className="button">
              <button>
                <p className="button-name">View Profile</p>
              </button>
            </div>
          </div>

          <div className="bottom">
            <div className="bottom-el">
              <div className="bottom-el__info">
                <p>{rating}</p>
                <p>Rating</p>
              </div>
            </div>
            <hr />
            <div className="bottom-el">
              <div className="bottom-el__info ">
                <p>{activity}</p>
                <p>Activity</p>
              </div>
            </div>
          </div>
        </span>
        <div className="container-left"></div>
      </article>
    </>
  );
}
