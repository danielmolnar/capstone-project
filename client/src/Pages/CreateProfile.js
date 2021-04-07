import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StarOfLife } from '@styled-icons/fa-solid/StarOfLife';
import FormButton from '../components/Ui/Button/FormButton';
import isValidForm from '../lib/validateFunctions';
import serverApi from '../services/axiosServer';
import requests from '../services/requests';
import Tags from '../components/Tags';

export default function CreateProfile({
  friends,
  createHandler,
  favorites,
  watchlist,
  isLoggedIn,
  userProfile,
  setUserProfile,
}) {
  const [infoClicked, setInfoClicked] = useState(false);
  const userUrl = `${requests.user}${userProfile._id}`;

  const initialProfile = {
    age: userProfile?.age ?? '',
    email: userProfile?.email ?? '',
    favorites: [...favorites],
    favoritesNumber: favorites?.length,
    friendsNumber: friends?.length,
    name: userProfile?.name ?? '',
    tags: userProfile?.tags ?? [],
    watchlist: [...watchlist],
    watchlistNumber: watchlist.length,
  };
  const [profile, setProfile] = useState(initialProfile);

  const handleChange = (event) => {
    const field = event.target;
    let value = event.target.value;
    setProfile({
      ...profile,
      [field.name]: value,
    });
  };

  async function updateUserInfos(profile) {
    const response = await serverApi.put(userUrl, {
      age: profile.age,
      email: profile.email,
      name: profile.name,
      tags: profile.tags,
    });
    const data = response.data;
    setUserProfile(data);
  }

  function createProfile(event) {
    event.preventDefault();
    if (isValidForm(profile)) {
      createHandler(profile);
    } else {
      alert('Please submit valid credentials');
    }
  }

  function upDateProfile(event) {
    event.preventDefault();
    if (isValidForm(profile)) {
      updateUserInfos(profile);
    } else {
      alert('Please submit valid credentials');
    }
  }

  const addProfileTag = (tag) => {
    setProfile({
      ...profile,
      tags: [...profile.tags, tag],
    });
  };

  const removeProfileTag = (deletetag) => {
    const remainingTags = profile.tags.filter((tag) => tag !== deletetag);
    setProfile({ ...profile, tags: remainingTags });
  };

  return (
    <>
      <HeadlineWrapper>
        <h2>{isLoggedIn ? 'Edit Profile' : 'Create Profile'}</h2>
      </HeadlineWrapper>
      <PageWrapper>
        <Form>
          <label htmlFor="name">
            <p>Name</p>
            <br />
            <InputStyler
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder={userProfile?.name}
            />
          </label>
          <label htmlFor="age">
            <p>Age</p>
            <br />
            <InputStyler
              type="text"
              name="age"
              value={profile.age}
              onChange={handleChange}
              placeholder={userProfile?.age}
            />
          </label>
          <label htmlFor="age">
            <p>E-Mail*</p>
            <br />
            <InputStyler
              type="text"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder={userProfile?.email}
            />
          </label>
          <label htmlFor="tags">
            <p>User Tags</p>
            <br />

            <Tags
              headline="User Tags"
              addProfileTag={addProfileTag}
              tags={profile?.tags}
              removeProfileTag={removeProfileTag}
            />
          </label>
          <ButtonContainer isLoggedIn={isLoggedIn}>
            <FormButton onClick={createProfile} text="Submit" />
            <FormButton onClick={upDateProfile} text="Edit" />
          </ButtonContainer>
          <InfoContainer infoClicked={infoClicked}>
            <span onClick={() => setInfoClicked(!infoClicked)}>
              <Information />
            </span>

            <p>
              Information gathered on this page is for form validation practice
              only, and won't be otherwise used or shared. Feel free to populate
              imaginary information when creating a profile.
            </p>
          </InfoContainer>
        </Form>
      </PageWrapper>
    </>
  );
}

CreateProfile.propTypes = {
  friends: PropTypes.array,
  createHandler: PropTypes.func,
  favorites: PropTypes.array,
  watchlist: PropTypes.array,
  isLoggedIn: PropTypes.bool,
  userProfile: PropTypes.object,
  setUserProfile: PropTypes.func,
};

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;

  p {
    margin: 0;
  }

  label {
    margin: 0;
    margin-bottom: 1rem;
    max-width: 20rem;
    width: 100%;
  }
`;

const PageWrapper = styled.div`
  margin: 0 auto;
  width: 80%;
`;

const HeadlineWrapper = styled.div`
  margin-left: 20px;
`;

const InputStyler = styled.input`
  border: none;
  border-radius: 5px;
  height: 25px;
  max-width: 20rem;
  outline: none;
  padding: 10px;
  width: 100%;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 80%;
  max-width: 10rem;
  margin-top: 1rem;

  button:first-child {
    display: ${({ isLoggedIn }) => (isLoggedIn ? 'none' : '')};
  }

  button:last-child {
    display: ${({ isLoggedIn }) => (isLoggedIn ? '' : 'none')};
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 20rem;
  max-width: 20rem;
  span {
    cursor: pointer;
  }
  p {
    display: ${({ infoClicked }) => (infoClicked ? '' : 'none')};
    margin-left: 10px;
    font-size: 0.7rem;
  }
`;
const Information = styled(StarOfLife)`
  color: var(--secondary-100);
  height: 10px;
  width: 10px;
`;
