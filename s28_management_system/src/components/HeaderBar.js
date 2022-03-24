import imgLogo from "../resources/imageLogo.jpg"
import "../styles/HeaderBar.css"

function HeaderBar () {
  return (
    <header className='global-header absolute left-0'>
      <img src={imgLogo} alt='' className='logo' />
      {/* <button className='logoName' onClick={toHomePage}>
        Avartus
      </button>
      <button className='headerbar-dgraph' onClick={toLocationPage}>
        Location
      </button>
      <button className='headerbar-dgraph' onClick={toProfilePage}>
        Profile
      </button>
      <button className='headerbar-dgraph' onClick={toUsersPage} hidden={!HiddenByTrustLevel()}>
        Users
      </button>
      <Dropdown overlay={menu} trigger={["click"]}>
        <button className='btn-green absolute right-2'>{btnText}</button>
      </Dropdown> */}
    </header>
  );
};

export default HeaderBar;